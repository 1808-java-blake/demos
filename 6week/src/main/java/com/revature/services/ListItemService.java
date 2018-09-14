package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.revature.model.GroceryList;
import com.revature.model.ListItem;
import com.revature.repos.GroceryListRepo;
import com.revature.repos.ListItemRepo;

@Service
public class ListItemService {

	@Autowired
	private GroceryListRepo groceryRepo;
	
	@Autowired
	private ListItemRepo listItemRepo;


	public ListItem addItem(ListItem newItem) {
		return listItemRepo.save(newItem);
	}


}
