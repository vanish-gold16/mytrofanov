export function Home() {
  return (
    <>
      <header>
        <nav aria-label="Primary navigation">
          <a href="#home">home</a>
          <a href="#wayoni">wayoni</a>
          <a href="#reach-me-out">reach me out</a>
        </nav>

        <a href="#home" aria-label="Ivan Mytrofanov logo">
          <img src="/logo.svg" alt="Ivan Mytrofanov" />
        </a>
      </header>

      <main id="home">
        <section aria-labelledby="home-title">
          <p>Ivan Mytrofanov</p>
          <h1 id="home-title">portfolio</h1>
        </section>
      </main>
    </>
  );
}
