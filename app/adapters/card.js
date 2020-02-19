import JSONAPIAdapter from '@ember-data/adapter/json-api';
import fetch from 'fetch';

export default class CardAdapter extends JSONAPIAdapter {
  queryRecord(store, type, cardNumber) {
    return fetch('/api/v1/cards/search', {
      method: 'POST', 
      body: { card_number: this.cardNumber }
    });
  }
}
