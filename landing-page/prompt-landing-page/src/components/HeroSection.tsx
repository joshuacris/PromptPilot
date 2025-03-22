
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessagesSquare, Wand2 } from 'lucide-react';

const HeroSection = () => {
  const promptTextRef = useRef<HTMLSpanElement>(null);
  const promptTexts = [
    "Generate a detailed business strategy",
    "Write engaging marketing copy",
    "Create a captivating story",
    "Design a research protocol",
    "Develop a learning curriculum"
  ];

  useEffect(() => {
    if (!promptTextRef.current) return;
    
    let index = 0;
    const interval = setInterval(() => {
      const targetText = promptTexts[index];
      const currentElement = promptTextRef.current;
      
      if (currentElement) {
        // Fade out effect
        currentElement.style.opacity = '0';
        
        setTimeout(() => {
          if (currentElement) {
            currentElement.textContent = targetText;
            // Fade in effect
            currentElement.style.opacity = '1';
          }
        }, 500);
      }
      
      index = (index + 1) % promptTexts.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-50 z-0"></div>
      <div className="animated-blur-circle w-[500px] h-[500px] -top-20 -left-20 bg-blue-200"></div>
      <div className="animated-blur-circle w-[600px] h-[600px] top-40 -right-20 bg-purple-200"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-primary/5 rounded-full border border-primary/10 text-xs font-semibold">
            Elevate your AI interactions
          </div>
          
          <h1 className="hero-text mb-6 text-balance">
            Master the Art of <br className="hidden sm:block" />
            Prompt Engineering
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Craft perfect prompts that get precise, consistent results every time. Unlock the full potential of AI with expert-level prompt engineering.
          </p>
          
          <div className="bg-accent/50 backdrop-blur-sm rounded-lg p-4 mb-8 border border-accent-foreground/5 shadow-sm">
            <p className="font-mono text-sm md:text-base text-primary/90">
              <span className="text-blue-500">&gt;</span> "I need you to 
              <span ref={promptTextRef} className="transition-opacity duration-500 ml-1 text-primary font-semibold">
                generate a detailed business strategy
              </span>"
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Start crafting prompts
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Watch demo
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MessagesSquare className="mr-2 h-4 w-4" />
              <span>10x more effective results</span>
            </div>
            <div className="flex items-center">
              <Wand2 className="mr-2 h-4 w-4" />
              <span>Expert-crafted templates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
