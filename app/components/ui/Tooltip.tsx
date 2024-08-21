import { useState, useCallback } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  tooltip: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = useCallback((e: { clientX: number; clientY: number; }) => {
    setShowTooltip(true);
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e: { clientX: number; clientY: number; }) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div 
          className=" fixed z-50 rounded-lg bg-base-900 px-3 py-2 text-sm font-medium text-neutral shadow-sm dark:bg-gray-700"
          style={{
            left: `${position.x}px`,
            top: `${position.y + 15}px`,
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  );
};



export default Tooltip;