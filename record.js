var _ = require("lodash");

var Record = function(artistName, recordName, format, genre, price) {
  this.artistName = artistName;
  this.recordName = recordName;
  this.format = format;
  this.genre = genre;
  this.price = price;
}

module.exports = Record;