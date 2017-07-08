package com.mv.viewer.config;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
 
import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
 
/**
 * @author YouMin
 * MyBatis에서는 Authority 타입을 지원하지 않기에 권한을 String 형태로 받아온 뒤에 바꾸는 번거로운 작업이 필요하다.
 * 따라서 바꾸는 작업을 거치지 않고 권한을 바로 받아올 수 있게끔 작업토록.
 * 참고 사이트 : http://www.mybatis.org/mybatis-3/ko/configuration.html#typeHandlers 
 */


@MappedJdbcTypes(JdbcType.VARCHAR)
public class AuthorityTypeHandler extends BaseTypeHandler<SimpleGrantedAuthority> {
	// BaseTypeHandler : 기본적으로 구현해야하는 클래스. 구현해야 하는 메소드가 4개 있다.
 
     @Override
     public void setNonNullParameter(PreparedStatement ps, int i,
               SimpleGrantedAuthority parameter, JdbcType jdbcType) throws SQLException {
          ps.setString(i, parameter.getAuthority());
     }
 
     @Override
     public SimpleGrantedAuthority getNullableResult(ResultSet rs, String columnName)
               throws SQLException {
          return new SimpleGrantedAuthority(rs.getString(columnName));
     }
 
     @Override
     public SimpleGrantedAuthority getNullableResult(ResultSet rs, int columnIndex)
               throws SQLException {
          return new SimpleGrantedAuthority(rs.getString(columnIndex));
     }
 
     @Override
     public SimpleGrantedAuthority getNullableResult(CallableStatement cs,
               int columnIndex) throws SQLException {
          return new SimpleGrantedAuthority(cs.getString(columnIndex));
     }
}