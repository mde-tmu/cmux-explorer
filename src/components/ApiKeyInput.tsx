
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import GlassCard from './GlassCard';
import AnimatedTransition from './AnimatedTransition';

const ApiKeyInput: React.FC = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const storedKey = localStorage.getItem('openai_api_key');
    setHasKey(!!storedKey);
    if (storedKey) {
      // Mask the key for display
      setApiKey('•'.repeat(16));
    }
  }, []);

  const handleSaveKey = () => {
    if (apiKey && apiKey !== '•'.repeat(16)) {
      localStorage.setItem('openai_api_key', apiKey);
      setHasKey(true);
      setIsOpen(false);
      toast({
        title: "API Key Saved",
        description: "Your OpenAI API key has been saved.",
        duration: 3000,
      });
    }
  };

  const handleResetKey = () => {
    localStorage.removeItem('openai_api_key');
    setApiKey('');
    setHasKey(false);
    toast({
      title: "API Key Removed",
      description: "Your OpenAI API key has been removed.",
      duration: 3000,
    });
  };

  return (
    <AnimatedTransition show={true} animation="fade" delay={700}>
      <GlassCard className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-foreground/80">OpenAI API Key</h3>
            <p className="text-xs text-foreground/60 mt-1">
              {hasKey 
                ? "API key is set (using real LLM)" 
                : "No API key set (using mock data)"}
            </p>
          </div>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsOpen(true)}
              className="text-xs bg-background/20 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-200"
            >
              {hasKey ? "Update Key" : "Set API Key"}
            </Button>
            {hasKey && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleResetKey}
                className="text-xs bg-destructive/20 backdrop-blur-sm border-white/10 hover:bg-destructive/40 text-destructive-foreground transition-all duration-200"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      </GlassCard>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-xl border-white/10">
          <DialogHeader>
            <DialogTitle>OpenAI API Key</DialogTitle>
            <DialogDescription>
              Enter your OpenAI API key to use for natural language processing capabilities.
              Your key is stored only in your browser's local storage.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="password"
              placeholder="sk-..."
              value={apiKey === '•'.repeat(16) ? '' : apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="bg-white/5 border-white/10"
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button onClick={handleSaveKey}>Save Key</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AnimatedTransition>
  );
};

export default ApiKeyInput;
