import { LitElement, html, css } from "lit";

import "@polymer/iron-icon";
import "@polymer/iron-icons/iron-icons";

export class GamePage extends LitElement {
  static get properties() {
    return {
      currentUser: {
        type: Object,
      },
      items: {
        type: Array,
      },
      userChoose: {
        type: String,
      },
      robotChoose: {
        type: String,
      },
      winnerIs: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      .container {
        background-color: #fff8ea;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .header {
        width: 22.5%;
        display: flex;
        justify-content: flex-end;
        padding-top: 50px;
      }

      .greeting-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -10px;
      }
      .user-name {
        font-size: 40px;
        font-family: "Patrick Hand", cursive;
      }

      .results {
        text-align: center;
        font-family: "Patrick Hand", cursive;
        font-size: 30px;
      }

      .winner {
        text-align: center;
        font-family: "Patrick Hand", cursive;
        font-size: 20px;
      }

      .btn-container {
        margin-top: 30px;
        display: flex;
        gap: 10px;
      }

      button {
        background-color: #65647c;
        width: 70px;
        height: 50px;
        border-radius: 5px;
        border: 1px solid #815b5b;
        font-size: 20px;
      }

      .result-container {
        margin-top: 30px;
        display: flex;
        gap: 40px;
      }

      .item-selected {
        font-size: 40px;
      }
    `;
  }

  constructor() {
    super();
    this.userChoose = "";
    this.robotChoose = "";
    this.winnerIs = "";
    this.currentUser = {};
    this.items = [
      { item: "🪨", wins: "✂️" },
      { item: "🗞️", wins: "🪨" },
      { item: "✂️", wins: "🗞️" },
    ];
  }

  firstUpdated() {
    this.currentUser = JSON.parse(
      localStorage.getItem("user" + localStorage.getItem("currentUser"))
    );
  }

  _updateUser() {
    localStorage.setItem(
      "user" + this.currentUser.name,
      JSON.stringify(this.currentUser)
    );
  }

  _itemSelected(item) {
    this.userChoose = item.item;
    this.robotChoose = "";
    this.winnerIs = "";
    setTimeout(() => {
      this._startMatch(item);
    }, 1000);
  }

  _startMatch(item) {
    const robotSelectedItem = this._getRandomItem();
    this._matchResult(item, robotSelectedItem);
  }

  _getRandomItem() {
    const randomItem =
      this.items[Math.floor(Math.random() * this.items.length)];
    return randomItem;
  }

  _matchResult(userItem, robotItem) {
    if (userItem.wins === robotItem.item) {
      this.robotChoose = robotItem.item;
      this.winnerIs = "THE WINNER IS------- " + this.currentUser.name;
      this.currentUser.wins++;
      this._updateUser();
    } else if (userItem.item === robotItem.wins) {
      this.robotChoose = robotItem.item;
      this.winnerIs = "THE WINNER IS------- ROBOTO ";
      this.currentUser.defeats++;
      this._updateUser();
    } else {
      this.userChoose = userItem.item;
      this.robotChoose = robotItem.item;
      this.winnerIs = "IT`S A TIE";
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
      <div class="header">
        <iron-icon
          @click=${this._goToHome}
          icon="icons:exit-to-app"
        ></iron-icon>
      </div>
        <div class="greeting-container">
          <h2 class="user-name">Hi! ${this.currentUser.name}!</h2>
          <p class="results">
            Your Score is <br />
            ${this.currentUser.name} ${this.currentUser.wins} -
            ${this.currentUser.defeats} Roboto
          </p>
        </div>
        <div class="btn-container">
          ${this.items.map(
            (item) =>
              html`<button @click=${() => this._itemSelected(item)}>
                ${item.item}
              </button>`
          )}
        </div>
        <div class="result-container">
          <p class="item-selected">${this.userChoose}</p>
          <p class="item-selected">${this.robotChoose}</p>
        </div>
        <p class="winner">${this.winnerIs}</p>
      </div>
    `;
  }
}

customElements.define("game-page", GamePage);
