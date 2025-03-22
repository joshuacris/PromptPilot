
import React from 'react';
import { Sparkles, Lightbulb, BarChart, Shapes, Bot, Zap } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="h-10 w-10" />,
    title: "Precise Results",
    description: "Craft prompts that consistently deliver exactly what you need, reducing iterations and saving time."
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Prompt Templates",
    description: "Access our library of expert-designed templates for different use cases and industries."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Performance Analytics",
    description: "Track and analyze your prompt effectiveness with detailed metrics and suggestions."
  },
  {
    icon: <Shapes className="h-10 w-10" />,
    title: "Custom Frameworks",
    description: "Build personalized prompt frameworks tailored to your specific needs and workflows."
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "AI Integration",
    description: "Seamlessly connect with leading AI platforms and tools through our unified interface."
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Rapid Iteration",
    description: "Fine-tune your prompts in real-time with our interactive editing and testing environment."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-secondary/50 relative">
      <div className="absolute inset-0 bg-subtle-grid opacity-70 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Features</div>
          <h2 className="section-title mb-4">
            Everything You Need for Prompt Mastery
          </h2>
          <p className="text-muted-foreground text-balance">
            Our comprehensive suite of tools and resources empowers you to create, refine, and optimize your prompts for any use case.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 mb-4 rounded-lg bg-primary/5 w-fit text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
