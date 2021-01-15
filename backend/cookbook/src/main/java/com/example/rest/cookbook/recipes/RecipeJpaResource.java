package com.example.rest.cookbook.recipes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RecipeJpaResource {

    @Autowired
    private RecipeJpaRepository recipeJpaRepository;

    @GetMapping("/jpa/recipes")
    public List<Recipe> getAllRecipes(){
        return recipeJpaRepository.findAll();
    }

    @GetMapping("/jpa/recipes/{id}")
    public Recipe getRecipeById(@PathVariable Long id){
        return recipeJpaRepository.findById(id).get();
    }


    @GetMapping("/jpa/recipes/search/{name}")
    public Recipe getRecipeByName(@PathVariable String name){
        return recipeJpaRepository.findByName(name);
    }


    @DeleteMapping("/jpa/recipes/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id){
        recipeJpaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}