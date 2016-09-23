var _ = require("lodash");

var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;  
  this.inventory = [];
}

RecordStore.prototype = {
  
  listRecords: function() {
    for (index of this.inventory) {
      return index;
    }
  },
  
  addRecord: function(record) {
    this.inventory.push(record);
  },

  findRecord: function(record) {
    var search = _.find(this.inventory, ["record", record.recordName]);
    return search;
  },

  sellRecord: function(record) {
    var search = _.find(this.inventory, ["record", record.recordName]);
    this.balance += search.price;
  }
}

module.exports = RecordStore;

