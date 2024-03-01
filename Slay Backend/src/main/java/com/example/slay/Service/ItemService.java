package com.example.slay.Service;


import com.example.slay.Entity.Item;
import com.example.slay.Pojo.ItemPojo;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

public interface ItemService {

    void saveItem(ItemPojo itemPojo)  throws IOException;
    List<Item> findAll();

    Optional<Item> getItemById(Integer id);

    void deleteItemById(Integer id);
}
