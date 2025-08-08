package com.mauble.backend.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;
    private String email;
    private String title;
    private String message;

    public Message(String email, String title, String message) {
        this.email = email;
        this.title = title;
        this.message = message;
    }

    public Message() {}

    @PrePersist
    protected void onCreate() {
        if (id == null) {
            id = UUID.randomUUID();
        }
    }

    public String getId() {
        return id != null ? id.toString() : null;
    }

    public void setId(String id) {
        if (id != null && !id.isEmpty()) {
            try {
                this.id = UUID.fromString(id);
            } catch (IllegalArgumentException e) {
                this.id = UUID.randomUUID();
            }
        }
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "Message{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", title='" + title + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
