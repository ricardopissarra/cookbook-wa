import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient, Recipe, Step } from '../list-recipe/list-recipe.component';
import { RecipeDataService } from '../service/data/recipe-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  id: number;
  recipe: Recipe;
  ingredients: Ingredient[] = [];
  steps: Step[] = [];
  quantity: string
  name: string
  text: string

  constructor(
    private recipeService: RecipeDataService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.aRoute.snapshot.params['id'];

    this.recipe = new Recipe(this.id, '', this.ingredients, this.steps);

  }

  saveRecipe(){
    this.recipeService.createRecipe(this.recipe).subscribe(
      data => {
        this.router.navigateByUrl("/recipes")
      }
    )
  }

  addIngredient(qty, iName){
    var ing = new Ingredient(qty, iName);
    this.ingredients.push(ing);
    this.name = '';
    this.quantity= '';
  }

  addStep(nText){
    var s = new Step(nText);
    this.steps.push(s);
    this.text ='';
  }
}
