import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';

export default class InteractiveCardSearch extends Component {

  @service store;

  @tracked firstFour = "";
  @tracked midFour = "";
  @tracked lastFour = "";

  @tracked holderName = "CARD HOLDER NAME";
  @tracked holderStatus = "STATUS";
  @tracked holderBalance = "0.00";

  get fullNumber() {
    return this.firstFour + this.midFour + this.lastFour;
  }

  @action
  registerValue() {
    let combined = (this.firstFour + this.midFour + this.lastFour).trim();
    console.log(combined);
    console.log(combined.length);
    if (combined.length === 12) {
      let query = { card_number: this.fullNumber };
      console.log(query);
      this.store.queryRecord('card', query).then(function(card) {
        console.log(card);
      });
      this.holderName = "John Apple";
      this.holderStatus = "Platinum";
      this.holderBalance = "99.00";
    }
  }

};
