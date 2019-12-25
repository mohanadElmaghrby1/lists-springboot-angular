package com.example.demo.jwt.resource;

import java.io.Serializable;


public class  JwtTokenRequest implements Serializable {

  private static final long serialVersionUID = -5616176897013108345L;
//    eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU3Nzg3NTE1OCwiaWF0IjoxNTc3MjcwMzU4fQ.LxqiFT-9yjU2asvQW3pTc6nhn2WneIUzCPRt2hJXdDGohIEAedcVl3dlII05Sj8vOfYRPi7N9bjaSmMyW_DS1w//    }


    private String username;
    private String password;

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
