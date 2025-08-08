package com.mauble.backend.repositories;

import com.mauble.backend.entities.Message;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

@Repository
public interface IMessageRepository extends CrudRepository<Message, Long> {}