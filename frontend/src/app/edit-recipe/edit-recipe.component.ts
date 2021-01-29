import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient, Recipe, Step } from '../list-recipe/list-recipe.component';
import { RecipeDataService } from '../service/data/recipe-data.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  id: number;
  recipe: Recipe;
  ingredients: Ingredient[] = [];
  steps: Step[] = [];

  constructor(
    private recipeService: RecipeDataService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit(){
    this.id = this.aRoute.snapshot.params['id'];
    
    this.recipeService.getRecipeById(this.id).subscribe(
      data => {
        this.recipe = data;
        this.ingredients = this.recipe.ingredients;
        this.steps = this.recipe.steps;
      }
    )
  }

  editRecipe(){
    this.recipeService.updateRecipe(this.id, this.recipe).subscribe(
      data => this.router.navigateByUrl("/recipes")
    )
  }

  editIngredient(qty, name, id){
    this.ingredients[id].name =  name;
    this.ingredients[id].quantity = qty;
  }

  editStep(text,id){
    this.steps[id].text = text;
  }
}
