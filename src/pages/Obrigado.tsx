import { CheckCircle, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Obrigado = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="max-w-md w-full shadow-elegant">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-playfair font-bold text-foreground">
              Obrigado!
            </h1>
            <p className="text-muted-foreground">
              Recebemos sua solicitação. Em breve entraremos em contato pelo e-mail informado.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg">
            <Mail className="w-4 h-4" />
            <span>Verifique sua caixa de entrada</span>
          </div>

          <Button asChild className="w-full">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Obrigado;