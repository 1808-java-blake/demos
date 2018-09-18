package com.revature.intercomm;

import java.util.List;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.revature.model.Account;

@FeignClient(name="account-service")
public interface AccountClient {

	@GetMapping("/accounts/customer/{id}")
	List<Account> getAccountsByCustomer(@PathVariable("id") int id);
	
}
