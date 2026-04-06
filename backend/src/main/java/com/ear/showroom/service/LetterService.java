package com.ear.showroom.service;

import com.ear.showroom.domain.Letter;
import com.ear.showroom.dto.LetterRequest;
import com.ear.showroom.repository.LetterRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LetterService {

    private final LetterRepository letterRepository;

    public LetterService(LetterRepository letterRepository) {
        this.letterRepository = letterRepository;
    }

    public void save(LetterRequest request) {
        Letter letter = new Letter();
        letter.setSenderName(request.getSenderName());
        letter.setTitle(request.getTitle());
        letter.setContent(request.getContent());
        letterRepository.save(letter);
    }

    public List<Letter> findAll() {
        return letterRepository.findAll().stream()
                .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .toList();
    }

    public Letter findById(Long id) {
        Letter letter = letterRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("편지를 찾을 수 없습니다."));
        if (!letter.isReadStatus()) {
            letter.setReadStatus(true);
            letterRepository.save(letter);
        }
        return letter;
    }
}