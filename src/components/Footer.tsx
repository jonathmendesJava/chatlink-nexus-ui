
import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, Shield, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-chatlink-cyber-primary/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-lg flex items-center justify-center">
                <span className="text-chatlink-dark font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold text-gradient">ChatLink</span>
            </div>
            
            <p className="text-white/70 leading-relaxed">
              A plataforma definitiva para gestão centralizada de mensagens empresariais. 
              Desenvolvido pela FIOS Tecnologia com foco em inovação e resultados.
            </p>
            
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-chatlink-blue-800/30 rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                <MessageCircle className="w-5 h-5 text-chatlink-cyber-primary" />
              </div>
              <div className="w-10 h-10 bg-chatlink-green-800/30 rounded-lg flex items-center justify-center hover-glow cursor-pointer">
                <Mail className="w-5 h-5 text-chatlink-cyber-secondary" />
              </div>
              <a 
                href="https://linkedin.com/company/fiostech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-chatlink-blue-800/30 rounded-lg flex items-center justify-center hover-glow cursor-pointer"
              >
                <Linkedin className="w-5 h-5 text-chatlink-cyber-primary" />
              </a>
              <a 
                href="https://instagram.com/fiostech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-chatlink-green-800/30 rounded-lg flex items-center justify-center hover-glow cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-chatlink-cyber-secondary" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-chatlink-cyber-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-chatlink-cyber-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-chatlink-cyber-primary transition-colors">
                  Clientes
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chatlink-cyber-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-chatlink-cyber-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Integrações</h3>
            <ul className="space-y-3">
              <li className="text-white/70">WhatsApp Business</li>
              <li className="text-white/70">Instagram Direct</li>
              <li className="text-white/70">Facebook Messenger</li>
              <li className="text-white/70">Telegram</li>
              <li className="text-white/70">Viber</li>
              <li className="text-chatlink-cyber-primary font-semibold">+5 outras plataformas</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-chatlink-cyber-primary" />
                <div>
                  <p className="text-white/70 text-sm">WhatsApp</p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    className="text-chatlink-cyber-primary font-semibold hover:text-chatlink-cyber-secondary transition-colors"
                  >
                    (11) 99999-9999
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-chatlink-cyber-secondary" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a 
                    href="mailto:contato@fiostech.com.br" 
                    className="text-chatlink-cyber-secondary font-semibold hover:text-chatlink-cyber-primary transition-colors"
                  >
                    contato@fiostech.com.br
                  </a>
                </div>
              </div>

              <div className="bg-gradient-card rounded-lg p-4 glass-effect neon-border">
                <p className="text-white font-semibold mb-2">Fale Conosco</p>
                <p className="text-white/70 text-sm">
                  Entre em contato via WhatsApp para conhecer nossas soluções personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/60 text-sm">
                © 2024 ChatLink. Todos os direitos reservados.
              </p>
              <p className="text-chatlink-cyber-primary text-sm font-semibold">
                Desenvolvido por FIOS Tecnologia
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-chatlink-cyber-secondary rounded-full animate-pulse"></div>
                <span className="text-white/60 text-xs">Sistema Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-chatlink-cyber-primary" />
                <span className="text-white/60 text-xs">SSL Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
