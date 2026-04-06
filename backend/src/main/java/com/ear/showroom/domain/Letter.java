package com.ear.showroom.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Letter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String senderName;
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private boolean readStatus;
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        this.readStatus = false;
    }

    public Long getId() { return id; }
    public String getSenderName() { return senderName; }
    public String getTitle() { return title; }
    public String getContent() { return content; }
    public boolean isReadStatus() { return readStatus; }
    public LocalDateTime getCreatedAt() { return createdAt; }

    public void setId(Long id) { this.id = id; }
    public void setSenderName(String senderName) { this.senderName = senderName; }
    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
    public void setReadStatus(boolean readStatus) { this.readStatus = readStatus; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}