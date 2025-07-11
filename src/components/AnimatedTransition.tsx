
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTransitionProps {
  show: boolean;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down';
  delay?: number;
}

const AnimatedTransition: React.FC<AnimatedTransitionProps> = ({
  show,
  children,
  className,
  duration = 300,
  animation = 'fade',
  delay = 0
}) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) setShouldRender(true);
    
    let timer: NodeJS.Timeout;
    
    if (!show && shouldRender) {
      timer = setTimeout(() => {
        setShouldRender(false);
      }, duration);
    }
    
    return () => clearTimeout(timer);
  }, [show, duration, shouldRender]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'slide-up':
        return show ? 'animate-slide-up' : 'animate-fade-out';
      case 'slide-down':
        return show ? 'animate-slide-down' : 'animate-fade-out';
      case 'fade':
      default:
        return show ? 'animate-fade-in' : 'animate-fade-out';
    }
  };

  const style = {
    animationDuration: `${duration}ms`,
    animationDelay: delay > 0 ? `${delay}ms` : undefined,
    opacity: shouldRender && !show ? 0 : 1,
  };

  if (!shouldRender) return null;

  return (
    <div
      className={cn(getAnimationClasses(), className)}
      style={style}
    >
      {children}
    </div>
  );
};

export default AnimatedTransition;
