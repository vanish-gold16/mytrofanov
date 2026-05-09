export default function App() {
  return (
    <>
      <header>
        <a href="/" aria-label="Ivan Mytrofanov">
          Ivan Mytrofanov
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="intro-title">
          <p>Portfolio</p>
          <h1 id="intro-title">Ivan Mytrofanov</h1>
          <p>
            Frontend developer building clean, accessible interfaces with
            JavaScript and React.
          </p>
        </section>

        <section id="work" aria-labelledby="work-title">
          <h2 id="work-title">Selected Work</h2>
          <article>
            <p>Projects will be added here as the portfolio grows.</p>
          </article>
        </section>

        <section id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p>
            Based in Prague. Focused on frontend engineering, interface
            quality, and thoughtful visual design.
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
        </section>
      </main>
    </>
  );
}
