var app         = require('express')(),
    bodyparser  = require('body-parser'),
    indexRoutes  = require('./routes');

const port = 8000

app.use(bodyparser.urlencoded({extended: true}))
app.set("view engine", "pug")

app.use('/', indexRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
