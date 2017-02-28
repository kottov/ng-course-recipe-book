import { Ingredient } from '../shared/ingredient';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Dummy1',
      'Dummy1',
      'http://cook-wise.com/wp-content/uploads/parser/best-italian-recipes-9.jpg',
      [
        new Ingredient('salt', 100),
        new Ingredient('sugar', 200)
      ]
    ),
    new Recipe(
      'Dummy2',
      'Dummy2',
      'http://cook-wise.com/wp-content/uploads/parser/best-italian-recipes-6.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('pineapple', 2)
      ]
    )];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  };
}