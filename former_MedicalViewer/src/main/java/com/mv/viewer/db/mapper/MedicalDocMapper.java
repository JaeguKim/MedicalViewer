package com.mv.viewer.db.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.mv.viewer.db.domain.MedicalDoc;

@Mapper
public interface MedicalDocMapper {
	@Select("SELECT * FROM medicaldocument WHERE person_id = #{person_id}")
	public MedicalDoc readAll(@Param("person_id") String person_id);
	
	@Select("SELECT * FROM medicaldocument WHERE person_id = #{person_id}")
	public MedicalDoc readMedicalDoc(@Param("person_id") String person_id);
	
	@Select("SELECT custodian_id FROM medicaldocument WHERE person_id = #{person_id}")
	public MedicalDoc readCustodianId(@Param("person_id") String person_id);
}
