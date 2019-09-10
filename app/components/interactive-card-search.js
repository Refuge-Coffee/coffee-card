import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  firstFour: "",
  midThree: "",
  lastFour: "",

  holderName: "CARD HOLDER NAME",
  holderStatus: "STATUS",
  holderBalance: "0.00",

  init() {
    this._super(...arguments);
  },

  fullNumber: computed('firstFour', 'midThree', 'lastFour', function() {
    return `${this.get('firstFour')}${this.get('midThree')}${this.get('lastFour')}`;
  }),


});
