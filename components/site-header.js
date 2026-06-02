const siteHeaderScriptUrl = document.currentScript?.src;
const siteRootUrl = siteHeaderScriptUrl
  ? new URL("../", siteHeaderScriptUrl)
  : new URL("./", window.location.href);
const isLocalFile = siteRootUrl.protocol === "file:";
const homeUrl = isLocalFile ? new URL("index.html", siteRootUrl).href : siteRootUrl.href;
const wayoniUrl = isLocalFile
  ? new URL("wayoni/index.html", siteRootUrl).href
  : new URL("wayoni/", siteRootUrl).href;
const projectsUrl = isLocalFile
  ? new URL("projects/index.html", siteRootUrl).href
  : new URL("projects/", siteRootUrl).href;
const joinUrl = isLocalFile ? new URL("join/index.html", siteRootUrl).href : new URL("join/", siteRootUrl).href;
const logoUrl = new URL("public/logo.png", siteRootUrl).href;

class SiteHeader extends HTMLElement {
  connectedCallback() {
    if (this.hasChildNodes()) {
      return;
    }

    this.innerHTML = `
      <header>
        <nav aria-label="Primary navigation">
          <a href="${homeUrl}">home</a>
          <a href="${homeUrl}#experience">experience</a>
          <a href="${projectsUrl}">projects</a>
          <a href="${wayoniUrl}">wayoni</a>
          <a href="${joinUrl}">join</a>
          <a href="#reach-me-out">reach me out</a>
        </nav>

        <a class="site-logo" href="${homeUrl}" aria-label="Ivan Mytrofanov logo">
          <img src="${logoUrl}" alt="Ivan Mytrofanov" />
        </a>
      </header>
    `;
  }
}

customElements.define("site-header", SiteHeader);
