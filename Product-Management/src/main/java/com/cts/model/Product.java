package com.cts.model;

import javax.persistence.Transient;


public class Product {

	private int productId;

	private String productName;

	private String productDescription;

	private float price;

	private int  vid;
	
	@Transient
	private Vendor vendor;
	public Product() {
	
	}
	public Product(int productId,
			 String productName,String productDescription,
			float price, int vid) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.price = price;
		this.vid = vid;
	}
	
	public Product(int productId, String productName, String productDescription, float price, int vid, Vendor vendor) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.price = price;
		this.vid = vid;
		this.vendor = vendor;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getVid() {
		return vid;
	}

	public void setVid(int vid) {
		this.vid = vid;
	}

	public Vendor getVendor() {
		return vendor;
	}

	public Product setVendor(Vendor vendor) {
		this.vendor = vendor;
		return null;
	}


	
	
}