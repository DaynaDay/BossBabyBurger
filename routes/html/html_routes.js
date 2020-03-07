const router = require('express').Router();


const { getBurger } = require('../../controllers/burgers_controller');


router.get('/', (req, res) => {
  
  getBurger()
    .then(burgerdata => {
      res.render('home', { burgers: burgerdata });
    })
    .catch(err => {
      res.status(500).end();
    });
});

module.exports = router;
