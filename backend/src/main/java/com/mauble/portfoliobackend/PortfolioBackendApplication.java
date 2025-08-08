package com.mauble.portfoliobackend;

import com.mauble.portfoliobackend.entities.Message;
import com.mauble.portfoliobackend.repositories.IMessageRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class PortfolioBackendApplication {
	public static void main(String[] args) {
		SpringApplication.run(PortfolioBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner init(IMessageRepository messageRepository) {
		return args -> {
			Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(title -> {
			Message message = new Message(title.toLowerCase() + "@domain.com", title, "test");
				messageRepository.save(message);
		});
			messageRepository.findAll().forEach(System.out::println);
		};
	}
}
