
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-chatlink-cyber-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGHYoqE3PEUdw/company-logo_200_200/company-logo_200_200/0/1716215580968/fiostecnologia_logo?e=2147483647&v=beta&t=LZwPJOX0KiZFua0smUIyuSrqR7B_DHNY5lsZPuTX2DY"
              alt="ChatLink Logo" 
              className="w-8 h-8 rounded-lg"
            />            
            <span className="text-2xl font-bold text-gradient">ChatLink</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Home
            </a>
            <a href="#features" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#TestimonialsSection" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Clientes
            </a>
            <a href="#contact" className="text-white/80 hover:text-chatlink-cyber-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="https://chatlink.fios.com.br" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="neon-border bg-transparent text-chatlink-cyber-primary hover:bg-chatlink-cyber-primary hover:text-chatlink-dark transition-all duration-300"                
              >
                Acessar Web
              </Button>
            </a>
            <a href="https://wa.me/9220201234"  target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-semibold hover-glow"                
              >
                Entre em Contato
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
