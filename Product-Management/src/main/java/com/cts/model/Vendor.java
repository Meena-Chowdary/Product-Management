package com.cts.model;

public class Vendor {
	
	private long vendorId;

	private String name;

	private String city;

	private String mobileNo;

	private String emailId;

	public Vendor() {
		super();
	}

	public Vendor(long i) {
		this.vendorId=i;
	}
	public long getVendorId() {
		return vendorId;
	}

	public void setVendorId(long vendorId) {
		this.vendorId = vendorId;
	}

	public Vendor(long vendorId, String name, String city, String mobileNo, String emailId) {
		super();
		this.vendorId = vendorId;
		this.name = name;
		this.city = city;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	@Override
	public String toString() {
		return "Vendor [vendorId=" + vendorId + ", name=" + name + ", city=" + city + ", mobileNo=" + mobileNo
				+ ", emailId=" + emailId + "]";
	}

}
