class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer>ASU 2021 Funded By Blablabla Developed by Blablabla</footer>`;
  }
}
customElements.define("footer-component", Footer);
