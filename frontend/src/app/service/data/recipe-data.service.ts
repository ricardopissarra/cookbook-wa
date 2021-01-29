import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ingredient, Recipe } from 'src/app/list-recipe/list-recipe.component';
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

    createRecipe(recipe){
      return this.http.post(`${API_URL}/jpa/recipes/add/`, recipe);
    }

    updateRecipe(id, recipe){
      return this.http.put(`${API_URL}/jpa/recipes/edit/${id}`, recipe);
    }
}
