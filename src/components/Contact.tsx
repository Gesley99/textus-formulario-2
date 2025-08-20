<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/obrigado"
  className="form"
>
  {/* Necessário para o Netlify identificar o formulário */}
  <input type="hidden" name="form-name" value="contact" />

  {/* Honeypot anti-spam (fica oculto por CSS) */}
  <p className="hidden">
    <label>Não preencha: <input name="bot-field" /></label>
  </p>

  {/* Espelha o valor do Select controlado pelo React */}
  <input type="hidden" name="service" value={formData.service} />

  <div className="grid md:grid-cols-2 gap-4">
    <div className="space-y-2">
      <Label htmlFor="name">Nome Completo</Label>
      <Input
        id="name"
        name="name"
        placeholder="Seu nome completo"
        className="focus:ring-2 focus:ring-primary"
        value={formData.name}
        onChange={(e) => handleInputChange("name", e.target.value)}
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="email">E-mail</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="seu@email.com"
        className="focus:ring-2 focus:ring-primary"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        required
      />
    </div>
  </div>

  <div className="grid md:grid-cols-2 gap-4 mt-4">
    <div className="space-y-2">
      <Label htmlFor="phone">Telefone</Label>
      <Input
        id="phone"
        name="phone"
        placeholder="(11) 99999-9999"
        className="focus:ring-2 focus:ring-primary"
        value={formData.phone}
        onChange={(e) => handleInputChange("phone", e.target.value)}
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="service">Tipo de Trabalho</Label>
      <Select onValueChange={(value) => handleInputChange("service", value)}>
        <SelectTrigger className="focus:ring-2 focus:ring-primary">
          <SelectValue placeholder="Selecione o serviço" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="tcc">TCC/Monografia</SelectItem>
          <SelectItem value="dissertacao">Dissertação</SelectItem>
          <SelectItem value="tese">Tese</SelectItem>
          <SelectItem value="artigo">Artigo Científico</SelectItem>
          <SelectItem value="revisao">Revisão/Formatação</SelectItem>
          <SelectItem value="outro">Outro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>

  <div className="space-y-2 mt-4">
    <Label htmlFor="deadline">Prazo Desejado</Label>
    <Input
      id="deadline"
      name="deadline"
      type="date"
      className="focus:ring-2 focus:ring-primary"
      value={formData.deadline}
      onChange={(e) => handleInputChange("deadline", e.target.value)}
      required
    />
  </div>

  <div className="space-y-2 mt-4">
    <Label htmlFor="message">Detalhes do Projeto</Label>
    <Textarea
      id="message"
      name="message"
      placeholder="Descreva seu projeto, requisitos específicos, número de páginas estimado..."
      className="min-h-32 focus:ring-2 focus:ring-primary"
      value={formData.message}
      onChange={(e) => handleInputChange("message", e.target.value)}
    />
  </div>

  <Button
    variant="cta"
    size="lg"
    className="w-full mt-6"
    type="submit"
    onClick={() => {
      if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.deadline) {
        toast({
          title: "Campos obrigatórios",
          description: "Por favor, preencha todos os campos obrigatórios.",
          variant: "destructive"
        });
      }
    }}
  >
    <Send className="w-5 h-5" />
    Enviar Solicitação
  </Button>
</form>
