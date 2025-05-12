// src/components/header/header.js
class FooterComponent extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch("./components/footer/footer.html");
      if (!response.ok) throw new Error("Error al cargar el footer");
      this.innerHTML = await response.text();
      this.initEventListeners();
    } catch (error) {
      console.error("footer Error", error);
      this.innerHTML = `<div style="color:red">Error cargando el footer</div>`;
    }
  }

  initEventListeners() {}
}

customElements.define("footer-component", FooterComponent);
