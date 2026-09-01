/*
  RENDER — monta o HTML de cada seção a partir de CONTENT (js/content.js).
  Trocar texto = editar content.js. Trocar cor/fonte = editar css/theme.css.
  Este arquivo não deveria precisar mudar pra ajustes de conteúdo/estilo.
*/

function waLink(message) {
  const text = encodeURIComponent(message || CONTENT.brand.whatsappPrefillMessage);
  return `https://wa.me/${CONTENT.brand.whatsappNumber}?text=${text}`;
}

function renderHeader() {
  const el = document.getElementById('header');
  el.innerHTML = `
    <div class="header__inner container">
      <div class="header__brand">${CONTENT.brand.name}</div>
      <nav class="header__nav">
        <div class="header__links">
          ${CONTENT.nav.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
        </div>
        <a class="btn btn--primary btn--sm" href="${waLink()}" target="_blank" rel="noopener">
          ${CONTENT.nav.cta}
        </a>
      </nav>
    </div>
  `;
}

function renderHero() {
  const el = document.getElementById('hero');
  el.innerHTML = `
    <div class="container hero__inner">
      <div>
        <span class="eyebrow">${CONTENT.hero.eyebrow}</span>
        <h1 class="hero__title">${CONTENT.hero.title}</h1>
        <p class="hero__subtitle">${CONTENT.hero.subtitle}</p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="${waLink()}" target="_blank" rel="noopener">${CONTENT.hero.ctaPrimary}</a>
          <a class="btn btn--ghost" href="#como-funciona">${CONTENT.hero.ctaSecondary}</a>
        </div>
      </div>
      <div class="phone">
        <div class="phone__screen">
          <div class="phone__bar">
            <div class="phone__bar-avatar">🍽️</div>
            ${CONTENT.brand.name}
          </div>
          <div class="phone__chat" id="chat-demo"></div>
        </div>
      </div>
    </div>
  `;
}

function renderHowItWorks() {
  const el = document.getElementById('como-funciona');
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">${CONTENT.howItWorks.title}</h2>
        <p class="section-subtitle">${CONTENT.howItWorks.subtitle}</p>
      </div>
      <div class="steps">
        ${CONTENT.howItWorks.steps.map(s => `
          <div class="step-card reveal">
            <div class="step-card__number">${s.number}</div>
            <div class="step-card__title">${s.title}</div>
            <div class="step-card__description">${s.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderComparison() {
  const el = document.getElementById('comparacao');
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">${CONTENT.comparison.title}</h2>
      </div>
      <div class="comparison reveal">
        ${CONTENT.comparison.items.map(i => `
          <div class="comparison__row">
            <div class="comparison__cell comparison__cell--old">
              <span class="comparison__icon">✕</span>${i.old}
            </div>
            <div class="comparison__cell comparison__cell--new">
              <span class="comparison__icon">✓</span>${i.new}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderHonesty() {
  const el = document.getElementById('honestidade');
  el.innerHTML = `
    <div class="container">
      <div class="honesty reveal">
        <div class="honesty__title">${CONTENT.honesty.title}</div>
        <p class="honesty__body">${CONTENT.honesty.body}</p>
      </div>
    </div>
  `;
}

function renderPricing() {
  const el = document.getElementById('preco');
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">${CONTENT.pricing.title}</h2>
        <p class="section-subtitle">${CONTENT.pricing.subtitle}</p>
      </div>
      <div class="pricing-card reveal">
        <div class="pricing-card__name">${CONTENT.pricing.planName}</div>
        <div class="pricing-card__price">${CONTENT.pricing.price}<span>${CONTENT.pricing.period}</span></div>
        <div class="pricing-card__trial">${CONTENT.pricing.trialNote}</div>
        <ul class="pricing-card__features">
          ${CONTENT.pricing.features.map(f => `
            <li><span class="pricing-card__check">✓</span>${f}</li>
          `).join('')}
        </ul>
        <a class="btn btn--primary" href="${waLink()}" target="_blank" rel="noopener">${CONTENT.pricing.cta}</a>
      </div>
    </div>
  `;
}

function renderFaq() {
  const el = document.getElementById('faq');
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <h2 class="section-title">${CONTENT.faq.title}</h2>
      </div>
      <div class="faq-list reveal">
        ${CONTENT.faq.items.map((item, i) => `
          <div class="faq-item" data-index="${i}">
            <button class="faq-item__question">
              ${item.question}
              <span class="faq-item__icon">+</span>
            </button>
            <div class="faq-item__answer">
              <div class="faq-item__answer-inner">${item.answer}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  el.querySelectorAll('.faq-item__question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-item__answer');
      const isOpen = item.classList.contains('is-open');

      el.querySelectorAll('.faq-item.is-open').forEach(open => {
        if (open !== item) {
          open.classList.remove('is-open');
          open.querySelector('.faq-item__answer').style.maxHeight = null;
        }
      });

      item.classList.toggle('is-open', !isOpen);
      answer.style.maxHeight = !isOpen ? `${answer.scrollHeight}px` : null;
    });
  });
}

function renderFooter() {
  const el = document.getElementById('footer');
  el.innerHTML = `
    <div class="container footer__inner">
      <div class="footer__tagline">${CONTENT.footer.tagline}</div>
      <a class="btn btn--primary" href="${waLink()}" target="_blank" rel="noopener">${CONTENT.footer.ctaFinal}</a>
      <div class="footer__legal">
        ${CONTENT.footer.legalLinks.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
      <div class="footer__bottom container">
        <span>${CONTENT.footer.copyright}</span>
        <span>${CONTENT.footer.contact}</span>
      </div>
    </div>
  `;
}

function renderAll() {
  renderHeader();
  renderHero();
  renderHowItWorks();
  renderComparison();
  renderHonesty();
  renderPricing();
  renderFaq();
  renderFooter();
}

renderAll();
