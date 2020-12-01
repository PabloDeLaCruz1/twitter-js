const express = require("express")
const chalk = require("chalk")
const morgan = require('morgan')

const app = express()
const PORT = 3000

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

app.use(morgan('combined'))


app.get('/', (req, res, next) => {
    res.send("Hello Twitter World!")
    next();
})
app.get('/news', (req, res, next) => {
    res.send("News")
    next();
})
app.listen(PORT, () => {
    console.log(chalk.blue("Server is listening on port 3000"));
})