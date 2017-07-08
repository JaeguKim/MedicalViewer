package com.mv.viewer.user.controller;

import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mv.viewer.db.domain.Person;
import com.mv.viewer.db.mapper.MedicalInfoMapper;
import com.mv.viewer.db.mapper.PersonMapper;
import com.mv.viewer.db.mapper.UserinfoMapper;
import com.mv.viewer.user.domain.AuthenticationRequest;
import com.mv.viewer.user.domain.AuthenticationToken;
import com.mv.viewer.user.domain.User;
import com.mv.viewer.user.service.UserService;

@RestController
public class UserController {
	@Autowired AuthenticationManager authenticationManager;
	@Autowired UserinfoMapper UserinfoMapper;
	@Autowired PersonMapper personMapper;
	@Autowired MedicalInfoMapper medicalInfoMapper;
	@Autowired UserService userService;

	@RequestMapping(value="/user/login", method = RequestMethod.POST)
	public AuthenticationToken login( @RequestBody AuthenticationRequest authenticationRequest, HttpSession session ) {
		
		String username = authenticationRequest.getUsername();
		String password = authenticationRequest.getPassword();
		
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password);
		Authentication authentication = authenticationManager.authenticate(token);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, SecurityContextHolder.getContext());
		
		User user = userService.readUser(username);
		Person person = personMapper.readPersonNamebirth(UserinfoMapper.readPersonId(username).getPerson_id());
		int checkdate = medicalInfoMapper.readDate(UserinfoMapper.readPersonId(username).getPerson_id()).getCheck_date();
		
		return new AuthenticationToken(user.getUsername(), user.getAuthorities(), session.getId(), person.getName(), person.getBirth(), checkdate);
	}
	
}