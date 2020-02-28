var express     = require('express'),   
    router      = express.Router(),
    passport    = require('passport');

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

router.get('/login', (req, res) => res.render("login"))
router.post('/login', (req, res) => res.render("login"))

// ===============================
// ====== auth with google+ ======
// ===============================

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
});

// auth with google+
router.get('/facebook', passport.authenticate('google', {
    scope: ['profile']
}));



module.exports = router;