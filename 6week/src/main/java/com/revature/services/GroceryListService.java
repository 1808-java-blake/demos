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
public class GroceryListService {

	@Autowired
	private GroceryListRepo groceryRepo;
	
	@Autowired
	private ListItemRepo listItemRepo;

	public GroceryList findOne(int id) {
		return groceryRepo.getOne(id);
	}

	public List<GroceryList> findAll() {
		return groceryRepo.findAll();
	}

	public GroceryList save(GroceryList newList) {
		return groceryRepo.save(newList);
	}

	@Transactional
	public ListItem addItem(int id, ListItem newItem) {
		GroceryList gl = groceryRepo.getOne(id);
		ListItem item = listItemRepo.getOne(newItem.getId());
		item.setGroceryList(gl);
		listItemRepo.save(item);
		return item;
	}

}
