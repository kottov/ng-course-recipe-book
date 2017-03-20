import { Headers, Http, Response } from '@angular/http';
import { Ingredient } from '../shared/ingredient';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  dataChanged = new EventEmitter<Recipe[]>();
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

  constructor(private http: Http) { }

  getRecipes(): Recipe[] {
    return this.recipes;
  };

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  removeRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeRecipes() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-a8646.firebaseio.com/recipes.json', body, { headers });
  }

  fetchRecipes() {
    this.http.get('https://recipebook-a8646.firebaseio.com/recipes.json')
      .map((data: Response) => data.json())
      .subscribe(
        (data) => {
          this.recipes = data;
          this.dataChanged.emit(this.recipes);
        },
        (error) => console.error(error)
      );
  }
}
