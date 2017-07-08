package com.mv.viewer.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mv.viewer.db.domain.*;
import com.mv.viewer.db.mapper.*;

@Controller    // This means that this class is a Controller
public class MainController {
	 
	@GetMapping(path="/")
	public String mainPage() {
		return "index.html";
	}
	
	@GetMapping(path="/user/preciseCheckup")
	public String preciseCheckPage() {
		return "/precise_checkup.html";
	}
	
	@GetMapping(path="/user/generalCheckup")
	public String generalCheckPage() {
		return "/general_checkup.html";
	}
	
	@GetMapping(path="/user/checkupDetail")
	public String checkDetailPage() {
		return "/detail_figure.html";
	}
	
	@GetMapping(path="/user/solution")
	public String solutionPage() {
		return "/solution.html";
	}
	
	@GetMapping(path="/memberLogin")
	public String loginPage() {
		return "/login.html";
	}
	
	@GetMapping(path="/test")
	public String testPage() {
		return "/general_checkup_canvas.html";
	}
}