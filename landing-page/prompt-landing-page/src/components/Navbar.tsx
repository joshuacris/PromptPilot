
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          PromptPilot
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Features
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Process
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Results
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Pricing
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-md animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium py-2 hover:text-primary/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#process" 
              className="text-sm font-medium py-2 hover:text-primary/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium py-2 hover:text-primary/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium py-2 hover:text-primary/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border/30">
              <Button variant="outline" className="w-full justify-center">
                Sign In
              </Button>
              <Button className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
