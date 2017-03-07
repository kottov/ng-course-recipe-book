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

  addIngredient(item: Ingredient) {
    this.ingredients.push(item);
  }

  editIngredient(oldItem: Ingredient, newItem: Ingredient) {
    this.ingredients[this.ingredients.indexOf(oldItem)] = newItem;
  }

  deleteIngredient(item: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(item), 1);
  }

}
