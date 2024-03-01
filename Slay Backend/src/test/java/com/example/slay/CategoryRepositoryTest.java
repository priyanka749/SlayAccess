package com.example.slay;




import com.example.slay.Entity.Category;
import com.example.slay.Repo.CategoryRepo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryRepositoryTest {


    @Autowired
    private CategoryRepo categoryRepo;

    @Test
    @Rollback(value = false)
    @Order(1)
    public void saveCategory() {
        Category category = new Category();
        category.setName("Testing categoryname");


        category = categoryRepo.save(category);
        Assertions.assertThat(category.getId()).isGreaterThan(0);


    }

    @Test
    @Order(2)

    public void findById() {
        Category category= categoryRepo.findById(1).get();
        Assertions.assertThat(category.getId()).isEqualTo(1);

    }

    @Test
    @Order(3)
    public void findAllData(){
        List<Category> categoryList = categoryRepo.findAll();
        Assertions.assertThat(categoryList.size()).isGreaterThan(0);
    }

    @Test
    @Order(4)
    public void updateCategory(){
        Category category=categoryRepo.findById(1).get();
        category.setName("Foundation");
        category=categoryRepo.save(category);
        Assertions.assertThat(category.getName()).isEqualTo("Foundation");

    }
    @Test
    @Order(5)
    public void deleteById(){
        categoryRepo.deleteById(1);
        Category category1=null;
        Optional<Category> category=categoryRepo.findById(1);
        if(category.isPresent()){
            category1=category.get();
        }
        Assertions.assertThat(category1).isNull();
    }
}