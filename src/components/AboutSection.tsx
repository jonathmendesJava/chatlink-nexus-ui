
import React from 'react';
import { Shield, Zap, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Sobre o <span className="text-gradient">ChatLink</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary mx-auto rounded-full"></div>
            
            <p className="text-xl text-white/80 leading-relaxed">
              No mundo digital de hoje, a comunicação rápida e eficiente é a chave para o sucesso empresarial. 
              As empresas enfrentam o desafio de gerir múltiplas plataformas de mensagens de forma coesa.
            </p>
            
            <p className="text-2xl font-semibold text-gradient">
              ChatLink é o serviço inovador que consolida todas as suas interações 
              em uma única e poderosa interface.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-gradient-card rounded-xl p-6 glass-effect neon-border hover-glow transition-all duration-300 group animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-chatlink-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Segurança</h3>
              <p className="text-white/70">
                Proteção avançada de dados e criptografia de ponta a ponta para suas conversas.
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 glass-effect neon-border hover-glow transition-all duration-300 group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-chatlink-cyber-secondary to-chatlink-cyber-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-chatlink-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Velocidade</h3>
              <p className="text-white/70">
                Respostas instantâneas e sincronização em tempo real entre todas as plataformas.
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 glass-effect neon-border hover-glow transition-all duration-300 group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-chatlink-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Colaboração</h3>
              <p className="text-white/70">
                Equipes conectadas com ferramentas avançadas de gestão e atribuição de conversas.
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-6 glass-effect neon-border hover-glow transition-all duration-300 group animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-chatlink-cyber-secondary to-chatlink-cyber-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-chatlink-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Escalabilidade</h3>
              <p className="text-white/70">
                Cresce junto com sua empresa, suportando desde startups até grandes corporações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
