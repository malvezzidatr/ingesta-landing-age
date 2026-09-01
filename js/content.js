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
    eyebrow: 'Controle alimentar pelo WhatsApp',
    title: 'Contar calorias sem abrir nenhum app.\nSó manda uma mensagem.',
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
    { from: 'user', text: 'almocei arroz, feijão e um filé de frango' },
    {
      from: 'bot',
      text: '✓ Almoço · 650kcal\n🥩 P: 45g | 🍚 C: 75g | 🧈 G: 12g\n\nAlmoço equilibrado! Faltam 1.100kcal pra bater a meta 🔥',
    },
  ],

  howItWorks: {
    title: 'Como funciona',
    subtitle: 'Quatro passos. Nenhum aplicativo novo.',
    steps: [
      {
        number: '01',
        title: 'Manda o que comeu',
        description:
          'Do jeito que você fala mesmo: "almocei arroz, feijão e frango". Sem buscar alimento, sem pesar porção.',
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
        new: 'Usar o WhatsApp que você já tem aberto',
      },
      {
        old: 'Esquecer de registrar e perder o histórico',
        new: 'Resumo automático te lembra sozinho',
      },
    ],
  },

  honesty: {
    title: 'O que a gente não faz',
    body:
      'O Ingesta não te diz o que comer. Ele registra, calcula e te dá o resumo — a decisão sobre sua alimentação continua sendo sua, ou de um profissional de nutrição, se você tiver um. Sem "evite isso", sem "coma aquilo". Só dados claros e motivação de verdade.',
  },

  pricing: {
    title: 'Preço',
    subtitle: 'Um plano só. Sem pegadinha.',
    planName: 'Plano Mensal',
    price: 'R$ 29,90',
    period: '/mês',
    trialNote: '7 dias grátis pra testar, sem cartão de crédito',
    features: [
      'Registro ilimitado de refeições',
      'Cálculo automático de calorias e macros',
      'Metas personalizadas (TMB)',
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
          'Não. Ele registra, calcula e motiva — nunca dá recomendação nutricional. Isso é papel de um profissional de saúde, se você tiver um.',
      },
      {
        question: 'E se eu errar a refeição que registrei?',
        answer:
          'É só corrigir na conversa, tipo "era 1 ovo, não 2", que o Ingesta ajusta o registro. Também dá pra apagar o último registro a qualquer momento.',
      },
      {
        question: 'Meus dados ficam seguros?',
        answer:
          'Sim. Seguimos a LGPD e você pode pedir a exclusão dos seus dados a qualquer momento. Veja nossa política de privacidade no rodapé.',
      },
      {
        question: 'Como eu cancelo?',
        answer:
          'A qualquer momento, direto pelo WhatsApp, sem burocracia e sem precisar ligar pra ninguém.',
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
