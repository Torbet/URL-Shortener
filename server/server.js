const express = require('express')
const ws = require('ws')
const fs = require('fs')
const https = require('https');
const path = require('path')

const app = express()

const port = process.env.PORT || 8000
  
var server = https.createServer({
    key: fs.readFileSync('ssl/server.key'),
    cert: fs.readFileSync('ssl/server.pem')
  }, app)
  .listen(port, function () {
    console.log('running')
  })

var data = JSON.parse(fs.readFileSync('./urls.json', 'utf8'))

function getValue(value) {
    return Object.keys(data).find(key => data[key] === value);
}



function addURL(slug, url) {
    data = JSON.parse(fs.readFileSync('./urls.json', 'utf8'))

    if (getValue(url) == null) {
        data[slug] = url
        fs.writeFileSync('./urls.json', JSON.stringify(data))
    }
}

function getURL(slug) {
    data = JSON.parse(fs.readFileSync('./urls.json', 'utf8'))
    return(data[slug])
}


function genSlug() {
    var result = '';
    for (var i = 6; i > 0; --i) result += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.length)];
    return result;
}


app.use('/', express.static(path.join(__dirname, '../client/build')))

app.get('/:slug', function(req, res) {
    res.redirect(getURL((req.path).substr(1)))
})

var wss = new ws.Server({ server }) 

wss.on('connection', function(socket) {

    socket.on('message', function(data) {
        var slug = genSlug()
        addURL(slug, data)
        socket.send(getValue(data))
    })
})