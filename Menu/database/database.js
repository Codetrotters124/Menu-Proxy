const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// var connection = mongoose.createConnection("mongodb://localhost/test");

var db = mongoose.connection;
autoIncrement.initialize(db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected
});

const menuSchema = new mongoose.Schema({}, {strict: false});

menuSchema.plugin(autoIncrement.plugin, 'Menu');
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;




