//package com.example.demo.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
//
///**
// * create by mohannad on 10/27/2019
// */
//@Configuration
//@EnableWebSecurity
//public class SpringSecurityConfigBasicAuth extends WebSecurityConfigurerAdapter {
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        ((HttpSecurity)((ExpressionUrlAuthorizationConfigurer.AuthorizedUrl)http
//                .csrf().disable() // to force out to recive complete request
//                .authorizeRequests()
//                .antMatchers(HttpMethod.OPTIONS , "/**").permitAll()
//                .anyRequest())
//                .authenticated().
//                and()).
//                formLogin()
//                .and()
//                .httpBasic();
//    }
//
////    @Override
////    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
////        auth.inMemoryAuthentication()
////                .withUser("mohannad").password("123").roles("USER","ACUTUATER");
////    }
//}
