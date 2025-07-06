package com.mauble.portfoliobackend.controllers;

import com.mauble.portfoliobackend.entities.Message;
import com.mauble.portfoliobackend.repositories.IMessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class MessageController {
    private final IMessageRepository messageRepository;

    public MessageController(IMessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping("/messages")
    public List<Message> getMessages() {
        return (List<Message>) messageRepository.findAll();
    }

    @PostMapping("/messages")
    void addMessage(@RequestBody Message message) {
        messageRepository.save(message);
        System.out.println(message);
    }
}
