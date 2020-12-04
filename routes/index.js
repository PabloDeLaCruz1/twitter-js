const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const client = require('../db')

router.get('/', (req, res) => {
  // let tweets = tweetBank.list();
  // res.render( 'index', { tweets: tweets, showForm: true  } );
  client.query('SELECT * FROM tweets', (err, result) => {
    if (err) return next(err); // pass errors to Express
    const tweets = result.rows; //The result object has some metadata attached to it, but if we just want the rows returned, we can access them via .rows
   console.log(tweets);
    res.render('index', {
      title: 'Twitter.js',
      tweets: tweets,
      showForm: true
    });
  });
});
router.get('/users/:name', (req, res) => {
  let name = req.params.name;
  // let tweets = tweetBank.find( {name: name} );
  // console.log(tweets);
  // res.render( 'index', {title: "Twitter",  tweets: tweets, showForm: true, username: name } );
  client.query('SELECT name FROM users WHERE name=$1', [name], (err, result) => {
    if (err) return next(err); // pass errors to Express
    const tweets = result.rows;
    res.render('index', {
      title: "Twitter",
      tweets: tweets,
      showForm: true,
      username: name
    });
  });

});
router.get('/tweets/:id', (req, res) => {
  let id = req.params.id;
  let tweets = tweetBank.find({
    id: +id
  }); //make sure its a number
  res.render('index', {
    tweets: tweets
  });
});

router.post('/tweets', (req, res) => {
  // tweetBank.add(req.body.name, req.body.text)
  // client.query('INSERT INTO tweets (userId, content) VALUES ($1, $2)', [10, 'I love SQL!'], (err, data) => {
    // /** ... */ });
  console.log(req.body.name, req.body.text);
  res.redirect('/');
})



module.exports = router;