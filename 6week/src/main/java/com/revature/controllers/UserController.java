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
import com.revature.services.UserService;

@RestController
@RequestMapping("users")
public class UserController {

	@Autowired
	private UserService us;

	// /users
	@GetMapping
	public List<AppUser> findAll() {
		System.out.println("finding all users");
		return us.findAll();
	}

	// /users/:id
	@Transactional
	@GetMapping("{id}")
	public AppUser findById(@PathVariable int id) {
		AppUser user = us.findOne(id);
		return user;
	}

	@PostMapping
	public ResponseEntity<AppUser> save(@RequestBody AppUser u) {
		AppUser user = us.save(u);
		ResponseEntity<AppUser> resp = new ResponseEntity<AppUser>(user, HttpStatus.CREATED);
		return resp;
	}

}
