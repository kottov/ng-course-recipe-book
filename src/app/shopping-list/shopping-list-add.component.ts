import { Ingredient } from './../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  // styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  private isAdd = true;
  @Output() private cleared = new EventEmitter();
  @Input() private item: Ingredient;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(change) {
    if (!change.item.currentValue) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    } else {
      this.isAdd = false;
    }
  }

  onSubmit(ingredient: Ingredient) {
    const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editIngredient(this.item, newIngredient);
      this.onClear();
    } else {
      this.item = newIngredient;
      this.sls.addIngredient(this.item);
    }
  }

  onDelete() {
    this.sls.deleteIngredient(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }

}
