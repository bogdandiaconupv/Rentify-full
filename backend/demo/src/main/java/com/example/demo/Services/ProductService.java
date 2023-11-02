package com.example.demo.Services;

import com.example.demo.Models.Product;
import com.example.demo.Models.User;
import com.example.demo.Repos.ProductRepo;
import com.example.demo.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepo productRepo;
    private final UserRepo userRepo;

    @Autowired
    public ProductService(ProductRepo productRepo, UserRepo userRepo) {
        this.productRepo = productRepo;
        this.userRepo = userRepo;
    }

    public Product addNewProduct(Product product, Long userId){
        User user = userRepo.findById(userId).orElse(null);
        product.setUser(user);
        productRepo.save(product);
        return product;
    }
}