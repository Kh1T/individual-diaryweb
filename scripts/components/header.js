export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <!-- Header -->
    <section class="header-container ">
          <img class="header__logo" src = "../assets/logo/logo.png"/>
        <h3 class="header__text">Diary-Bro</h3>
    </section>
    `;
  }
}

customElements.define("header-component", Header);
