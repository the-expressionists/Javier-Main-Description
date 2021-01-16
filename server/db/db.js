const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3004', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // console.log('Mongoose connected');
});

const itemSchema = new mongoose.Schema({
  itemID: {type: String, required: true},
  name: {type: String, required: true},
  shortName: {type: String, required: true},
  articleNumber: {type: String, required: true},
  category: {type: String, required: true},
  reviews: {type: Number, required: true},
  averageRating: {type: Number, required: true},
  carouselImages: {type: [{imageUrl: String}], required: true},
  shortDescription: {type: String, required: true},
  longDescription: {type: String, required: true},
  thumbImageURL: {type: String, required: true},
  variants: {type: [{name: String, imageUrl: String, linkUrl: String}], required: true},
  liked: {type: Boolean, required: true},
  price: {type: Number, required: true},
  // reviews: array of review objects
});

/** Review document for our db
 * @class Item
 * @prop {String} itemID - 25 digit Alphanumeric ID for item
 * @prop {String} shortName - Name to display in navigation text
 * @prop {String} articleNumber - Three numbers in range 1-999 separated by a .
 * @prop {String} category - Type of item being sold
 * @prop {Number} reviews - Number of reviews on item
 * @prop {Number} averageRating - Average rating between all reviews
 * @prop {Array.<{imageUrl: String}>} carouselImages - list of Image names with their image URLs for the item's image carousel
 * @prop {String} shortDescription - Small description for the side text.
 * @prop {String} longDescription - Long description for the description text area
 * @prop {String} thumbImageURL - URL for the image of this item in thumbnails.
 * @prop {Array.<{name: String, imageUrl: String, linkUrl: String}>} variants - list of variations with their image URLs and link URLs for clickthroughs.
 * @prop {Boolean} liked - whether the user like this item yet or not.
 * @prop {Number} price - Price of the item
 */

const Item = mongoose.model('Item', itemSchema);

module.exports.Item = Item;