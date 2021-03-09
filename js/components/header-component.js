class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav>
        <a href="/">Dashboard</a>
        <a href="/jedis">Our Naturalists</a>
        <a href="/about">About</a>
        <h1>JEDI Naturalists</h1>
      </nav>
    </header>`;
  }
}
customElements.define("header-component", Header);
