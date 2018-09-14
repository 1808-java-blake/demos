package com.revature.projections;

import java.util.List;

import com.revature.model.Movie;

//@ProjectedPayload(name = "basicUser", types = { AppUser.class })
public interface BasicUserProjection {
	int getId();

	String getUsername();

	String getRole();

}
