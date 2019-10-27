package com.example.demo.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.javafx.geom.transform.Identity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Date;

/**
 * create by mohannad on 10/27/2019
 */
@Entity
public class Post {
    @Id @GeneratedValue
    private long id ;
    private String title;
    @Lob
    private String content;
    @JsonFormat(pattern = "MM/dd/yyyy")
    private Date creationDate;

    public Post() {
    }

    public Post(String title, String content, Date creationDate) {
        this.title = title;
        this.content = content;
        this.creationDate = creationDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
