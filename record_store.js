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

  findRecord:function(recordName){
    return _.find(this.inventory, function(record){
      return record.recordName === recordName;
    })
  },

  sellRecord:function(recordName){
    return _.find(this.inventory, function(record){
      if (record.recordName === recordName) {
      return this.balance += record.price;}
    })
  }
}

module.exports = RecordStore;

