import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDataService } from '../service/data/recipe-data.service';

export class Ingredient{
  constructor(public quantity: string,
    public name: string){

  }
}
export class Step{
  constructor(public text: string){
 }
}

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public ingredients: Ingredient[],
    public steps: Step[]
  ) {}
}


@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: Recipe[]
  message: string

  constructor(
    private recipeService: RecipeDataService,
    private router: Router
  ) { }
  
  ngOnInit() {
    
    this.refreshRecipes();
    
  }

  refreshRecipes(){
    this.recipeService.retriveAllRecipes().subscribe(
      response => {
        
        this.recipes = response;

      }
    )
  }

  
  
  displayRecipe(id){
    return `/recipes/${id}`
  }

  deleteRecipe(id, name){
    this.recipeService.deleteRecipe(id).subscribe(
      response => {
        this.message = `Delete of Recipe ${name} Successful!`
        this.refreshRecipes();
      }
    )
  }

  addRecipe(){
    this.router.navigate(['recipes/add',-1]);
  }

  updateRecipe(id){
    this.router.navigate(['recipes/edit',id]);
  }
  
}
