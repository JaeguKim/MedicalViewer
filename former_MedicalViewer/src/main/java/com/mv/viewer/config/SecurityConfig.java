package com.mv.viewer.config;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity; 
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

import com.mv.viewer.user.service.UserService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	// WebSecurityConfigurerAdapter : 기본적인 웹 인증에 대한 대부분을 이미 구현해놨음.
	// 상속 받아서 수정이 필요한 부분만 Override 하면 된다.

     @Autowired
     UserService userService;
      
     @Override
     protected void configure(HttpSecurity http) throws Exception {
    	 http
	         .csrf().disable()					// Cross Site Request Forgery 이걸 하기 위해선 따로 처리가 필요함. 일단 안 하는 걸로.
	         .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.NEVER)
	         	.and()
	         .authorizeRequests()					// 요청에 대한 권한 처리에 대해
	         		.antMatchers("/*").permitAll()
	         		.antMatchers("/img/**").permitAll()
	         		.antMatchers("/js/**").permitAll()
	         		.antMatchers("/css/**").permitAll()
	         		.antMatchers("/figure/**").permitAll()
	         		.antMatchers("/assets/**").permitAll()
	         		.antMatchers("/images/**").permitAll()
	         		.antMatchers("/user/login").permitAll()
	         		.antMatchers("/memberLogin").permitAll()
	         		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
	         		.antMatchers("/user/**").hasAuthority("USER")
	         		.antMatchers("/admin").hasAuthority("ADMIN")
	         		.anyRequest().authenticated() 	// 어떠한 요청에라도 인증을 요구.
	         		.and()
	//         .formLogin()				// 또한 Form을 이용한 로그인을 사용.
	//    	 		.and()
	    	 .logout()
	    	 	.logoutSuccessUrl("/memberLogin");
	    	 ;
     }
 
 
     @Override // AuthenticationManagerBuilder에 해당 Bean 주입. 쉽게 우리가 만든 userService를 등록한다.
     protected void configure(AuthenticationManagerBuilder auth) throws Exception {
          auth.userDetailsService(userService)
          		.passwordEncoder(userService.passwordEncoder());
     }
     
     @Bean
     @Override
     public AuthenticationManager authenticationManagerBean() throws Exception {
    	 return super.authenticationManagerBean();
     }
     
     @Bean
     public HttpSessionStrategy httpSessionStrategy() { 
    	 return new HeaderHttpSessionStrategy();
     }
}