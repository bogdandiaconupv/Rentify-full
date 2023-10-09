package com.example.demo.Models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Proxy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Proxy(lazy = false)
@Builder
public class User implements UserDetails {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        @Column(name = "first_name")
        private String firstName;

        @Column(name = "last_name")
        private String lastName;

        @Column(unique = true)
        private String username;
        private String password;

        @Column(unique = true)
        private String email;
        private double rating;
        @OneToMany
        private List<Product> products = new ArrayList<>();
        @Enumerated(EnumType.STRING)
        private Role role;


        @Override
        public String toString() {
                return "User{" +
                        "id=" + id +
                        ", firstName='" + firstName + '\'' +
                        ", lastName='" + lastName + '\'' +
                        ", username='" + username + '\'' +
                        ", password='" + password + '\'' +
                        ", email='" + email + '\'' +
                        ", rating=" + rating +
                        ", products=" + products +
                        '}';
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of(new SimpleGrantedAuthority(role.name()));
        }

        @Override
        public String getPassword() {
                return password;
        }

        @Override
        public String getUsername(){
                return email;
        }
        @Override
        public boolean isAccountNonExpired() {
                return true;
        }

        @Override
        public boolean isAccountNonLocked() {
                return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
                return true;
        }

        @Override
        public boolean isEnabled() {
                return true;
        }
}
