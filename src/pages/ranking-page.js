import { LitElement, html, css } from "lit";

import "@polymer/iron-icon";
import "@polymer/iron-icons/iron-icons";
import "@vaadin/grid";
import "@vaadin/grid/vaadin-grid-sort-column.js";

export class RankingPage extends LitElement {
  static get properties() {
    return {
      users: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
       
      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px;
        margin: auto;
        margin-top: 30px;
        width: 80%;
      }
    `;
  }

  constructor() {
    super();
    this.users = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (/(user)+/.test(localStorage.key(i))) {
        this.users.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  }

  _goToHome(){
    this.dispatchEvent(
        new CustomEvent("handle-logOut", {
          detail: { view: "home", currentuser: {} },
        })
      );
  }

  render() {
    return html`
        <div class="container">
        <iron-icon @click=${this._goToHome} icon="icons:exit-to-app"></iron-icon>
          <vaadin-grid .items="${this.users}">
            <vaadin-grid-sort-column path="name"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="wins"></vaadin-grid-sort-column>
            <vaadin-grid-sort-column path="defeats"></vaadin-grid-sort-column>
          </vaadin-grid>
        </div>
      
    `;
  }
}

customElements.define("ranking-page", RankingPage);
