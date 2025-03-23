import React, { useState } from 'react';
import { Play } from 'lucide-react';

const ProcessSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            See PromptPilot in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch how PromptPilot transforms your AI development workflow with our intuitive interface and powerful features.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={`https://www.youtube.com/embed/FjcBF96anS4?start=2281${isPlaying ? '&autoplay=1' : ''}`}
                title="PromptPilot Live Demo"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  zIndex: isPlaying ? 2 : 1,
                }}
                allowFullScreen
              ></iframe>
            </div>
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-30 transition-all duration-300 cursor-pointer"
                onClick={handlePlayClick}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
