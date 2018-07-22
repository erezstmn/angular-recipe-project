import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { Subject } from '../../../node_modules/rxjs';

export class RecipeService{
    recipesChanged= new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'a test recipe', 
            'this is a test', 
            'https://www.maxpixel.net/static/photo/1x/Recipe-Dessert-Meal-Tasty-Culinary-2508853.jpg',
            [new Ingredient('sugar', 3)]
        ),
        new Recipe(
            'Another test recipe', 
            'this is a test', 
            'https://www.maxpixel.net/static/photo/1x/Recipe-Dessert-Meal-Tasty-Culinary-2508853.jpg',
            [new Ingredient('choco', 20)]
        )
      ];

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe:Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}