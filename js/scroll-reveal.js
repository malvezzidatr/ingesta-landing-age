/*
  SCROLL-REVEAL — anima elementos com classe .reveal quando entram na tela.
  Roda depois do render.js, já que os elementos .reveal só existem
  depois que as seções são montadas via CONTENT.
*/

(function () {
  function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(target => observer.observe(target));
  }

  // Espera o próximo tick pra garantir que render.js já rodou.
  setTimeout(initReveal, 0);
})();
