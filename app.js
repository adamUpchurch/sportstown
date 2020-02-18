var app             = require('express')(),
    bodyparser      = require('body-parser'),
    homefieldRoutes = require('./routes/homefield'),
    sportRoutes     = require('./routes/sport');
    teamRoutes      = require('./routes/team'),
    userRoutes      = require('./routes/user');

const port = 8000

app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "pug")

app.get('/', (req, res) => res.render('landing'))


app.use('/homefield', homefieldRoutes); // TODO
app.use('/sport', sportRoutes); // TODO
app.use('/team', teamRoutes); // TODO
// app.use('/user', userRoutes); // TODO

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
