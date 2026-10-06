/*
  CONTENT — todo o texto do site vive aqui, em um lugar só.
  Pra trocar qualquer frase, título ou CTA, mexe só neste arquivo.
  O HTML lê estes valores em tempo de carregamento (ver js/render.js).
*/

const CONTENT = {
  brand: {
    name: 'Ingesta',
    whatsappNumber: '5511999999999', // TODO: trocar pelo número real de produção
    whatsappPrefillMessage: 'Oi! Quero começar a usar o Ingesta',
  },

  nav: {
    links: [
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Preço', href: '#preco' },
      { label: 'Perguntas', href: '#faq' },
    ],
    cta: 'Falar no WhatsApp',
  },

  hero: {
    eyebrow: 'Registre a sua alimentação pelo WhatsApp',
    title: 'Saiba as calorias sem abrir nenhum app.\nApenas mande uma mensagem.',
    subtitle:
      'Registre o que comeu com suas próprias palavras. O Ingesta calcula calorias e macros na hora, direto no WhatsApp que você já usa todo dia.',
    ctaPrimary: 'Começar agora',
    ctaSecondary: 'Ver como funciona',
  },

  // Conversa exibida no mockup de WhatsApp do hero, com efeito de digitação.
  chatDemo: [
    { from: 'user', text: 'comi 2 ovos e uma banana' },
    {
      from: 'bot',
      text: '✓ Café da manhã · 250kcal\n🥩 Proteína: 14g\n🍚 Carboidrato: 27g\n🧈 Gordura: 11g\n\nMandou bem! Começou o dia com bastante proteína 💪',
    },
    { from: 'user', text: 'almocei 3 colheres de arroz, 2 conchas de feijão e um filé de frango' },
    {
      from: 'bot',
      text: '✓ Almoço · 650kcal\n🥩 P: 45g | 🍚 C: 75g | 🧈 G: 12g\n\nAlmoço equilibrado! Faltam 1.100kcal pra bater a meta 🔥',
    },
  ],

  howItWorks: {
    title: 'Como funciona?',
    subtitle: 'Quatro passos. Nenhum aplicativo novo.',
    steps: [
      {
        number: '01',
        title: 'Registre a sua refeição',
        description:
          'Da maneira que você preferir. Ex: "almocei 3 colheres de arroz, 2 conchas de feijão e um filé de frango".',
      },
      {
        number: '02',
        title: 'Calculamos na hora',
        description:
          'Calorias, proteína, carboidrato e gordura calculados automaticamente a partir da sua mensagem.',
      },
      {
        number: '03',
        title: 'Resumo automático todo dia',
        description:
          'Sem precisar pedir: o Ingesta te avisa como está o dia e o que falta pra bater sua meta.',
      },
      {
        number: '04',
        title: 'Consulta quando quiser',
        description:
          '"Como foi minha semana?" — pergunte a qualquer momento e receba a resposta na hora.',
      },
    ],
  },

  comparison: {
    title: 'Diferente dos apps de contagem de calorias',
    items: [
      {
        old: 'Buscar cada alimento numa lista gigante',
        new: 'Escrever uma frase natural',
      },
      {
        old: 'Pesar e preencher porção manualmente',
        new: 'O Ingesta entende a quantidade pelo contexto',
      },
      {
        old: 'Baixar um app e criar conta',
        new: 'Usar o seu próprio WhatsApp',
      },
      {
        old: 'Esquecer de registrar e perder o histórico',
        new: 'Lembrete automático não deixa você esquecer',
      },
    ],
  },

  honesty: {
    title: 'O que a gente não faz',
    body:
      'O Ingesta não prescreve ou fornece qualquer tipo de plano alimentar. Apenas registra, calcula e apresenta resumos — a decisão sobre a sua alimentação será sua. Sem "evite isso" ou "coma aquilo". Somente dados claros e motivação de verdade.',
  },

  pricing: {
    title: 'Preço',
    subtitle: 'Um plano só. Sem pegadinha.',
    planName: 'Plano Mensal',
    price: 'R$ 9,90',
    period: '/mês',
    trialNote: '3 dias grátis pra testar, sem cartão de crédito',
    features: [
      'Registro ilimitado de refeições',
      'Cálculo automático de calorias e macros',
      'Estimativa diária de calorias e macros',
      'Resumo diário automático',
      'Consulta semanal',
      'Pagamento via PIX',
    ],
    cta: 'Começar agora',
  },

  faq: {
    title: 'Perguntas frequentes',
    items: [
      {
        question: 'Preciso baixar algum aplicativo?',
        answer:
          'Não. Tudo funciona dentro do WhatsApp que você já usa. Não tem app novo, não tem conta pra criar.',
      },
      {
        question: 'O Ingesta me diz o que eu deveria comer?',
        answer:
          'Não. Ele registra, calcula e motiva — sem qualquer recomendação nutricional. Isso é papel de um nutricionista.',
      },
      {
        question: 'E se eu errar a refeição que registrei?',
        answer:
          'Basta corrigir na própria conversa. Ex: "era 1 ovo, não 2". O Ingesta ajusta o registro automaticamente. É possível também apagar o último registro a qualquer momento.',
      },
      {
        question: 'Meus dados ficam seguros?',
        answer:
          'Sim. Seguimos a LGPD e você pode pedir a exclusão dos seus dados a qualquer momento. Veja nossa política de privacidade no rodapé.',
      },
      {
        question: 'Como eu cancelo?',
        answer:
          'A qualquer momento, direto pelo WhatsApp. Sem burocracia e sem precisar de qualquer ligação.',
      },
    ],
  },

  footer: {
    tagline: 'Controle alimentar tão simples quanto mandar uma mensagem.',
    ctaFinal: 'Falar no WhatsApp',
    legalLinks: [
      { label: 'Termos de uso', href: 'termos.html' },
      { label: 'Política de privacidade (LGPD)', href: 'privacidade.html' },
    ],
    contact: 'suporte@calito.app',
    copyright: `© ${new Date().getFullYear()} Ingesta. Todos os direitos reservados.`,
  },
};
