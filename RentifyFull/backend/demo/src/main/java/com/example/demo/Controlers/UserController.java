package com.example.demo.Controlers;

import com.example.demo.Models.User;
import com.example.demo.Repos.UserRepo;
import com.example.demo.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
//@CrossOrigin(origins = {"https://localhost:5137/"})
@RequestMapping(path = "/user")

public class UserController {
    private final UserService userService;


    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user) {
        try {
            System.out.println(user);
            User newuser = userService.addNewUser(user);
            return ResponseEntity.ok(newuser);
        } catch (DataIntegrityViolationException ex) {
            // Handle the duplicate entry error and provide a custom error message
            String errorMessage = "Username or email already in use";

            // Create a map with the error message
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", errorMessage);

            // Return the map as JSON with an appropriate HTTP status code
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
        }
    }




}