package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.GroceryList;

@Repository
public interface GroceryListRepo extends JpaRepository<GroceryList, Integer> {

}
