import React, { useState, useEffect, useRef } from 'react';

interface ScrollIndicatorProps {
  message?: string;
  scrollContainerSelector: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ scrollContainerSelector }) => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector(scrollContainerSelector) as HTMLElement;
    if (scrollContainer) {
      scrollContainerRef.current = scrollContainer;

      const handleScroll = () => {
        if (scrollContainer.scrollTop > 10) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      };

      scrollContainer.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [scrollContainerSelector]);

  if (!isVisible) return null;

  return (
    <div className="mt-[10%] inline-block overflow-hidden text-sm font-normal tracking-[2px] text-accent-100 no-underline">
      <span className="relative mx-auto box-border block h-[50px] w-[32px] rounded-[23px] border-2 border-neutral bg-base-800">
        <span className="absolute left-1/2 top-[29%] -ml-1 -mt-1 block h-3 w-1 translate-x-1/2 animate-scrollIcon rounded-full bg-accent-100"></span>
      </span>
    </div>
  );
};

export default ScrollIndicator;