import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../list-recipe/list-recipe.component';
import { RecipeDataService } from '../service/data/recipe-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  id: number
  recipe: Recipe
  constructor(
    private recipeService: RecipeDataService,
    private router: Router,
    private aRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.aRoute.snapshot.params['id'];

    this.recipe = new Recipe(this.id, '', '','');

    if(this.id != -1){
      this.recipeService.getRecipeById(this.id).subscribe(
        data => this.recipe = data
      )
    }
  }

  saveRecipe(){
    if(this.id == -1){
      this.recipeService.createRecipe(this.recipe).subscribe(
        data => {
          this.router.navigateByUrl("/recipes")
          console.log("gothere")
        }
      )
    } else {
      this.recipeService.updateRecipe(this.id,this.recipe).subscribe(
        data => {
          this.router.navigateByUrl("/recipes")
          console.log("gothere")
        }
      )
    }
  }

}
