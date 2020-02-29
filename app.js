var app           = require("express")(),
  bodyparser      = require("body-parser"),
  passport        = require("passport"),
  homefieldRoutes = require("./routes/homefield"),
  teamRoutes      = require("./routes/team"),
  url             = require('url'),
  userRoutes      = require("./routes/user"),
  authRoutes      = require("./routes/auth"),
  db              = require("./models/index"),
  passportSetup   = require('./config/passport'),
  // {Session}       = require('./config/keys'),
  cookieSession   = require('cookie-session');

const port      = 8000;


app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use(cookieSession({
  maxAge: 14*24*60*60*1000,
  keys:[process.env.SESSION_COOKIE_KEY]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/homefield", homefieldRoutes); // TODO
app.use("/team", teamRoutes); // TODO
app.use("/auth", authRoutes); // TODO
// app.use('/user', userRoutes); // TODO

app.get("/", async (req, res) => {
  let user = req.user
  console.log(user)
    let teams = await db.Team.find()
        .sort({ name: 1 })
        .then(teams => teams)
        .catch(error => error);
    res.render("landing", {teams, user});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


