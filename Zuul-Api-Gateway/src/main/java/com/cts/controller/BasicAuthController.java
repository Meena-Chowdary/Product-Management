package com.cts.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.ZuulProxyServerApplication;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/products")
public class BasicAuthController {
	  @GetMapping(path = "/basicauth")
	    public ZuulProxyServerApplication basicauth() {
	        return new ZuulProxyServerApplication();
	    }

}