package com.example.demo.Controlers;

import com.example.demo.Models.Product;
import com.example.demo.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
//@CrossOrigin(origins = {"https://localhost:5137/"})
@RequestMapping(path = "/product")

public class ProductController {
    private final ProductService productService;


    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping(path = "/addProduct/{userId}")
    public ResponseEntity<?> addProduct(@RequestBody Product product, @PathVariable Long userId) {
        System.out.println(product);
        Product newproduct = productService.addNewProduct(product,userId);
        return ResponseEntity.ok(newproduct);
    }




}