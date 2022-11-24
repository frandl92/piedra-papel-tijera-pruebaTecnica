import { html } from 'lit';
import { fixture, expect} from '@open-wc/testing';

import '../src/piedra-papel-tijera-pruebatecnica.js';


describe('PiedraPapelTijera', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<piedra-papel-tijera-pruebatecnica></piedra-papel-tijera-pruebatecnica>`);
  });

});
