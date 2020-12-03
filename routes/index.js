const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', (req, res) => {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true  } );
});
router.get( '/users/:name', (req, res) => {
    let name = req.params.name;
    let tweets = tweetBank.find( {name: name} );
    console.log(tweets);
    res.render( 'index', {title: "Twitter",  tweets: tweets, showForm: true, username: name } );
});
router.get( '/tweets/:id', (req, res) => {
  let id = req.params.id;
  let tweets = tweetBank.find( {id: +id} ); //make sure its a number
  res.render( 'index', { tweets: tweets  } );
});

router.post('/tweets', (req, res) =>{
  tweetBank.add(req.body.name, req.body.text)
  res.redirect('/');
})



module.exports = router;