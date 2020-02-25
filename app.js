var app = require("express")(),
  bodyparser = require("body-parser"),
  homefieldRoutes = require("./routes/homefield"),
  teamRoutes = require("./routes/team"),
  url     = require('url'),
  userRoutes = require("./routes/user"),
  db = require("./models/index");

const port = 8000;

app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.use("/homefield", homefieldRoutes); // TODO
app.use("/team", teamRoutes); // TODO
// app.use('/user', userRoutes); // TODO

app.get("/", async (req, res) => {
    var {team} = url.parse(req.url, true).query;
    let teams = await db.Team.find()
        .sort({ name: 1 })
        .then(teams => teams)
        .catch(error => error);
    console.log(team)

    if (team) {
        await db.Team.findById(req.params.team_id)
            .populate("homefields")
            .then(team => {
                // TODO: The values getting populated in the pug are not rendering correctly.
                // Need to figure out how to render data correctly in a a jade/pug file
                let locations = team.homefields.map(homefield => homefield.geometry);
                locations = JSON.stringify([
                    {
                    location: "Fremont",
                    latitude: 37.49267,
                    longitude: -121.94409
                    },
                    {
                    location: "Folsom",
                    latitude: 38.64392,
                    longitude: -121.18621
                    }
                ]); // delete this locations when it works
                res.render("landing", {teams, team, locations});
            })
            .catch(error => res.render("landing"));
    }
    res.render("landing", {teams});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
