package com.ear.showroom.controller;

import com.ear.showroom.domain.Letter;
import com.ear.showroom.dto.GithubRepoDto;
import com.ear.showroom.dto.LetterRequest;
import com.ear.showroom.service.GithubService;
import com.ear.showroom.service.LetterService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ApiController {

    private final GithubService githubService;
    private final LetterService letterService;

    public ApiController(GithubService githubService, LetterService letterService) {
        this.githubService = githubService;
        this.letterService = letterService;
    }

    @GetMapping("/projects")
    public List<GithubRepoDto> projects() {
        return githubService.getRepositories();
    }

    @PostMapping("/letters")
    public String createLetter(@Valid @RequestBody LetterRequest request) {
        letterService.save(request);
        return "ok";
    }

    @GetMapping("/admin/letters")
    public List<Letter> letters() {
        return letterService.findAll();
    }

    @GetMapping("/admin/letters/{id}")
    public Letter letter(@PathVariable Long id) {
        return letterService.findById(id);
    }
}