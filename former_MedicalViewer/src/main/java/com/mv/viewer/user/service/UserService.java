package com.mv.viewer.user.service;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.mv.viewer.user.domain.User;
 
public interface UserService extends UserDetailsService {
     Collection<GrantedAuthority> getAuthorities(String username);	// 권한을 받아온다.
     public User readUser(String username);							// read
     public void createUser(User user);								// create (insert)
     public void deleteUser(String username);						// delete
     public PasswordEncoder passwordEncoder();						// password encoding
}