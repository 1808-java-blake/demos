CREATE TABLE movies.movies
(
    movie_id serial NOT NULL,
    title character varying(50) NOT NULL,
    num_blades integer,
    year numeric(4) NOT NULL,
    PRIMARY KEY (movie_id),
    CONSTRAINT title_year UNIQUE (title, year)

);

CREATE TABLE movies.app_users
(
    user_id serial,
    username character varying(15)  NOT NULL,
    password character varying(15)  NOT NULL,
    role character varying(8)  NOT NULL,
    CONSTRAINT app_users_pkey PRIMARY KEY (user_id),
    CONSTRAINT unique_usernames UNIQUE (username)
);

CREATE TABLE movies.users_movies
(
    user_id integer,
    movie_id integer,
    PRIMARY KEY (user_id, movie_id),
    CONSTRAINT movie_fk FOREIGN KEY (movie_id)
        REFERENCES movies.movies (movie_id),
    CONSTRAINT user_fk FOREIGN KEY (user_id)
        REFERENCES movies.app_users (user_id)
);
