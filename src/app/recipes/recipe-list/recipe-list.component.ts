import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service'
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {  
  recipes: Recipe[];
  constructor(private recipesService: RecipeService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }
  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }


}
