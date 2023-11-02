package com.example.demo.Services;

import com.example.demo.Auth.AuthRequest;
import com.example.demo.Auth.AuthResponse;
import com.example.demo.Auth.RegisterRequest;
import com.example.demo.Models.Role;
import com.example.demo.Models.User;
import com.example.demo.Repos.UserRepo;
import com.example.demo.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepo userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthResponse register(RegisterRequest registerRequest) {
//        System.out.println(registerRequest.getMemberName());
//        boolean emailExists =  userRepository.existsByEmail(registerRequest.getEmail());
//        boolean usernameExists = userRepository.existsByMemberName(registerRequest.getMemberName());
//
//        if(usernameExists && emailExists){
//            return AuthResponse.builder().response("3").build();
//        }else if(usernameExists){
//            return AuthResponse.builder().response("2").build();
//        }else if (emailExists){
//            return AuthResponse.builder().response("1").build();
//        }

        var user = User.builder()
                .email(registerRequest.getEmail())
                .password( passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();

        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().response(jwtToken).build();
    }

    public AuthResponse authenticate(AuthRequest authenticationRequest) {

        authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
                authenticationRequest.getEmail(),
                authenticationRequest.getPassword()
        ));

        var user = userRepository.findByEmail(authenticationRequest.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(user);
        return AuthResponse.builder().response(jwtToken).build();
    }

    public User getUserWithToken(String authHeader) {
        String token = authHeader.substring(7);

        User user = userRepository.findByEmail(jwtService.extractUsername(token)).orElse(null);

        return user;
    }
}

