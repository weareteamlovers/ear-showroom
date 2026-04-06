package com.ear.showroom.service;

import com.ear.showroom.dto.GithubRepoDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Comparator;
import java.util.List;
import java.util.Map;

@Service
public class GithubService {

    @Value("${github.username}")
    private String username;

    @Value("${github.token:}")
    private String token;

    public List<GithubRepoDto> getRepositories() {
        String url = "https://api.github.com/users/" + username + "/repos";

        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", "application/vnd.github+json");

        if (token != null && !token.isBlank()) {
            headers.setBearerAuth(token);
        }

        HttpEntity<Void> entity = new HttpEntity<>(headers);

        List<Map<String, Object>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                entity,
                new ParameterizedTypeReference<List<Map<String, Object>>>() {}
        ).getBody();

        if (response == null) return List.of();

        return response.stream()
                .filter(repo -> !(Boolean) repo.get("fork"))
                .map(repo -> new GithubRepoDto(
                        (String) repo.get("name"),
                        (String) repo.get("description"),
                        (String) repo.get("html_url"),
                        (String) repo.get("language"),
                        ((Number) repo.get("stargazers_count")).intValue()
                ))
                .sorted(Comparator.comparing(GithubRepoDto::getStargazersCount).reversed())
                .toList();
    }
}