package com.mv.viewer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mv.viewer.db.domain.Custodian;
import com.mv.viewer.db.domain.MedicalDoc;
import com.mv.viewer.db.domain.MedicalEntry;
import com.mv.viewer.db.domain.MedicalList;
import com.mv.viewer.db.domain.Person;
import com.mv.viewer.db.domain.Userinfo;
import com.mv.viewer.db.mapper.CustodianMapper;
import com.mv.viewer.db.mapper.MedicalDocMapper;
import com.mv.viewer.db.mapper.MedicalInfoMapper;
import com.mv.viewer.db.mapper.PersonMapper;
import com.mv.viewer.db.mapper.UserinfoMapper;
import com.mv.viewer.domain.MedicalEntryParam;
import com.mv.viewer.domain.MedicalListParam;
import com.mv.viewer.domain.MedicalallParam;

@RestController
public class MedicalRequestController {
    //@Autowired PersonMapper PersonMapper;
    @Autowired UserinfoMapper UserinfoMapper;
    //@Autowired CustodianMapper CustodianMapper;
    //@Autowired MedicalDocMapper MedicalDocMapper;
    @Autowired MedicalInfoMapper MedicalInfoMapper;
    
    @RequestMapping(value = "/user/myMedicalList", method = RequestMethod.POST)
    public MedicalList medicalList(@RequestBody MedicalListParam Param) {
    	
    	Userinfo userinfo = UserinfoMapper.readAll(Param.getUsername());
        MedicalList medicalList = MedicalInfoMapper.readList(userinfo.getPerson_id());
       
        return medicalList;
    }
    
    @RequestMapping(value = "/user/myMedicalEntry", method = RequestMethod.POST)
    public MedicalEntry medicalEntry(@RequestBody MedicalEntryParam Param) {
    	Userinfo userinfo = UserinfoMapper.readAll(Param.getUsername());
        MedicalEntry medicalEntry = MedicalInfoMapper.readEntry(userinfo.getPerson_id(), Param.getCheck_date());
       
        return medicalEntry;
    }
    
    @RequestMapping(value = "/user/myMedical", method = RequestMethod.POST)
    public MedicalDoc readAll(@RequestBody MedicalallParam Param) {
    	Userinfo userinfo = UserinfoMapper.readAll(Param.getUsername());
        MedicalDoc medicaldoc = MedicalInfoMapper.readAll(userinfo.getPerson_id());
       
        return medicaldoc;
    }
}
