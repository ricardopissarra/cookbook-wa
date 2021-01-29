import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ingredient, Recipe, Step } from '../list-recipe/list-recipe.component';
import { RecipeDataService } from '../service/data/recipe-data.service';

@Component({
  selector: 'app-display-recipe',
  templateUrl: './display-recipe.component.html',
  styleUrls: ['./display-recipe.component.css']
})
export class DisplayRecipeComponent implements OnInit {

  constructor(private recipeData: RecipeDataService,
    private route: ActivatedRoute) { }

  id: number
  name: String
  recipe: Recipe
  ingredients: Ingredient[]
  steps: Step[]

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipeData.getRecipeById(this.id).subscribe(
      data => {
        this.recipe = data;
        this.ingredients = this.recipe.ingredients;
        this.steps = this.recipe.steps;
    }
    )

    this.name = this.route.snapshot.params["name"];
    this.recipeData.getRecipeByName(this.name).subscribe(
      data => {
        this.recipe = data;
        this.ingredients = this.recipe.ingredients;
        this.steps = this.recipe.steps;
      }
    )
    
    

  }

}
