package com.example.rest.cookbook.resource;

import com.example.rest.cookbook.model.Recipe;
import com.example.rest.cookbook.repository.RecipeJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @PostMapping("/jpa/recipes/add/")
    public ResponseEntity<Void> createRecipe(@RequestBody Recipe recipe){
        Recipe createRecipe = recipeJpaRepository.save(recipe);

        URI uris = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createRecipe.getId()).toUri();

        return ResponseEntity.created(uris).build();
    }

    @PutMapping("/jpa/recipes/edit/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipe){
        Recipe updateRecipe = recipeJpaRepository.save(recipe);

        return new ResponseEntity<Recipe>(recipe, HttpStatus.OK);
    }

}