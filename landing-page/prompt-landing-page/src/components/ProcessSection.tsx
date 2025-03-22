
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Define your objectives and desired outcomes clearly before crafting your prompt."
    },
    {
      number: "02",
      title: "Craft",
      description: "Build your prompt using our tested frameworks and expert guidance."
    },
    {
      number: "03",
      title: "Test",
      description: "Evaluate your prompt's performance and gather results to analyze effectiveness."
    },
    {
      number: "04",
      title: "Refine",
      description: "Iteratively improve your prompt based on feedback and performance metrics."
    },
    {
      number: "05",
      title: "Deploy",
      description: "Implement your optimized prompts into your workflows and systems."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Process</div>
          <h2 className="section-title mb-4">
            A Systematic Approach to Prompt Engineering
          </h2>
          <p className="text-muted-foreground text-balance">
            Follow our proven methodology to develop prompts that consistently deliver exceptional results.
          </p>
        </div>
        
        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 z-0"></div>
          
          <div className="space-y-8 lg:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-0 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
              >
                <div 
                  className={`lg:w-[45%] p-6 bg-card rounded-xl border border-border/30 shadow-sm ${index % 2 === 0 ? 'lg:text-right lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'}`}
                >
                  <div className="inline-block mb-3 px-2 py-1 bg-primary/5 rounded-md text-xs font-mono">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-[55px] transform -translate-x-1/2 text-primary">
                    <ArrowRight className="rotate-90 opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
