
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    quote: "The prompt frameworks transformed how our marketing team interacts with AI. We're getting consistently better content in less time.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechNova"
  },
  {
    quote: "As a developer, I was skeptical about prompt engineering, but the systematic approach helped me create AI tools that actually deliver what my team needs.",
    author: "Michael Chen",
    role: "Senior Developer",
    company: "Quantum Solutions"
  },
  {
    quote: "The ROI has been incredible. Our research team can now accomplish in hours what used to take days, all because of better prompt design.",
    author: "Emily Rodriguez",
    role: "Research Lead",
    company: "Innovate Labs"
  },
  {
    quote: "The difference between average prompts and expertly crafted ones is night and day. This has been a game-changer for our creative processes.",
    author: "David Park",
    role: "Creative Director",
    company: "Design Collective"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // @ts-ignore
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // @ts-ignore
    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [isAnimating]);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
      <div className="animated-blur-circle w-[400px] h-[400px] bottom-20 -left-20 bg-purple-300/30"></div>
      <div className="animated-blur-circle w-[500px] h-[500px] top-20 -right-20 bg-blue-300/30"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 text-xs font-semibold">
            Success Stories
          </div>
          <h2 className="section-title mb-4">
            From Our Clients
          </h2>
          <p className="text-primary-foreground/80 text-balance">
            Discover how organizations are achieving breakthrough results with our prompt engineering approach.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-8 left-8 text-primary-foreground/30">
            <MessageSquare size={60} />
          </div>
          
          <div className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-10 shadow-lg min-h-[300px] flex flex-col justify-center">
            <div className="mb-8 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeIndex 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute'
                  }`}
                >
                  <p className="text-xl md:text-2xl font-medium mb-6 text-balance">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-primary-foreground/70 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex 
                        ? 'bg-primary-foreground w-6' 
                        : 'bg-primary-foreground/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={goToPrev}
                  className="border-primary-foreground/20 text-primary-foreground"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={goToNext}
                  className="border-primary-foreground/20 text-primary-foreground"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
