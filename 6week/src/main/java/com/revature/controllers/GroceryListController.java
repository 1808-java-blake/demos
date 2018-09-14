package com.revature.controllers;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.AppUser;
import com.revature.model.GroceryList;
import com.revature.model.ListItem;
import com.revature.services.GroceryListService;

@RestController
@RequestMapping("grocerylists")
public class GroceryListController {

	@Autowired
	private GroceryListService groceryListService;

	// /users
	@GetMapping
	public List<GroceryList> findAll() {
		System.out.println("finding all users");
		return groceryListService.findAll();
	}

	// /users/:id
	@Transactional
	@GetMapping("{id}")
	public GroceryList findById(@PathVariable int id) {
		return groceryListService.findOne(id);
	}

	@PostMapping
	public ResponseEntity<GroceryList> save(@RequestBody GroceryList newList) {
		GroceryList groceryList = groceryListService.save(newList);
		ResponseEntity<GroceryList> resp = new ResponseEntity<GroceryList>(groceryList, HttpStatus.CREATED);
		return resp;
	}
	
	@PostMapping("{id}/listitems")
	public ResponseEntity<ListItem> save(@PathVariable int id, @RequestBody ListItem newItem) {
		ListItem item = groceryListService.addItem(id, newItem);
		ResponseEntity<ListItem> resp = new ResponseEntity<ListItem>(item, HttpStatus.CREATED);
		return resp;
	}

}
