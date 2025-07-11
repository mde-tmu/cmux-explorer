
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('w-full py-6 px-8', className)}>
      <div className="max-w-7xl mx-auto">
        <AnimatedTransition show={true} animation="slide-down" delay={300}>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-semibold">C</span>
            </div>
            <h1 className="text-xl font-medium tracking-tight">CMUX Explorer</h1>
          </div>
        </AnimatedTransition>
      </div>
    </header>
  );
};

export default Header;
