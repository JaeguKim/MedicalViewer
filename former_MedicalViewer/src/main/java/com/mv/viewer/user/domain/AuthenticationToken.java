package com.mv.viewer.user.domain;

import java.util.Collection;

public class AuthenticationToken {
    private String username;
    private String name;
    private Collection authorities;
    private String token;
    private String birth;
    private int checkdate;
   
    public AuthenticationToken(String username, Collection collection, String token, String name, String birth, int checkdate) {
         this.username = username;
         this.authorities = collection;
         this.token = token;
         this.name = name;
         this.birth = birth;
         this.checkdate = checkdate;
    }
   
    public String getBirth() {
		return birth;
	}

	public void setBirth(String birth) {
		this.birth = birth;
	}

	public int getCheckdate() {
		return checkdate;
	}

	public void setCheckdate(int checkdate) {
		this.checkdate = checkdate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
         return username;
    }
    
    public void setUsername(String username) {
         this.username = username;
    }
    
    public Collection getAuthorities() {
         return authorities;
    }
    
    public void setAuthorities(Collection authorities) {
         this.authorities = authorities;
    }
    
    public String getToken() {
         return token;
    }
    
    public void setToken(String token) {
         this.token = token;
    }  
}
