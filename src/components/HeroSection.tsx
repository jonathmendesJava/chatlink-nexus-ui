
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Smartphone, Users, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">ChatLink</span>
                <br />
                <span className="text-gradient-harmonized">Plataforma definitiva</span>
                <br />
                <span className="text-white text-3xl lg:text-4xl">
                  de gestão de mensagens empresariais
                </span>
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                A solução centralizada e inovadora da 
                <span className="text-chatlink-mint-400 font-semibold"> FIOS Tecnologia </span>
                para gerenciar todas as suas conversas em um só lugar.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-harmonized text-chatlink-dark font-bold text-lg px-8 py-4 hover-glow"
                style={{ 
                  boxShadow: '0 0 8px rgba(0, 217, 255, 0.2)' 
                }}
              >
                <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target='_Blank'>Comece Agora</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="neon-border-purple bg-transparent text-chatlink-purple-400 font-semibold text-lg px-8 py-4 hover:bg-chatlink-purple-500 hover:text-white transition-all duration-300"
              >
               <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target='_Blank' rel="noopener noreferrer">Solicite Demonstração</a> 
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chatlink-mint-400 rounded-full animate-pulse"></div>
                <span className="text-white/60">Via WhatsApp</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-chatlink-purple-500 rounded-full animate-pulse"></div>
                <span className="text-white/60">Sem cartão de crédito</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative z-10 bg-gradient-card rounded-2xl p-8 glass-effect neon-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-chatlink-blue-800/30 rounded-xl p-4 hover-glow cursor-pointer transition-all duration-300 animate-float">
                  <MessageCircle className="w-8 h-8 text-chatlink-cyber-primary mb-3" />
                  <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                  <p className="text-sm text-white/60">Business</p>
                </div>
                <div className="bg-chatlink-purple-800/30 rounded-xl p-4 hover-glow-purple cursor-pointer transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
                  <Users className="w-8 h-8 text-chatlink-purple-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Instagram</h3>
                  <p className="text-sm text-white/60">Direct Messages</p>
                </div>
                <div className="bg-chatlink-mint-800/30 rounded-xl p-4 hover-glow-mint cursor-pointer transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
                  <Smartphone className="w-8 h-8 text-chatlink-mint-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">Telegram</h3>
                  <p className="text-sm text-white/60">Mensagens & Bots</p>
                </div>
                <div className="bg-chatlink-green-700/30 rounded-xl p-4 hover-glow cursor-pointer transition-all duration-300 animate-float" style={{animationDelay: '1.5s'}}>
                  <Zap className="w-8 h-8 text-chatlink-cyber-secondary mb-3" />
                  <h3 className="font-semibold text-white mb-2">Facebook</h3>
                  <p className="text-sm text-white/60">Messenger</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <span className="text-gradient-purple font-semibold">+5 outras plataformas</span>
                  <p className="text-sm text-white/60 mt-1">Integradas em uma única interface</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-purple rounded-full blur-xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-chatlink-mint-400 to-chatlink-cyber-accent rounded-full blur-xl opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
