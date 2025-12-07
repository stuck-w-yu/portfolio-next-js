'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from 'react';

import './Dock.css';

// --- Interfaces ---

export interface DockItemData {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

interface DockItemProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
}

// --- Sub-Components ---

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {/* PERBAIKAN DI SINI: Casting ke ReactElement<any> */}
      {Children.map(children, (child) =>
        cloneElement(child as React.ReactElement<any>, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = '', ...rest }: any) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pastikan isHovered ada sebelum subscribe
    if (!isHovered) return;

    const unsubscribe = isHovered.on('change', (latest: number) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: "-50%" }}
          animate={{ opacity: 1, y: -10, x: "-50%" }}
          exit={{ opacity: 0, y: 0, x: "-50%" }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

// --- Main Component ---

export default function Dock({
  items,
  className = '',
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const springConfig = { mass: 0.1, stiffness: 150, damping: 12 };

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, magnification + 20]);
  const height = useSpring(heightRow, springConfig);

  return (
    <motion.div 
      style={{ height }} 
      className="dock-outer relative w-full"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`dock-panel ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={springConfig}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}