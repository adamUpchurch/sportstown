var app             = require('express')(),
    bodyparser      = require('body-parser'),
    homefieldRoutes = require('./routes/homefield'),
    sportRoutes     = require('./routes/sport');
    teamRoutes      = require('./routes/team'),
    userRoutes      = require('./routes/user'),
    db              = require('./models/index');

const port = 8000

app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "pug")

app.use('/homefield', homefieldRoutes); // TODO
app.use('/sport', sportRoutes); // TODO
app.use('/team', teamRoutes); // TODO
// app.use('/user', userRoutes); // TODO

app.get('/:team_id', async (req, res) => {
    await db.Team.findById(req.params.team_id)
    .populate("homefields")
    .then(team => {
        // TODO: The values getting populated in the pug are not rendering correctly. https://stackoverflow.com/questions/24717332/uncaught-syntaxerror-unexpected-identifier-in-for-loop-in-jade
        // Need to figure out how to render data correctly in a a jade/pug file
        console.log(team)
        team._id = String(team._id)
        // let geometries = team.homefields.map(homefield => homefield.geometry)
        console.log("team", team)
        res.render('landing', {team})
    })
    .catch(error => res.send(error))
})

app.get('/', (req, res) => {
    const coords = {lat: 33.7627459, lng: -84.3581608}
    res.render('landing', {coords, geometries: false})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
