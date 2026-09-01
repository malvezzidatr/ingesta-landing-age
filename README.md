# Ingesta — Landing Page

Site estático (HTML/CSS/JS puro, sem build, sem dependências) da landing page de vendas do Ingesta.

## Como abrir

Só abrir `index.html` no navegador. Ou, pra evitar bloqueios de CORS ao editar,
rodar um servidor local simples:

```bash
npx serve .
# ou
python -m http.server 8080
```

## Onde mexer pra cada tipo de mudança

| Quero mudar...                          | Arquivo                    |
|------------------------------------------|-----------------------------|
| Qualquer texto (títulos, botões, FAQ...)  | `js/content.js`             |
| Número do WhatsApp / mensagem inicial     | `js/content.js` → `brand`   |
| Cores, fonte, espaçamento, raio de borda  | `css/theme.css`             |
| Layout, componentes visuais               | `css/style.css`             |
| Estrutura das seções (ordem, o que existe)| `index.html`                |
| Animação da conversa do WhatsApp          | `js/chat-animation.js`      |
| Animação de scroll (fade-in das seções)   | `js/scroll-reveal.js`       |

**Regra do projeto:** nenhum texto deve estar dentro do HTML/JS de renderização,
e nenhuma cor deve estar "hardcoded" fora de `theme.css`. Isso é o que deixa
fácil trocar copy ou rebrandear em minutos, sem precisar entender o código.

## Estrutura

```
index.html              → esqueleto da página (seções vazias, preenchidas via JS)
css/theme.css            → TODAS as cores, fontes, espaçamentos (design tokens)
css/style.css             → estilos de componentes, só usa variáveis do theme.css
js/content.js             → TODO o texto do site, em um objeto único (CONTENT)
js/render.js               → monta o HTML de cada seção a partir de CONTENT
js/chat-animation.js        → anima o mockup de conversa do WhatsApp no hero
js/scroll-reveal.js          → fade-in das seções ao rolar a página
```

## Antes de publicar / mostrar pro cliente

- [ ] Trocar `brand.whatsappNumber` em `js/content.js` pelo número real de produção
- [ ] Confirmar o preço em `pricing.price` (hoje é um placeholder: R$ 29,90)
- [ ] Preencher os links legais do rodapé (`footer.legalLinks`) com Termos e Política de Privacidade reais
- [ ] Revisar `footer.contact` (e-mail de suporte)
