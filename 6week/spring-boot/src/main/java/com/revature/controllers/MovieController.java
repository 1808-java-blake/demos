package com.revature.controllers;

import java.util.Collection;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Movie;
import com.revature.services.MovieService;




@CrossOrigin
@RestController
@RequestMapping("movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@PostMapping
	public int save(@Valid @RequestBody Movie movie) {
		return movieService.save(movie);
	}

	@GetMapping
	public List<Movie> findAll() {
		return movieService.findAll();
	}

}
