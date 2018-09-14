package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.ListItem;

@Repository
public interface ListItemRepo extends JpaRepository<ListItem, Integer> {
	
}
