//used: express, massive, .env
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

//import controllers go here

//good ol' part of the server that always feels left out
const app = express();

//top level middleware
app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 60 * 60 * 1000
    }
  })
);

//database connection
massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('<--database connected-->');
});

//endpoints

//listen
const port = SERVER_PORT || 3069;
app.listen(port, () => {
  console.log(`<--Server on ${port}-->`);
});
