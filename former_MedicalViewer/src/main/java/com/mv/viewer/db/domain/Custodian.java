package com.mv.viewer.db.domain;

public class Custodian {
	private String custodian_id;
	private String name;
	private String hp;
	private String address;
	
	public String getCustodian_id() {
		return custodian_id;
	}
	public void setCustodian_id(String custodian_id) {
		this.custodian_id = custodian_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getHp() {
		return hp;
	}
	public void setHp(String hp) {
		this.hp = hp;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
