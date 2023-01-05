const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render("home")
})

app.get('/message', function(req, res){
    res.render("message")
})

app.get('/accept', function(req, res){
    res.render("accept")
})

app.get('/deny', function(req, res){
    res.render("deny")
})

app.get('/exit', function(req, res){
    res.render("exit")
})

app.get('/return', function(req, res){
    res.render("return")
})

const PORT = process.env.PORT || 1234
app.listen(PORT)
console.log('Sever is running!!! ' + PORT)