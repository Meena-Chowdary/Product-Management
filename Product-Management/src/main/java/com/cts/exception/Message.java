package com.cts.exception;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;
@XmlRootElement(name = "error")
public class Message {
	
  private String msg;
  private List<String> details;

  public Message(String msg, List<String> details) {
      super();
      this.msg = msg;
      this.details = details;
  }

  public String getMessage() {
      return msg;
  }

  public void setMessage(String msg) {
      this.msg = msg;
  }

  public List<String> getDetails() {
	return details;
  }

  public void setDetails(List<String> details) {
	this.details = details;
  }

}
