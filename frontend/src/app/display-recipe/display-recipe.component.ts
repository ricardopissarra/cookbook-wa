import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../list-recipe/list-recipe.component';
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
  // recipeName 
  // recipeBody

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.recipeData.getRecipeById(this.id).subscribe(
      data => this.recipe = data
    )

    this.name = this.route.snapshot.params["name"];
    this.recipeData.getRecipeByName(this.name).subscribe(
      data => this.recipe = data
    )
    // this.recipeName = this.recipe.name;
    // this.recipeBody = this.recipe.description;
  }

}
