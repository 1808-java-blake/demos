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
import com.revature.services.ListItemService;

@RestController
@RequestMapping("listitems")
public class ListItemController {

	@Autowired
	private ListItemService listItemService;
	
	@PostMapping
	public ResponseEntity<ListItem> save(@RequestBody ListItem newItem) {
		ListItem item = listItemService.addItem(newItem);
		System.out.println(item.getGroceryList());
		ResponseEntity<ListItem> resp = new ResponseEntity<ListItem>(item, HttpStatus.CREATED);
		return resp;
	}

}
