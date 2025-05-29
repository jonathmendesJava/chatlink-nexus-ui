
import React from 'react';
import { MessageSquare, BarChart3, Clock, Settings, Users, Shield } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Integração Múltiplas Plataformas",
      description: "WhatsApp, WhatsApp Business, Telegram, Facebook Messenger, Instagram Messenger, Viber e muito mais",
      gradient: "from-chatlink-cyber-primary to-chatlink-cyber-secondary"
    },
    {
      icon: BarChart3,
      title: "Centralização de Conversas",
      description: "Todas as suas mensagens em um painel único e intuitivo para máxima eficiência",
      gradient: "from-chatlink-cyber-secondary to-chatlink-cyber-primary"
    },
    {
      icon: Users,
      title: "Visão Unificada do Atendimento",
      description: "Acompanhe métricas, tempos de resposta e performance da equipe em tempo real",
      gradient: "from-chatlink-cyber-primary to-chatlink-cyber-accent"
    },
    {
      icon: Clock,
      title: "Histórico Completo",
      description: "Controle total de mensagens com histórico detalhado e busca avançada",
      gradient: "from-chatlink-cyber-accent to-chatlink-cyber-secondary"
    },
    {
      icon: Settings,
      title: "Sistema Escalável",
      description: "Solução que cresce com sua empresa, desde pequenos negócios até grandes corporações",
      gradient: "from-chatlink-cyber-secondary to-chatlink-cyber-primary"
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção de dados empresariais com criptografia e compliance garantidos",
      gradient: "from-chatlink-cyber-primary to-chatlink-cyber-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Funcionalidades <span className="text-gradient">Principais</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary mx-auto rounded-full"></div>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Descubra como o ChatLink revoluciona a gestão de comunicação empresarial 
            com ferramentas poderosas e interface intuitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-8 glass-effect neon-border hover-glow transition-all duration-500 group animate-fade-in hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-chatlink-dark" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-chatlink-cyber-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center text-chatlink-cyber-primary group-hover:text-chatlink-cyber-secondary transition-colors duration-300">
                  <span className="text-sm font-semibold">Saiba mais</span>
                  <div className="ml-2 w-4 h-4 rounded-full bg-current opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 glass-effect neon-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para <span className="text-gradient">transformar</span> seu atendimento?
            </h3>
            <p className="text-white/80 mb-6">
              Experimente todas essas funcionalidades gratuitamente e veja a diferença na sua empresa.
            </p>
            <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target='_blank' rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-bold px-8 py-4 rounded-lg hover-glow transition-all duration-300 animate-pulse-glow">
                Começar Teste
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
