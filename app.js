const express = require("express")
const chalk = require("chalk")
const morgan = require('morgan')
const nunjucks = require("nunjucks")
const tweetBank = require("./tweetBank")

const app = express()
const PORT = 3000

let people = {
    title: "People",
    people: [
        { name: 'Pablo'},
        { name: 'Pica' },
        { name: 'Piedra'}
    ]
}

//middleware
// app.use(express.static('public'))
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now())
//     // console.log( res.status(201));
//     next()
// })

// //route specific middleware
// app.use("/special",function (req, res, next) {
//     console.log(chalk.yellow("this is special"))
//     next()
// })

// app.use(morgan('combined'))

app.set('view engine', 'html')
app.engine('html', nunjucks.render)
// nunjucks.configure('views'); // point nunjucks to the proper directory for templates

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache:true
});


// nunjucks.render('index.html', people)


app.get('/', (req, res, next) => {
    res.render( 'index', people);
    console.log("Hlellloo");
    next();
})
app.get('/tweets/:id', (req, res, next) => {
    res.render( 'index', people);

})
// app.get('/news', (req, res, next) => {
//     res.send("News")
//     next();
// })
app.listen(PORT, () => {
    console.log(chalk.blue("Server is listening on port 3000"));
})