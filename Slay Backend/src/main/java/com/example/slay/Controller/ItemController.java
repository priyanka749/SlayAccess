package com.example.slay.Controller;

import com.example.slay.Entity.Item;
import com.example.slay.Pojo.ItemPojo;
import com.example.slay.Service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @PostMapping("/save")
    public String savePItem(@RequestBody @ModelAttribute ItemPojo itemPojo) throws IOException {
        itemService.saveItem(itemPojo);
        return "Saved successfully";
    }

    @GetMapping("/findAll")
    public List<Item> findAll() {
        return itemService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Item> getItemById(@PathVariable("id") Integer id) {
        return itemService.getItemById(id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteItemById(@PathVariable("id") Integer id) {
        itemService.deleteItemById(id);
    }
}
