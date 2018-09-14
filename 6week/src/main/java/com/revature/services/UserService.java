package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.AppUser;
import com.revature.repos.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo ur;

	public AppUser findOne(int id) {
		AppUser u = ur.getOne(id);
		return u;
	}

	public List<AppUser> findAll() {
		return ur.findAll();
	}

	public AppUser save(AppUser u) {
		return ur.save(u);
	}

}
