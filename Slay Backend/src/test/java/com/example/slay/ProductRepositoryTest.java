//package com.example.slay;
//
//import com.example.slay.Entity.Item;
//import com.example.slay.Repo.CategoryRepo;
//import com.example.slay.Repo.ItemRepo;
//import org.assertj.core.api.Assertions;
//import org.junit.jupiter.api.MethodOrderer;
//import org.junit.jupiter.api.Order;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.TestMethodOrder;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.annotation.Rollback;
//
//import java.util.List;
//import java.util.Optional;
//
//@DataJpaTest
//@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
//public class ProductRepositoryTest {
//
//    @Autowired
//    private ItemRepo ItemRepo;
//
//
//
//
//    @Test
//    @Rollback(value = false)
//    @Order(1)
//    public void saveProduct() {
//
//
//
//
//        Item product = new Item();
//        product.setItemName("Testing description");
//        product.setItemImage("Testing productname");
//
//
//        product = ItemRepo.save(product);
//
//        Assertions.assertThat(product.getId()).isGreaterThan(0);
//
//    }
//
//    @Test
//    @Order(2)
//    public void findById() {
//
//         Item product  = ItemRepo.findById(1).get();
//        Assertions.assertThat(product.getId()).isEqualTo(1);
//
//
//    }
//
//    @Test
//    @Order(3)
//    public void findAllData() {
//        List<Item> productList = ItemRepo.findAll();
//        Assertions.assertThat(productList.size()).isGreaterThan(0);
//    }
//
//    @Test
//    @Order(4)
//    public void updateProduct() {
//        Item product = ItemRepo.findById(1).orElse(null);
//        Assertions.assertThat(product).isNotNull();
//
////        Category category = ItemRepo.findById(1).orElse(null);
////        Assertions.assertThat(category).isNotNull();
//
////        product.setDescription("Updated description");
////        product.setCategory(category);
//
//        product = ItemRepo.save(product);
//
//        Assertions.assertThat(product.getItem()).isEqualTo("Updated description");
//    }
//
//    @Test
//    @Order(5)
//    public void deleteById() {
//       com.example.slay.Repo.ItemRepo.deleteById(1);
//        Optional<Product> product = productRepository.findById(1);
//        Assertions.assertThat(product).isEmpty();
//    }
//
//}