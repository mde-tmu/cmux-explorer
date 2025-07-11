
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  elevation?: 'low' | 'medium' | 'high';
  hasBorder?: boolean;
}

const GlassCard = ({ 
  children, 
  className, 
  elevation = 'medium', 
  hasBorder = true,
  ...props 
}: GlassCardProps) => {
  const elevationClasses = {
    low: 'shadow-sm',
    medium: 'shadow-md',
    high: 'shadow-lg',
  };

  return (
    <div
      className={cn(
        'glass bg-white/10 backdrop-blur-md rounded-xl',
        hasBorder && 'border border-white/20',
        elevationClasses[elevation],
        'transition-all duration-300 ease-in-out',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
