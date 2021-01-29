import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayRecipeComponent } from '../display-recipe/display-recipe.component';
import { Recipe } from '../list-recipe/list-recipe.component';
import { RecipeDataService } from '../service/data/recipe-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private recipeData: RecipeDataService,
    private router: Router) { }

  recipe: Recipe
  message: String

  ngOnInit() {
  }

  searchByName(name){
    this.recipeData.getRecipeByName(name).subscribe(
      data => {
        this.recipe = data;
        if(this.recipe == null){
          this.message = "There is no Recipe with that name!";
        } else {
        this.router.navigateByUrl(`/recipes/search/${this.recipe.name}`);
        }
      }
    )
  }
}
