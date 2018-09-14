package com.revature.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.revature.dto.Post;

@RestController
@RequestMapping("demos")
public class DemoRestTemplateController {

	@GetMapping
	public Post getPosts() {
		RestTemplate rt = new RestTemplate();
		ResponseEntity<Post> post = rt.getForEntity("https://jsonplaceholder.typicode.com/posts/1", Post.class);
		System.out.println("received post: " + post.getBody());
		return post.getBody();
	}
}
