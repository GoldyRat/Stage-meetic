const router = require('express').Router();

const { checkMatch } = require('./db')
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
router.post('/user/submit', (req, res) => {
  const userData = req.body;
  // if (req.body.age < 18) {
  //   //res.status(422).json({errors : [{age : "Vous devez être majeur"}]});
  // } else {  
    userRoom = checkMatch(userData);
    if (userRoom == undefined) {
        res.render('alert', { message: 'User already exists!' });
        
    } else {
        res.redirect(`/speed-dating/` + userRoom);
    }} 

//}
);

module.exports = router;