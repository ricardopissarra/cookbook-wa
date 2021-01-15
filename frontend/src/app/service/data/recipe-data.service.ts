import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from 'src/app/list-recipe/list-recipe.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {

  constructor(
    private http: HttpClient
    ) { }

    retriveAllRecipes(){
      return this.http.get<Recipe[]>(`${API_URL}/jpa/recipes`);
    }

    getRecipeById(id){
      return this.http.get<Recipe>(`${API_URL}/jpa/recipes/${id}`);
    }

    getRecipeByName(name){
      return this.http.get<Recipe>(`${API_URL}/jpa/recipes/search/${name}`);
    }

    deleteRecipe(id){
      return this.http.delete(`${API_URL}/jpa/recipes/${id}`)
    }
}