package com.mv.viewer.db.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.mv.viewer.db.domain.Custodian;

@Mapper
public interface CustodianMapper {
	@Select("SELECT * FROM custodian WHERE custodian_id = #{custodian_id}")
	public Custodian readAll(@Param("custodian_id") String custodian_id);
	
	@Select("SELECT * FROM custodian WHERE custodian_id = #{custodian_id}")
	public Custodian readCustodian(@Param("custodian_id") String custodian_id);
}