import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, BookOpen } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    number: "500+",
    label: "Trabalhos Entregues",
    color: "text-primary"
  },
  {
    icon: Users,
    number: "150+",
    label: "Clientes Satisfeitos",
    color: "text-secondary"
  },
  {
    icon: Trophy,
    number: "98%",
    label: "Taxa de Aprovação",
    color: "text-primary"
  },
  {
    icon: Clock,
    number: "24h",
    label: "Suporte Disponível",
    color: "text-secondary"
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Sobre a <span className="gradient-primary bg-clip-text text-transparent">Textus Acadêmico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Somos especialistas em excelência acadêmica, comprometidos em transformar 
            suas ideias em trabalhos de qualidade superior.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="font-medium px-4 py-2">
                Nossa História
              </Badge>
              <h3 className="text-3xl font-playfair font-bold text-foreground">
                Tradição em Excelência Acadêmica
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fundada por especialistas com vasta experiência em pesquisa acadêmica, 
                a Textus Acadêmico nasceu da paixão por transformar conhecimento em 
                trabalhos de excelência.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Nossa Missão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à produção acadêmica de qualidade, oferecendo 
                suporte especializado para estudantes e pesquisadores alcançarem 
                seus objetivos educacionais.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Nossos Valores</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-3 py-1">Originalidade</Badge>
                <Badge variant="outline" className="px-3 py-1">Rigor Científico</Badge>
                <Badge variant="outline" className="px-3 py-1">Pontualidade</Badge>
                <Badge variant="outline" className="px-3 py-1">Confidencialidade</Badge>
                <Badge variant="outline" className="px-3 py-1">Suporte Contínuo</Badge>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <h4 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center">
                  Nossos Números
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.label} className="text-center space-y-2">
                        <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className={`text-3xl font-bold ${stat.color}`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h5 className="font-semibold text-foreground mb-4">Credenciais da Equipe</h5>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Mestres e Doutores especializados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Experiência em bancas acadêmicas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Publicações em revistas indexadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Formação continuada em metodologia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;