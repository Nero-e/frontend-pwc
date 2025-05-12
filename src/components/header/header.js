class HeaderComponent extends HTMLElement {
  async connectedCallback() {
    try {
      const response = await fetch("./components/header/header.html");
      if (!response.ok) throw new Error("Error al cargar el header");
      this.innerHTML = await response.text();
      this.initEventListeners();
    } catch (error) {
      console.error("Header Error", error);
      this.innerHTML = `<div style="color:red">Error cargando el header</div>`;
    }
  }

  initEventListeners() {}
}

customElements.define("header-component", HeaderComponent);
