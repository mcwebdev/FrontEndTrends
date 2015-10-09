if (!process.env.NODE_ENV) process.env.NODE_ENV='development'

var express = require('express')
    , http = require('http')
//    , routes = require('./routes')
    , path = require('path')
    , reload = require('reload')
//    , cars = require('./server/api/cars')
    , colors = require('colors')

var app = express()
app.directory = __dirname;

module.exports = app;

var clientDir = path.join(__dirname, 'app')

app.configure(function() {
    app.set('port', process.env.PORT || 3000)
    app.use(express.favicon())
    app.use(express.logger('dev'))
    app.use(express.bodyParser())
    app.use(app.router)
    app.use(express.static(clientDir))
})

app.configure('development', function(){
    app.use(express.errorHandler());
})

app.get('/', function(req, res) {
    res.sendfile(path.join(clientDir, 'index.html'))
})

/*
app.get('/api/cars', cars.list)

app.get('/api/cars/total', cars.total) //placement matters

app.get('/api/cars/:id', cars.read) //sometimes called 'show'
app.post('/api/cars', cars.create)
app.put('/api/cars/:id', cars.update)
app.del('/api/cars/:id', cars.del)
*/


var server = http.createServer(app)

reload(server, app)
/*
 * More details here http://mongoosejs.com/docs/index.html
 */
mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/fet');
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log('db connected')
});

/*var kittySchema = mongoose.Schema({
    name: String
})
kittySchema.methods.speak = function () {
    var greeting = this.name
        ? "Friend name is " + this.name
        : "I don't have a name"
    console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema)
var patches = new Kitten({ name: 'Patches' })
var fluffy = new Kitten({ name: 'Fluffy' });
patches.save(function (err, patches) {
    if (err) // TODO handle the error
        console.log(err.message);
    else
        patches.speak();
});
fluffy.save(function (err, fluffy) {
    if (err) // TODO handle the error
        console.log(err.message);
    else
        fluffy.speak();
});
Kitten.find(function (err, kittens) {
    if (err) // TODO handle err
        console.log(kittens)
    else {
        for (var i = 0; i < kittens.length; i++) {
            kittens[i].speak();
        }
    }
});*/





server.listen(app.get('port'), function(){
    console.log("Web server listening in %s on port %d", colors.red(process.env.NODE_ENV), app.get('port'));
});
