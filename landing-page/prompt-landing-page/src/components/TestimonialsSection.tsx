import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Bolt, Globe } from 'lucide-react';

const PitchSection = () => {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>
      <div className="animated-blur-circle w-[400px] h-[400px] bottom-20 -left-20 bg-green-300/30"></div>
      <div className="animated-blur-circle w-[500px] h-[500px] top-20 -right-20 bg-blue-300/30"></div>
      
      <div className="container relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 text-xs font-semibold">
          Sustainability Meets Efficiency
        </div>
        
        <h2 className="section-title mb-4">Reduce AI’s Carbon Footprint with Prompt Pilot</h2>
        
        <p className="text-primary-foreground/80 text-lg mb-6">
          Each AI interaction consumes energy and water. Optimizing prompts can cut resource waste,
          reducing emissions and costs while maintaining efficiency.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
          <div className="p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 flex flex-col items-center">
            <Leaf className="h-10 w-10 text-green-400 mb-4" />
            <p className="font-bold text-lg">30% Fewer Tokens</p>
            <p className="text-sm text-primary-foreground/80 text-center">
              Cutting down token usage by 30% means a direct reduction in energy consumption per response.
            </p>
          </div>

          <div className="p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 flex flex-col items-center">
            <Bolt className="h-10 w-10 text-yellow-400 mb-4" />
            <p className="font-bold text-lg">1.2M kWh Saved</p>
            <p className="text-sm text-primary-foreground/80 text-center">
              A 1% reduction in ChatGPT’s energy use could power 100,000 homes for a day.
            </p>
          </div>

          <div className="p-6 bg-primary-foreground/10 rounded-lg border border-primary-foreground/20 flex flex-col items-center">
            <Globe className="h-10 w-10 text-blue-400 mb-4" />
            <p className="font-bold text-lg">Millions of Liters Preserved</p>
            <p className="text-sm text-primary-foreground/80 text-center">
              Less computation means lower cooling demands, saving millions of liters of water annually.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <Button className="bg-green-500 text-white px-6 py-3 text-lg rounded-lg shadow-lg hover:bg-green-600">
            Try Prompt Pilot Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PitchSection;
