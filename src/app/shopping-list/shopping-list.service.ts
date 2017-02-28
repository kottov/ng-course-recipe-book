import { Ingredient } from './../shared/ingredient';

export class ShoppingListService {
  private ingredients: Ingredient[] = [new Ingredient('potato', 100)];

  constructor() { }

  getIgredients(): Ingredient[] {
    return this.ingredients;
  }

  addIngredients(array: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, array);
  }

}
