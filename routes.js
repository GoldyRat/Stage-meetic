const router = require('express').Router();

//const userList = require('./db').userDb;
const userList = [];

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
router.post('/user/submit', (req,res) => {
  const userData = req.body;    
  userList.push({...userData});
  console.log(userList)
});

module.exports = router;