
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-chatlink-cyber-primary/10 to-chatlink-cyber-secondary/10 rounded-3xl blur-3xl"></div>
          
          <div className="relative bg-gradient-card rounded-3xl p-12 glass-effect neon-border overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-chatlink-cyber-primary/20 to-chatlink-cyber-secondary/20 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-chatlink-cyber-secondary/20 to-chatlink-cyber-accent/20 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
            
            <div className="relative z-10 text-center space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Quer revolucionar o 
                  <br />
                  <span className="text-gradient">atendimento</span> da sua empresa?
                </h2>
                
                <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                  Entre em contato conosco e descubra como o ChatLink pode transformar 
                  a comunicação da sua empresa com soluções personalizadas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="https://wa.me/9220201234" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-bold text-xl px-12 py-6 hover-glow group"
                    style={{ 
                      boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' 
                    }}                    
                  >
                    Conhecer Soluções
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
                <a href="https://wa.me/9220201234" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="neon-border bg-transparent text-chatlink-cyber-primary font-bold text-xl px-12 py-6 hover:bg-chatlink-cyber-primary hover:text-chatlink-dark transition-all duration-300"
                    
                  >
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-chatlink-dark" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Setup Rápido</p>
                    <p className="text-sm text-white/60">Em menos de 5 minutos</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-chatlink-cyber-secondary to-chatlink-cyber-primary rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-chatlink-dark" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">100% Seguro</p>
                    <p className="text-sm text-white/60">Dados protegidos</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-chatlink-dark" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-white">Suporte 24/7</p>
                    <p className="text-sm text-white/60">Equipe especializada</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-8 pt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-chatlink-cyber-secondary rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">Soluções personalizadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-chatlink-cyber-primary rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">Consultoria especializada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
