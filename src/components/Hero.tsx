import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Award, Feather } from "lucide-react";
import heroImage from "@/assets/hero-academic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-subtle overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ambiente acadêmico profissional" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-6 animate-fade-in">
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="relative">
                <BookOpen className="w-12 h-12 md:w-16 md:h-16 text-secondary" />
                <Feather className="w-6 h-6 md:w-8 md:h-8 text-secondary absolute -top-1 -right-1 rotate-45" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-primary-foreground text-balance">
              <span className="block mb-2">Textus</span>
              
              {/* Golden Curved Line */}
              <div className="flex justify-center my-4">
                <svg
                  width="200"
                  height="20"
                  viewBox="0 0 200 20"
                  className="w-48 md:w-64"
                >
                  <path
                    d="M10 15 Q100 5 190 15"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="2"
                    fill="none"
                    className="drop-shadow-sm"
                  />
                </svg>
              </div>
              
              <span className="gradient-secondary bg-clip-text text-transparent block">Acadêmico</span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-slide-up max-w-3xl mx-auto text-balance">
            Excelência em trabalhos acadêmicos. Transformamos suas ideias em pesquisas de qualidade superior.
          </p>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <BookOpen className="w-6 h-6 text-secondary" />
              <span className="font-medium">TCC & Dissertações</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <Award className="w-6 h-6 text-secondary" />
              <span className="font-medium">Qualidade Garantida</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/80">
              <ArrowRight className="w-6 h-6 text-secondary" />
              <span className="font-medium">Entrega no Prazo</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://wa.me/5561986592004?text=Olá, gostaria de um orçamento para o meu trabalho', '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="academic" size="lg" className="text-lg px-8 py-6 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
              Ver Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;