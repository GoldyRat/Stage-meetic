const router = require('express').Router();

// Serve `home` view. This renders `views/home.ejs`
router.get('/', (req, res) => {
  res.redirect('/fr')
});

router.get('/speed-dating', (req, res) => {
  res.render('speed-dating');
});

router.get('/fr', (req, res) => {
  res.render('home-fr');
});

router.get('/en', (req, res) => {
  res.render('home-en');
});
module.exports = router;