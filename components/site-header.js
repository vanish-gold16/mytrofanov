class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) {
      return;
    }

    this.innerHTML = `
      <header>
        <nav aria-label="Primary navigation">
          <a href="./index.html">home</a>
          <a href="./wayoni.html">wayoni</a>
          <a href="#reach-me-out">reach me out</a>
        </nav>

        <a href="./index.html" aria-label="Ivan Mytrofanov logo">
          <img src="./public/logo.png" alt="Ivan Mytrofanov" />
        </a>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
