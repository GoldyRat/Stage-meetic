const router = require('express').Router();

const { addUser } = require('./db')
// Serve `home` view. This renders `views/home.ejs`
router.get('/', (req, res) => {
  res.redirect('/fr')
});

router.get('/speed-dating/:roomId', (req, res) => {
  res.render('speed-dating', { roomId: req.params.roomId });
});

router.get('/fr', (req, res) => {
  res.render('home-fr');
});

router.get('/en', (req, res) => {
  res.render('home-en');
});
router.post('/user/submit', (req,res) => {
  const userData = req.body; 
  
  userRoom = addUser(userData);
  res.redirect(`/speed-dating/`+ userRoom);
  
});

module.exports = router;