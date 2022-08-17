package org.example.web.controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class TestController {

	@RequestMapping("/say")
	public String say(){
		return "Halo, I'm is MacBook Pro 14";
	}
}
