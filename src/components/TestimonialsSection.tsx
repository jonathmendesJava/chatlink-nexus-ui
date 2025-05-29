
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Gerente de Atendimento",
      company: "TechStart Solutions",
      content: "O ChatLink revolucionou nossa comunicação com clientes. Conseguimos reduzir em 60% o tempo de resposta e nossa equipe está muito mais produtiva.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "Carlos Eduardo",
      role: "CEO",
      company: "InovaCorp",
      content: "Finalmente uma solução que centraliza todas as nossas conversas. A integração foi simples e os resultados apareceram logo na primeira semana.",
      rating: 5,
      avatar: "CE"
    },
    {
      name: "Ana Beatriz",
      role: "Coordenadora de Vendas",
      company: "VendaMais",
      content: "A interface é intuitiva e as funcionalidades são exatamente o que precisávamos. Recomendo para qualquer empresa que quer melhorar seu atendimento.",
      rating: 5,
      avatar: "AB"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary mx-auto rounded-full"></div>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Empresas de diversos setores já transformaram sua comunicação com o ChatLink. 
            Veja os resultados reais de quem já usa nossa plataforma.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-xl p-8 glass-effect neon-border hover-glow transition-all duration-500 group animate-fade-in relative overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-12 h-12 text-chatlink-cyber-primary" />
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-chatlink-cyber-primary to-chatlink-cyber-secondary rounded-full flex items-center justify-center">
                  <span className="text-chatlink-dark font-bold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-chatlink-cyber-primary">{testimonial.role}</p>
                  <p className="text-xs text-white/60">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chatlink-cyber-secondary text-chatlink-cyber-secondary" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-chatlink-cyber-primary font-semibold">
                    Cliente verificado
                  </span>
                  <div className="w-2 h-2 bg-chatlink-cyber-secondary rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 glass-effect neon-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Seja o próximo <span className="text-gradient">caso de sucesso</span>
            </h3>
            <p className="text-white/80 mb-6">
              Junte-se a centenas de empresas que já transformaram seu atendimento com o ChatLink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-chatlink-cyber-primary to-chatlink-cyber-secondary text-chatlink-dark font-bold px-6 py-3 rounded-lg hover-glow transition-all duration-300">
                  Começar Agora
                </button>
              </a>
              <a href="https://wa.me/9220201234?text=Opa%2C%20tudo%20bem.%20tenho%20interesse." target="_blank" rel="noopener noreferrer">
                <button className="neon-border bg-transparent text-chatlink-cyber-primary font-semibold px-6 py-3 rounded-lg hover:bg-chatlink-cyber-primary hover:text-chatlink-dark transition-all duration-300">
                  Ver Mais Casos
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
