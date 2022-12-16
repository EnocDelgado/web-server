const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT;
const hbs = require('hbs');

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// serve static content
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Fernando Herrera',
        title: "Node course"
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Fernando Herrera',
        title: "Node course"
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Fernando Herrera',
        title: "Node course"
    });
})

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})