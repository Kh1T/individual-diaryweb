export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Header -->
    <section class="header-container ">
        <a href = "../index.html" >  <img class="header__logo" src = "../assets/logo/logo.png"/></a>
        <h3 class="header__text">Diary-Web</h3>
    </section>
    `;
  }
}

customElements.define("header-component", Header);
