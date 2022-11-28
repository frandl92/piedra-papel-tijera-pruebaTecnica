import { LitElement, html } from "lit";

import "@polymer/iron-icon";
import "@polymer/iron-icons/iron-icons";
import styles from "../styles/game.styles";

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
      doubleClick: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return styles;
  }

  constructor() {
    super();
    this.userChoose = "";
    this.robotChoose = "";
    this.winnerIs = "";
    this.doubleClick = false;
    this.currentUser = {};
    this.items = [
      { item: "🪨", wins: "✂️ 🦎", src: "../assets/rock.png" },  
      { item: "🗞️", wins: "🪨 🦹🏽", src: "../assets/paper.png"},
      { item: "✂️", wins: "🗞️ 🦎", src: "../assets/scissors.png" },
      { item: "🦎", wins: "🦹🏽 🗞️", src: "../assets/lizard.svg" },
      { item: "🦹🏽", wins: "✂️ 🪨", src: "../assets/spock.png" },
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
    this.doubleClick = true;
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
    this.doubleClick = false;
    if (userItem.wins.includes(robotItem.item)) {
      this.robotChoose = robotItem.item;
      this.winnerIs = "THE WINNER IS------- " + this.currentUser.name;
      this.currentUser.wins++;
      this._updateUser();
    } else if (robotItem.wins.includes(userItem.item)) {
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

  _goToHome() {
    this.dispatchEvent(
      new CustomEvent("handle-logOut", {
        detail: { view: "home", currentuser: {} },
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
        <div class="header">
          <p id="go-ranking" @click=${this._goToRanking}>SEE RANKING</p>
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
              html`<button
                @click=${() => this._itemSelected(item)}
                ?disabled=${this.doubleClick ? true : false}
              >
              <img src="${item.src}"/>
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
