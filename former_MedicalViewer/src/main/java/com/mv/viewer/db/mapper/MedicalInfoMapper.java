package com.mv.viewer.db.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.mv.viewer.db.domain.MedicalDoc;
import com.mv.viewer.db.domain.MedicalEntry;
import com.mv.viewer.db.domain.MedicalList;

@Mapper
public interface MedicalInfoMapper {
	@Select("SELECT medicaldocument.code, medicaldocument.check_date, custodian.name, custodian.hp, custodian.address FROM medicaldocument, custodian WHERE person_id = #{person_id} AND medicaldocument.custodian_id = custodian.custodian_id")
	public MedicalList readList(@Param("person_id") String person_id);
	
	@Select("SELECT medicaldocument.check_date, medicaldocument.exercise, medicaldocument.alcohol_intake, medicaldocument.smoking, medicaldocument.body_height, medicaldocument.body_weight, medicaldocument.body_waist, medicaldocument.left_vision, medicaldocument.right_vision, medicaldocument.left_hearing, medicaldocument.right_hearing, medicaldocument.body_mass_index, medicaldocument.systolic_blood_pressure, medicaldocument.diastolic_blood_pressure, medicaldocument.hemoglobin, medicaldocument.fasting_glucose, medicaldocument.cholesterol, medicaldocument.cholesterol_in_hdl, medicaldocument.triglyceride, medicaldocument.cholesterol_in_ldl, medicaldocument.creatinine, medicaldocument.glomerular_filtration_rate, medicaldocument.ast, medicaldocument.alt, medicaldocument.gamma_gtp, medicaldocument.protein_in_urine, custodian.name, custodian.hp, custodian.address FROM medicaldocument, custodian WHERE person_id = #{person_id} AND check_date = #{check_date} AND medicaldocument.custodian_id = custodian.custodian_id")
	public MedicalEntry readEntry(@Param("person_id") String person_id, @Param("check_date") int check_date);
	
	@Select("SELECT check_date from medicaldocument WHERE person_id = #{person_id}")
	public MedicalDoc readDate(@Param("person_id") String person_id);
	
	@Select("SELECT * from medicaldocument WHERE person_id = #{person_id}")
	public MedicalDoc readAll(@Param("person_id") String person_id);
}
