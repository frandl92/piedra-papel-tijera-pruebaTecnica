import { LitElement, html, css } from "lit";

export class LoginPage extends LitElement {
  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      .container {
        background-color: #fff8ea;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
      }

      .app-title {
        font-family: "Alfa Slab One", cursive;
        text-align: center;
      }

      .form-login {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }

      .input-user {
        background-color: rgb(242, 230, 205);
        color: #9e7676;
        width: 90%;
        height: 3rem;
        font-size: 1rem;

        border-radius: 0.3rem;
        border: 1px solid #9e7676;
        text-align: center;
      }

      .input-user::placeholder {
        color: #9e7676;
        font-size: 0.7rem;
        text-align: center;
        align-content: center;
      }

      .btn-submit {
        background-color: #815b5b;
        border: 0.5rem solid #815b5b;
        border-radius: 0.3rem;
        font-size: 1rem;
        color: black;
        width: 60%;
      }

      p {
        font-family: "Patrick Hand", cursive;
        font-size: 30px;
      }
    `;
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
               <input  id= "userInput" name= "user" class="input-user" placeholder="Enter your User"></input>
               <button type = "submit" id="btnLogger " class="btn-submit">LET´S GO</button>
             </form>
             <p id ="go-ranking" @click=${this._goToRanking} >SEE RANKING</p>
           </div>
            `;
  }
}

customElements.define("login-page", LoginPage);
