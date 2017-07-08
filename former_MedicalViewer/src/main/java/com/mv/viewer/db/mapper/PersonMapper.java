package com.mv.viewer.db.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.mv.viewer.db.domain.Person;

// name, sex, birth, hp, mp, address
@Mapper
public interface PersonMapper {
	@Select("SELECT * FROM personinfo WHERE person_id = #{person_id}")
	public Person readAll(@Param("person_id") String person_id);
	
	@Select("SELECT name, sex, birth, hp, mp, address FROM personinfo WHERE person_id = #{person_id}")
	public Person readPerson(@Param("person_id") String person_id);
	
	@Select("SELECT name FROM personinfo WHERE person_id = #{person_id}")
	public Person readPersonName(@Param("person_id") String person_id);
	
	@Select("SELECT name, birth FROM personinfo WHERE person_id = #{person_id}")
	public Person readPersonNamebirth(@Param("person_id") String person_id);
}