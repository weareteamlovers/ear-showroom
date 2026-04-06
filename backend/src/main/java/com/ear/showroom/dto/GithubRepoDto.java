package com.ear.showroom.dto;

public class GithubRepoDto {
    private String name;
    private String description;
    private String htmlUrl;
    private String language;
    private int stargazersCount;

    public GithubRepoDto() {}

    public GithubRepoDto(String name, String description, String htmlUrl, String language, int stargazersCount) {
        this.name = name;
        this.description = description;
        this.htmlUrl = htmlUrl;
        this.language = language;
        this.stargazersCount = stargazersCount;
    }

    public String getName() { return name; }
    public String getDescription() { return description; }
    public String getHtmlUrl() { return htmlUrl; }
    public String getLanguage() { return language; }
    public int getStargazersCount() { return stargazersCount; }

    public void setName(String name) { this.name = name; }
    public void setDescription(String description) { this.description = description; }
    public void setHtmlUrl(String htmlUrl) { this.htmlUrl = htmlUrl; }
    public void setLanguage(String language) { this.language = language; }
    public void setStargazersCount(int stargazersCount) { this.stargazersCount = stargazersCount; }
}