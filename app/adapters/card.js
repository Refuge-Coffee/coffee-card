import JSONAPIAdapter from '@ember-data/adapter/json-api';
import fetch from 'fetch';

export default class CardAdapter extends JSONAPIAdapter {
  namespace = 'api/v1';
  
  queryRecord(store, type, query) {
    return fetch('/api/v1/cards/search', {
      method: 'POST', 
      body: JSON.stringify(query)
    });
  }
}
