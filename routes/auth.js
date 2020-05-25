var express     = require('express'),   
    router      = express.Router(),
    passport    = require('passport');

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('..');
})

router.get('/login', (req, res) => res.render('login', {isAuthenticated: req.isAuthenticated()}))
router.post('/login', (req, res) => res.render('login', {isAuthenticated: req.isAuthenticated()}))

// ===============================
// ====== auth with google+ ======
// ===============================

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', 
  passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
    res.redirect('/');
});

router.get('/facebook/deauthorize', (req, res) => res.render("login"))

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
      res.redirect('/')
  });

router.get('/facebook',
  passport.authenticate('facebook')
);



module.exports = router;