package com.example.slay.Service;

import com.example.slay.Entity.Cart;
import com.example.slay.Pojo.CartPojo;

import java.util.List;

public interface CartService {

    void saveCart(CartPojo cartPojo);

    List<Cart> getAll();

    void deleteById(Long id);

    void updateQuantity(Long id, Integer quantity);
}
