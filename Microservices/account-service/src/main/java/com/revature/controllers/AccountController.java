package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Account;

@RestController
@RequestMapping("accounts")
public class AccountController {
	private List<Account> accounts;

	public AccountController() {
		accounts = new ArrayList<>();
		accounts.add(new Account(1, 3, "account 120", 50));
		accounts.add(new Account(2, 1, "account 280", 500000));
		accounts.add(new Account(3, 2, "account 33", 250));
		accounts.add(new Account(4, 1, "account 14", 123540));
		accounts.add(new Account(5, 1, "account 52", 2));
	}

	@GetMapping
	public List<Account> findAll() {
		return accounts;
	}

	@GetMapping("{id}")
	public Account findById(@PathVariable int id) {
		return accounts.stream().filter(account -> account.getId() == id).findFirst().get();
	}

	@GetMapping("customer/{id}")
	public List<Account> findByCustomer(@PathVariable int id) {
		return accounts.stream().filter(account -> account.getCustomerId() == id).collect(Collectors.toList());
	}

}
