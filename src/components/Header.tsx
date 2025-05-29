
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';

const Header = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          
          {/* Desktop Navigation */}
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

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://chatlink.fios.com.br" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                className="neon-border bg-transparent text-chatlink-cyber-primary hover:bg-chatlink-cyber-primary hover:text-chatlink-dark transition-all duration-300"                
              >
                Acessar Web
              </Button>
            </a>
            <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-semibold hover-glow"                
              >
                Entre em Contato
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-white hover:text-chatlink-cyber-primary hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-56 bg-chatlink-dark/95 border border-chatlink-cyber-primary/20 glass-effect backdrop-blur-md mt-2"
              >
                <DropdownMenuItem 
                  onClick={() => handleNavClick('#home')}
                  className="text-white hover:text-chatlink-cyber-primary hover:bg-white/10 cursor-pointer transition-colors"
                >
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavClick('#features')}
                  className="text-white hover:text-chatlink-cyber-primary hover:bg-white/10 cursor-pointer transition-colors"
                >
                  Funcionalidades
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavClick('#TestimonialsSection')}
                  className="text-white hover:text-chatlink-cyber-primary hover:bg-white/10 cursor-pointer transition-colors"
                >
                  Clientes
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleNavClick('#contact')}
                  className="text-white hover:text-chatlink-cyber-primary hover:bg-white/10 cursor-pointer transition-colors"
                >
                  Contato
                </DropdownMenuItem>
                <div className="border-t border-white/10 my-2"></div>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://chatlink.fios.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-chatlink-cyber-primary hover:text-chatlink-cyber-secondary hover:bg-white/10 cursor-pointer transition-colors font-medium"
                  >
                    Acessar Web
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-chatlink-cyber-primary hover:text-chatlink-cyber-secondary hover:bg-white/10 cursor-pointer transition-colors font-medium"
                  >
                    Entre em Contato
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
