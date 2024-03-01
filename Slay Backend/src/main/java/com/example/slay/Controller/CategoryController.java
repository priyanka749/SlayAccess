package com.example.slay.Controller;

import com.example.slay.Entity.Category;
import com.example.slay.Pojo.CategoryPojo;
import com.example.slay.Service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @PostMapping("save")
    public String saveUser(@RequestBody CategoryPojo categoryPojo){
        categoryService.saveCategory(categoryPojo);
        return "Category successfully created";
    }

    @GetMapping("/findAll")
    public List<Category> getAll(){
        return this.categoryService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Category> getById(@PathVariable("id") Integer id){
        return this.categoryService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Integer id){
        this.categoryService.deleteById(id);
    }

}
