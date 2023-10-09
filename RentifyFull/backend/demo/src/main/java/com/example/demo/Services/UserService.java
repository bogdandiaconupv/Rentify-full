package com.example.demo.Services;

import com.example.demo.Models.User;
import com.example.demo.Repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addNewUser(User user){
        userRepo.save(user);
        return user;
    }
}