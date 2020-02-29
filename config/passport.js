var passport        = require('passport'),
    GoogleStrategy  = require('passport-google-oauth').OAuth2Strategy,
    // {Passport}      = require('./keys'),
    {User}          = require('../models');


    // serialize user data for the cookie to create a session
passport.serializeUser((user, done) => done(null, user.id))
    // retrieve the cookie, which part of it is an id, find a user by that id then return that user!
passport.deserializeUser((id, done) => User.findById(id).then(user => done(null, user)))

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
        clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        var user = new User({
            username: profile.displayName,
            googleID: profile.id,
        })
    
        User.findOne({googleID: profile.id}).then(currentUser =>{
            debugger
            console.log(profile)
            console.log(profile.id)
            if(currentUser) {
                done(null, currentUser)
            }
            else {
                new User(user).save().then( newUser => done(null, newUser))
            }
        })
    })
)