package com.mv.viewer.user;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.hamcrest.CoreMatchers.hasItems;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
 
import java.util.List;
 
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
 
import com.mv.viewer.MedicalViewerApplicationTests;
import com.mv.viewer.user.domain.User;
import com.mv.viewer.user.mapper.UserMapper;
  
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = MedicalViewerApplicationTests.class)
@WebAppConfiguration
public class UserMapperTest {
      
     @Autowired
     UserMapper userMapper;
      
     @Test
     public void readUserTest() {
          User user = userMapper.readUser("show3993");
          assertThat("show3993", is(user.getUsername()));
          assertThat("1234", is(user.getPassword()));
     }
      
     @Test
     public void readAuthorityTest() {
          //List<String> authorities = userMapper.readAuthority("show3993");
          //assertThat(authorities, hasItems("ADMIN", "USER"));       
          //assertThat(authorities, hasItem("USER"));     
     }
}