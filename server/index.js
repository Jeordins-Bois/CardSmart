//used: express, massive, .env
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

//import controllers go here

//good ol' part of the server that always feels left out
const app = express();

//? Auth0 Imports
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

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
//? Auth0 Middleware
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/api/login",
  passport.authenticate("auth0", {
    // ------------------
    failureRedirect: `http://localhost:3000/`
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000/`);
  }
);

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/api/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .auth_user(profile.id)
        .then(user => {
          if (!user[0]) {
            app
              .get("db")
              .auth_create_user([
                profile.picture,
                profile.name.givenName,
                profile.id,
                profile.emails[0].value
              ])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, user[0]);
          }
        });
    }
  )
);

//database connection
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("<--database connected-->");
});

app.post("/api/redirect", (req, res, next) => {
  returnStr = req.body.place;
  res.status(200).send(returnStr);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get(`/api/logout`, (req, res) => {
  req.logout();
  let returnTo = "http://localhost:3000/";
  res.redirect(
    `https://${process.env.DOMAIN}/v2/logout?returnTo=${returnTo}&client_id=${process.env.CLIENT_ID}`
  );
});

//endpoints
app.get("/api/login");
app.get("/api/user", (req, res) => {
  console.log(req.session);
  if (req.user) {
    res.status(200).send(req.user);
  } else res.sendStatus(500);
});

//listen
const port = SERVER_PORT || 3069;
app.listen(port, () => {
  console.log(`<--Server on ${port}-->`);
});
