const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// logging middleware
app.use((req, resp, next) => {
  console.log(`request was made with url: ${req.url} and method:${req.method}`);
  next();
});

// register the body-parser
app.use(bodyParser.json());

app.get('/users', (req, resp) => {
  console.log('retrieving all users');
  let users = [{name: 'dylan'}, {name:"mitch"}];
  resp.json(users);
})

app.post('/users', (req, resp) => {
  let user = req.body;
  console.log(`creating user`);
  console.log(user);
  resp.sendStatus(201);
})


const server = app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});