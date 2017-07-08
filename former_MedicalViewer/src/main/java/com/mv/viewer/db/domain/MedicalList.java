package com.mv.viewer.db.domain;

public class MedicalList {
	private String code;
	private int check_date;
	private String name;
	private String hp;
	private String address;
	
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public int getCheck_date() {
		return check_date;
	}
	public void setCheck_date(int check_date) {
		this.check_date = check_date;
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
