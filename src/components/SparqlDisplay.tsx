
import React, { useEffect, useRef } from 'react';
import GlassCard from './GlassCard';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatedTransition from './AnimatedTransition';

interface SparqlDisplayProps {
  sparqlQuery: string;
  isGenerating: boolean;
  onRunQuery: () => void;
  isRunning: boolean;
  className?: string;
}

const SparqlDisplay: React.FC<SparqlDisplayProps> = ({
  sparqlQuery,
  isGenerating,
  onRunQuery,
  isRunning,
  className
}) => {
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (codeRef.current && !isGenerating && sparqlQuery) {
      codeRef.current.scrollTop = 0;
    }
  }, [sparqlQuery, isGenerating]);

  return (
    <GlassCard className={cn('p-4 md:p-6 overflow-hidden', className)}>
      <AnimatedTransition show={true} animation="fade" delay={100}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-medium text-foreground/80">Generated SPARQL Query</h3>
          <div className="flex space-x-2">
            {sparqlQuery && !isGenerating && (
              <Button
                size="sm"
                variant="outline"
                className="text-xs bg-background/20 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-200"
                onClick={() => {
                  navigator.clipboard.writeText(sparqlQuery);
                }}
              >
                Copy
              </Button>
            )}
          </div>
        </div>
      </AnimatedTransition>

      <div className="relative">
        <AnimatedTransition show={true} animation="fade" delay={200}>
          <pre
            ref={codeRef}
            className={cn(
              'bg-black/90 backdrop-blur-sm p-4 rounded-md overflow-auto max-h-[300px] font-mono text-sm',
              'scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent',
              isGenerating ? 'opacity-70' : 'opacity-100',
              'transition-opacity duration-300'
            )}
          >
            {isGenerating ? (
              <div className="typing-indicator text-white">
                Generating SPARQL query
              </div>
            ) : sparqlQuery ? (
              <code className="text-white font-medium">{sparqlQuery}</code>
            ) : (
              <code className="text-gray-400">Your SPARQL query will appear here...</code>
            )}
          </pre>
        </AnimatedTransition>

        {sparqlQuery && !isGenerating && (
          <AnimatedTransition show={true} animation="slide-up" delay={300}>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={onRunQuery}
                disabled={isRunning}
                className="relative overflow-hidden group bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                {isRunning ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Running Query
                  </span>
                ) : (
                  <span className="flex items-center">
                    Execute Query
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                )}
              </Button>
            </div>
          </AnimatedTransition>
        )}
      </div>
    </GlassCard>
  );
};

export default SparqlDisplay;
