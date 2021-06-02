var Product = require('./product');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/lab6'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/getproducts', function (req, res) {
    Product.find(function (err, data) {
        res.send(data);
    })
})

app.post('/addproduct', function (req, res) {
    var user = new Product(req.body);
    user.save(function (err, data) {
        if (err) console.log(err.message);
        res.send('add product!');
    })
})

app.post('/deleteproduct', function (req, res) {
    Product.remove({ _id: req.body.id }, function (err, data) {
        res.send('remove product');
    })
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/lab6/index.html');
})

app.listen(process.env.PORT || 8080);
console.log('server is run!');
