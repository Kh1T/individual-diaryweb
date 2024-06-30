export class Footer extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
    <section class="footer-container">
    </section>
    `;
    }
}

customElements.define('footer-component', Footer)