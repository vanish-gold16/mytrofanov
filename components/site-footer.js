class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) {
      return;
    }

    this.innerHTML = `
      <footer id="reach-me-out" class="site-footer">
        <p>let's talk</p>
        <h2 class="site-footer__title">reach me out</h2>

        <ul class="site-footer__links">
          <li>
            <a href="mailto:mytrofanov.it@gmail.com">
              <span class="site-footer__label">email</span>
              <span class="site-footer__value">mytrofanov.it@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/vanish-gold16" target="_blank" rel="noopener noreferrer">
              <span class="site-footer__label">github</span>
              <span class="site-footer__value">vanish-gold16</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ivanmytrofanov" target="_blank" rel="noopener noreferrer">
              <span class="site-footer__label">linkedin</span>
              <span class="site-footer__value">in/ivanmytrofanov</span>
            </a>
          </li>
          <li>
            <a href="https://t.me/vanish_gold16" target="_blank" rel="noopener noreferrer">
              <span class="site-footer__label">telegram</span>
              <span class="site-footer__value">@vanish_gold16</span>
            </a>
          </li>
        </ul>

        <p class="site-footer__copy">© <span data-js-year></span> Ivan Mytrofanov</p>
      </footer>
    `;

    const yearEl = this.querySelector("[data-js-year]");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }
}

customElements.define("site-footer", SiteFooter);
