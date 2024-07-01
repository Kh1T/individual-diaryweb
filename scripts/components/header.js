export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Header -->
    <section class="header-container ">
        <div class="header__logo"></div>
        <h3 class="header__text">Logo Name</h3>
    </section>
    `;
  }
}

customElements.define("header-component", Header);
