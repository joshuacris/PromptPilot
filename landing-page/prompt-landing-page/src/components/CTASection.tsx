
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="animated-blur-circle w-[600px] h-[600px] -top-20 -right-20 bg-purple-100"></div>
      <div className="animated-blur-circle w-[500px] h-[500px] -bottom-40 -left-20 bg-blue-100"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-background to-secondary/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="section-title mb-4">
              Ready to Master the Art of Prompt Engineering?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Start crafting perfect prompts today and unlock the full potential of AI for your organization.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            No credit card required. Start with our free tier today.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
