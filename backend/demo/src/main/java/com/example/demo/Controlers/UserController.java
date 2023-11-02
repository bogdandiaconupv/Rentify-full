package com.example.demo.Controlers;

import com.example.demo.Auth.AuthRequest;
import com.example.demo.Auth.AuthResponse;
import com.example.demo.Auth.RegisterRequest;
import com.example.demo.Models.User;
import com.example.demo.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;



    @PostMapping("/auth/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest){
        return ResponseEntity.ok(userService.register(registerRequest));
    }


    @PostMapping("/auth/authenticate")
    public ResponseEntity<AuthResponse> authenticate(@RequestBody AuthRequest authenticationRequest){
        return ResponseEntity.ok(userService.authenticate(authenticationRequest));
    }


    @GetMapping("/getUserWithToken")
    public ResponseEntity<User> getUserWithToken(@RequestHeader("Authorization") String authHeader){
        return ResponseEntity.ok(userService.getUserWithToken(authHeader));
    }
}
