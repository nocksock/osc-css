class OscStage extends HTMLElement {
  static intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty('--osc-state', 'running');
      } else {
        entry.target.style.setProperty('--osc-state', 'paused');
      }
    });
  });


  connectedCallback() {
    OscStage.intersectionObserver.observe(this);

    const element = this.getAttribute('create');
    if (!element) {
      return;
    }
    const count = Number(this.getAttribute('count')) || 10;
    const phased = this.hasAttribute('phased');

    for (let i = 0; i < count; i++) {
      const ball = document.createElement(element);
      this.appendChild(ball);
      if (phased) {
        ball.style.setProperty('--osc-phase', `${i / count}s`);
      }
    }
  }

  disconnectedCallback() {
    OscStage.intersectionObserver.unobserve(this);
  }
}

customElements.define('osc-stage', OscStage);
