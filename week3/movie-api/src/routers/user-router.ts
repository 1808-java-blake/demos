import { Request, Response } from 'express';
import express from 'express';
import * as userDao from '../dao/user-dao';

// all routes defiend with this object will imply /movies
export const userRouter = express.Router(); // routers represent a subset of routes for the express application

/**
 * Find all users
 */
userRouter.get('', async (req: Request, resp: Response) => {
  try {
    console.log('retrieving all users');
    let users = await userDao.findAll();
    resp.json(users);
  } catch (err) {
    console.log(err);
    resp.sendStatus(500);
  }
});

/**
 * Find user by id
 */
userRouter.get('/:id', async (req, resp) => {
  const id = +req.params.id; // convert the id to a number
  console.log(`retreiving user with id  ${id}`)
  try {
    let user = await userDao.findById(id);
    if (user !== undefined) {
      resp.json(user);
    } else {
      resp.sendStatus(400);
    }
  } catch (err) {
    resp.sendStatus(500);
  }
});

/**
 * Add a new user
 */
userRouter.post('', async (req, resp) => {
  console.log('creating user')
  try {
    const id = await userDao.create(req.body);
    resp.status(201);
    resp.json(id);
  } catch (err) {
    console.log(err);
    resp.sendStatus(500);
  }
})


/**
 * Add a movie to users list
 */
userRouter.post('/:id/movies', async (req, resp) => {
  console.log('creating user')
  try {
    const id = await userDao.addMovieToUser(req.body.movieId, req.params.id);
    resp.sendStatus(201);
  } catch (err) {
    console.log(err);
    resp.sendStatus(500);
  }
})

userRouter.post('/login', async (req, resp) => {

  try {
    const user = await userDao.findByUsernameAndPassword(req.body.username, req.body.password);

    if (user) {
      req.session.user = user;
      resp.json(user);
    } else {
      resp.sendStatus(401);
    }
  } catch (err) {
    console.log(err);
    resp.sendStatus(500);
  }
})