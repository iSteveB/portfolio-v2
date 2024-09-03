'use client';
import { useState, useCallback } from 'react';

type TooltipProps = {
  children: React.ReactNode;
  tooltip: string;
  copyText?: string;
};

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip, copyText }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltipText, setTooltipText] = useState(tooltip);

  const handleMouseEnter = useCallback((e: React.MouseEvent) => {
    setShowTooltip(true);
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowTooltip(false);
    setTooltipText(tooltip);
  }, [tooltip]);

  const handleClick = useCallback(() => {
    if (copyText) {
      navigator.clipboard.writeText(copyText).then(() => {
        setTooltipText("C'est copié !");
      });
    }
  }, [copyText]);

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {children}
      </span>
      {showTooltip && (
        <span 
          className="fixed z-50 rounded-lg bg-base-900 px-3 py-2 text-sm font-medium text-neutral shadow-sm dark:bg-gray-700"
          style={{
            left: `${position.x}px`,
            top: `${position.y + 15}px`,
          }}
        >
          {tooltipText}
        </span>
      )}
    </span>
  );
};

export default Tooltip;