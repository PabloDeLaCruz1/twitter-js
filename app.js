const express = require("express")

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
  
app.get('/', (req, res, next) => {
    res.send("Hello Twitter World!")
    next();
})
app.get('/news', (req, res, next) => {
    res.send("News")
    next();
})
app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
})