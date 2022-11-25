import { LitElement, html } from "lit";

import styles from "../styles/login.styles";

export class LoginPage extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
  }

  _onLogin() {
    const user = this.shadowRoot.querySelector("#userInput");
    if (user.value === "") {
      alert("Please insert a User");
    } else if (!localStorage.getItem("user" + user.value)) {
      let newUser = {
        name: user.value,
        wins: 0,
        defeats: 0,
      };
      localStorage.setItem("user" + user.value, JSON.stringify(newUser));
      this._goTo("game", newUser);
    } else {
      const userLog = JSON.parse(localStorage.getItem("user" + user.value));
      this._goTo("game", userLog);
    }
  }

  _goTo(page, user) {
    this.dispatchEvent(
      new CustomEvent("handle-navigator", {
        detail: { view: page, currentuser: user },
      })
    );
  }

  _goToRanking() {
    this.dispatchEvent(
      new CustomEvent("handle-navigator", {
        detail: { view: "ranking", currentuser: {} },
      })
    );
  }

  render() {
    return html`
            <div class="container">
             <h1 class="app-title"> PIEDRA, PAPEL O TIJERA...</h1>
             <form @submit= "${this._onLogin}" class="form-login">
               <input  id= "userInput" name= "user" class="input-user" placeholder="Enter your User" type="text" pattern="^[^0-9\\\\]\\w+$"></input>
               <button type = "submit" id="btnLogger " class="btn-submit">LET´S GO</button>
             </form>
             <p id ="go-ranking" @click=${this._goToRanking} >SEE RANKING</p>
           </div>
            `;
  }
}

customElements.define("login-page", LoginPage);
