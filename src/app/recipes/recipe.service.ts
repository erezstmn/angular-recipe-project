import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    
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
}