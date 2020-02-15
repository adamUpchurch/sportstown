var app         = require('express')(),
    bodyparser  = require('body-parser');

const port = 8000

app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "pug")

app.get('/', (req, res) => res.render('landing'))

app.get("/teams", function(req, res) {
    let teams = [
        {name: "alabama", img: "https://images.homedepot-static.com/productImages/10be4917-93d2-46bf-9c58-f85f5450305d/svn/red-fanmats-sports-rugs-18599-64_1000.jpg"},
        {name: "georgia", img: "https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/logos/University_of_Georgia.jpg"},
        {name: "florida", img: "https://images-na.ssl-images-amazon.com/images/I/41m8tCV4JRL._AC_.jpg"},
        {name: "alabama", img: "https://images.homedepot-static.com/productImages/10be4917-93d2-46bf-9c58-f85f5450305d/svn/red-fanmats-sports-rugs-18599-64_1000.jpg"},
        {name: "georgia", img: "https://s3-us-west-2.amazonaws.com/asset.plexuss.com/college/logos/University_of_Georgia.jpg"},
        {name: "florida", img: "https://images-na.ssl-images-amazon.com/images/I/41m8tCV4JRL._AC_.jpg"},

    ]
    res.render('teams', {teams, addTeam: true})
})
app.get("/spot", function(req, res) {
    res.render('spotForm')
})
app.post("/spot", function(req, res) {
    res.render('spotForm')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
