import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class InteractiveCardSearch extends Component {

  @tracked firstFour = "";
  @tracked midThree = "";
  @tracked lastFour = "";

  @tracked holderName = "CARD HOLDER NAME";
  @tracked holderStatus = "STATUS";
  @tracked holderBalance = "0.00";

  // searchAPI: function() {
  //   let fullNumber;
  //   this.store.queryRecord('card', )
  // }

  @action
  registerValue() {
    let combined = this.firstFour + this.midThree + this.lastFour;
    console.log(combined);
    if (combined === 10) {
      this.holderName = "John Apple";
      this.holderStatus = "Platinum";
      this.holderBalance = "99.00";
    }
  }

};
