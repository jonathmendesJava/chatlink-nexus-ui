
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-chatlink-cyber-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/placeholder.svg" 
              alt="ChatLink Logo" 
              className="w-8 h-8 rounded-lg"
            />
            <div className="w-8 h-8 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center">
              <span className="text-chatlink-dark font-bold text-lg">C</span>
            </div>
            <span className="text-2xl font-bold text-gradient">ChatLink</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Home
            </a>
            <a href="#features" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#testimonials" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Clientes
            </a>
            <a href="#contact" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="neon-border bg-transparent text-chatlink-cyber-primary hover:bg-chatlink-cyber-primary hover:text-chatlink-dark transition-all duration-300"
              onClick={() => window.open('https://app.chatlink.com', '_blank')}
            >
              Acessar App
            </Button>
            <Button 
              className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-semibold hover-glow"
              onClick={() => window.open('https://app.chatlink.com', '_blank')}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
