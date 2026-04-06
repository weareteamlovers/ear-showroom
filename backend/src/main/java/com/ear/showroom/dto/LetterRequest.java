package com.ear.showroom.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LetterRequest {

    @NotBlank(message = "이름을 입력해주세요.")
    @Size(max = 30)
    private String senderName;

    @NotBlank(message = "제목을 입력해주세요.")
    @Size(max = 100)
    private String title;

    @NotBlank(message = "내용을 입력해주세요.")
    @Size(max = 5000)
    private String content;

    public String getSenderName() { return senderName; }
    public String getTitle() { return title; }
    public String getContent() { return content; }

    public void setSenderName(String senderName) { this.senderName = senderName; }
    public void setTitle(String title) { this.title = title; }
    public void setContent(String content) { this.content = content; }
}