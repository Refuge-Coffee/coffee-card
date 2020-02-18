import Model, { attr } from '@ember-data/model';

export default class Card extends Model {
  @attr('string') fullNumber;
  @attr('number') balanceCents;
}
