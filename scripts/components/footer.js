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
        <img class= "menu" src = "../assets/logo/hamberger-logo.png"/>
    </section>
    `;
    }
}

customElements.define('footer-component', Footer)

const infoButton = document.getElementById("info");
const infoText = document.getElementById("info__el");

if (infoButton && infoText) {
  infoButton.addEventListener("click", function () {
    if (infoText.style.display === "none") {
      infoText.style.display = "block"; // Show infoText
    } else {
      infoText.style.display = "none"; // Hide infoText
    }
  });
} 

        // document.addEventListener("DOMContentLoaded", function () {
        //   const menuIcon = document.querySelector(".menu");
        //   const sidebar = document.querySelector(".group__sidebar");
        //   const mediaQuery = window.matchMedia("(max-width: 767px)");

        //   function toggleSidebar() {
        //     if (mediaQuery.matches) {
        //       sidebar.classList.toggle("sidebar-visible");
        //     }
        //   }

        //   menuIcon.addEventListener("click", toggleSidebar);
        // });