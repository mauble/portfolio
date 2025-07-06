package com.mauble.portfoliobackend.repositories;

import com.mauble.portfoliobackend.entities.Message;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface IMessageRepository extends CrudRepository<Message, Long> {}