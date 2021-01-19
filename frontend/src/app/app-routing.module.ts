import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayRecipeComponent } from './display-recipe/display-recipe.component';
import { ErrorComponent } from './error/error.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", component: WelcomeComponent},
  { path: "welcome", component: WelcomeComponent},
  { path: "recipes", component: ListRecipeComponent},
  { path: "search", component: SearchComponent},
  { path: "recipes/:id", component: DisplayRecipeComponent},
  { path: "recipes/search/:name", component: DisplayRecipeComponent},
  { path: "recipes/edit/:id", component: RecipeComponent},
  
  { path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
