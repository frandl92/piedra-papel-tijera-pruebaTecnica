import { html } from 'lit';
import { fixture, expect, elementUpdated} from '@open-wc/testing';

import '../src/piedra-papel-tijera-pruebatecnica.js';


describe('PiedraPapelTijera', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<piedra-papel-tijera-pruebatecnica></piedra-papel-tijera-pruebatecnica>`);
  });

  it ('shows LoginPage as landing page', async () => {
    const logIn = await fixture(html`<login-page></login-page>`);
    expect(logIn).to.exist;
  })


  it ('if user is logged, navigates to game page', async () => {
    const loginPage = element.shadowRoot.querySelector('login-page');
    loginPage.shadowRoot.querySelector('#userInput').value = "Fran";
    loginPage._onLogin()
    await elementUpdated(element)
    const gamePage = element.shadowRoot.querySelector('game-page');
    expect(gamePage).to.exist;
  })

  it ('navigates to ranking page', async () => {
    const loginPage = element.shadowRoot.querySelector('login-page');
    loginPage.shadowRoot.querySelector('#go-ranking').click()
    loginPage._goToRanking()
    await elementUpdated(element)
    const rankingPage = element.querySelector("ranking-page");
    expect(rankingPage).to.exist;
   })

  it ('navigates to game page, with user in local storage', async () => {
    element._goToPage({detail: 'game', currentuser:{name: "user", wins: 0, defeats: 0}})
    await elementUpdated(element)
    const gamePage = element.shadowRoot.querySelector('game-page');
    expect(gamePage).to.exist;
   })

   it ('player clicks on an item', async () => {
    element._goToPage({detail: 'game', currentuser:{name: "user", wins: 0, defeats: 0}})
    await elementUpdated(element)
    const gamePage = element.shadowRoot.querySelector('game-page');
    expect(gamePage.userChoose).to.be.empty;
    expect(gamePage.robotChoose).to.be.empty;
    expect(gamePage.winnerIs).to.be.empty;
    expect(gamePage.doubleClick).to.equal(false)
    expect(gamePage.items).to.deep.equal([{ item: "🪨", wins: "✂️ 🦎" },
    { item: "🗞️", wins: "🪨 🦹🏽" },
    { item: "✂️", wins: "🗞️ 🦎" },
    { item: "🦎", wins: "🦹🏽 🗞️" },
    { item: "🦹🏽", wins: "✂️ 🪨" },])
    gamePage._itemSelected( { item: "🗞️", wins: "🪨 🦹🏽" })
    setTimeout(() => {
      gamePage._startMatch({ item: "🗞️", wins: "🪨 🦹🏽" })
    }, 1000);
   })

});
