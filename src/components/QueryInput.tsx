
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';
import AnimatedTransition from './AnimatedTransition';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isProcessing: boolean;
  className?: string;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit, isProcessing, className }) => {
  const [query, setQuery] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isProcessing) {
      onSubmit(query.trim());
    }
  };

  // Focus textarea on component mount
  useEffect(() => {
    if (textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 800);
    }
  }, []);

  return (
    <GlassCard 
      className={cn('px-4 py-4 md:p-6 transition-all duration-500', className)}
      elevation="medium"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AnimatedTransition show={true} animation="slide-up" delay={500}>
          <div className="space-y-2">
            <label htmlFor="query" className="text-sm font-medium text-foreground/80">
              Enter your query
            </label>
            <Textarea
              ref={textareaRef}
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your question here..."
              className="min-h-[100px] resize-none focus:ring-1 focus:ring-primary/50 bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-200"
              disabled={isProcessing}
            />
          </div>
        </AnimatedTransition>

        <AnimatedTransition show={true} animation="slide-up" delay={600}>
          <div className="flex items-center justify-end pt-2">
            <Button
              type="submit"
              disabled={!query.trim() || isProcessing}
              className="relative overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              {isProcessing ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : (
                <span className="flex items-center">
                  Generate SPARQL
                  <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              )}
            </Button>
          </div>
        </AnimatedTransition>
      </form>
    </GlassCard>
  );
};

export default QueryInput;
