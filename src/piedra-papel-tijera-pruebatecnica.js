import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

import "./pages/login-page.js";
import "./pages/game-page.js";
import "./pages/ranking-page.js";

export class PiedraPapelTijeraPruebatecnica extends navigator(LitElement) {
  static get properties() {
    return {
      page: { type: String },
      currentUser: { type: Object },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.page = "home";
    this.currentUser = {};
    this.navigator(location);
  }

  _logInEvent(event) {
    this._goToPage(event.detail);
  }

  _goToPage(detail) {
    window.history.pushState({}, "", detail.view);
    this.navigator(window.location);
    this.currentUser = detail.currentuser;
    localStorage.setItem("currentUser", this.currentUser.name);
  }

  navigator(location) {
    const path = location.pathname;
    this.page = path === "/" ? "home" : path.slice(1);
  }

  _handlerPages() {
    switch (this.page) {
      case "home": {
        return html`<login-page
          @handle-navigator=${this._logInEvent}
        ></login-page>`;
      }
      case "game": {
        return html`<game-page
          @handle-logOut=${this._logInEvent}
          @handle-navigator=${this._logInEvent}
        ></game-page>`;
      }
      case "ranking": {
        return html`<ranking-page
          @handle-logOut=${this._logInEvent}
        ></ranking-page>`;
      }
      default: {
        this._goToPage({ detail: "home", currentuser: {} });
        return html`<login-page
          @handle-navigator=${this._logInEvent}
        ></login-page>`;
      }
    }
  }

  render() {
    return html` ${this._handlerPages()} `;
  }
}

customElements.define(
  "piedra-papel-tijera-pruebatecnica",
  PiedraPapelTijeraPruebatecnica
);
