package com.mv.viewer.db.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.mv.viewer.db.domain.Userinfo;

// person_id
@Mapper
public interface UserinfoMapper {
	@Select("SELECT * FROM userinfo WHERE username = #{username}")
	public Userinfo readAll(@Param("username") String username);
	
	@Select("SELECT person_id FROM userinfo WHERE username = #{username}")
	public Userinfo readPersonId(@Param("username") String username);
}