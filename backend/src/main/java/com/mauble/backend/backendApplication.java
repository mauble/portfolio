package com.mauble.backend;

import com.mauble.backend.entities.Message;
import com.mauble.backend.repositories.IMessageRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class backendApplication {
	public static void main(String[] args) {
		SpringApplication.run(backendApplication.class, args);
	}

	@Bean
	CommandLineRunner init(IMessageRepository messageRepository) {
		return _ -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(title -> {
			Message message = new Message(title.toLowerCase() + "@domain.com", title, "test");
				messageRepository.save(message);
		});
			messageRepository.findAll().forEach(System.out::println);
		};
	}
}
