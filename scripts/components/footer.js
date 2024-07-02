export class Footer extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
    <section class="footer-container">
        <div id="info__el">
            <p>Made by Khit Khom [Team AlphaBeez]</p>
        </div>
        <img id="info" src = "../assets/logo/info-logo.png"/>
        <img src = "../assets/logo/hamberger-logo.png"/>
    </section>
    `;
    }
}

customElements.define('footer-component', Footer)


