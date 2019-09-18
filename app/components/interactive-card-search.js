import Component from '@ember/component';
import { get, set } from '@ember/object';

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

  actions: {
    registerValue() {
      let one, two, three;
      one = get(this, 'firstFour.length');
      two = get(this, 'midThree.length');
      three = get(this, 'lastFour.length');
      let combined = one + two + three;
      console.log(combined);
      if (combined === 10) {
        this.setProperties({
          holderName: "John Apple",
          holderStatus: "Platinum",
          holderBalance: "99.00"
        });
      }
    }
  }

});
