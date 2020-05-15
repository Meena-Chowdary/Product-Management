package com.cts.controller;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cts.entity.Product;
import com.cts.entity.Vendor;
import com.cts.exception.ProductNotFoundException;
import com.cts.service.ProductService;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/products")
@Api(value = "The Product Controller")
public class ProductController {
	
	Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired
	private ProductService service;
	
	@ApiOperation(value = "Get all products", produces = "A list of products", notes = "Hit this URL to get all products")
	@GetMapping("/all")
	public List<Product> getAll() {
		return service.getAll();
	}

	@ApiOperation(value = "Retrieve a product's details", produces = "A product's details if it exists", notes = "Hit this URL to get a product's details")
	@GetMapping("/{productId}")
	public ResponseEntity<Product> getById(@PathVariable int productId) {
		Product product = service.getProductById(productId);
		if(product==null) {
			throw new ProductNotFoundException("Invalid product id : " +productId);
		}
		return new ResponseEntity<Product>(product,HttpStatus.OK);
	}

	@ApiOperation(value = "Add a product", consumes = "A new product is JSON", notes = "Hit this URL to insert a new product's details")
	@PostMapping(value = "/add")
	public void addProduct(@Valid @RequestBody Product product) {
		service.addProduct(product);
	}

	@ApiOperation(value = "Update a product's details", consumes = "An existing product in JSON", notes = "Hit this URL to update a product's details")
	@PutMapping(value="/update/{productId}")
	public void updateProduct(@Valid @RequestBody Product product, @PathVariable int productId) {
		service.updateProduct(product,productId);
	}

	
	 @GetMapping("/dashboard/feign/vendors")
	 @HystrixCommand(fallbackMethod = "fallback")
	  public  List<Product> findPeers(){
	        return service.getAll();
	   }
	 
	 public  Collection<Vendor> fallback(){
		 logger.info("server down");
	        return Arrays.asList(new Vendor(100, "Fallback vendor", "This is fallback vendor,means server is down", "7896541230", "meena@gmail.com"));    		         
	   }
	

	@ApiOperation(value = "Delete a product", consumes = "An existing product id", notes = "Hit this URL to delete a product's details")
	@DeleteMapping(value = "/{productId}")
	public void deleteProductById(@PathVariable int productId) {
		service.deleteProduct(productId);
	}
	
	
}