
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for individuals getting started with prompt engineering",
      features: [
        "50 prompt optimizations per month",
        "5 prompt templates",
        "Basic analytics",
        "Email support"
      ],
      isPopular: false,
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: "$79",
      description: "Ideal for professionals and small teams",
      features: [
        "500 prompt optimizations per month",
        "20 prompt templates",
        "Advanced analytics",
        "Custom frameworks",
        "Priority support"
      ],
      isPopular: true,
      buttonText: "Try Professional"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: [
        "Unlimited prompt optimizations",
        "Custom template library",
        "Enterprise analytics",
        "API access",
        "Dedicated account manager",
        "Training workshops"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-grid opacity-70 z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge mb-4">Pricing</div>
          <h2 className="section-title mb-4">
            Choose the Right Plan for Your Needs
          </h2>
          <p className="text-muted-foreground text-balance">
            Flexible options designed to scale with your prompt engineering requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-card border-2 border-primary shadow-lg md:scale-105 md:-translate-y-2' 
                  : 'bg-card border border-border/50 hover:shadow-md hover:border-border/80'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-primary" />
              )}
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.isPopular && (
                    <span className="inline-block mt-1 text-xs font-medium text-primary">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-1.5">/month</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-primary h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.isPopular ? '' : 'bg-primary/90 hover:bg-primary'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Contact our sales team.
          </p>
          <Button variant="outline">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
