var _ = require("lodash");

var Customer = function(name, balance) {
  this.name = name;
  this.balance = balance;  
  this.collection = [];
}

Customer.prototype = {
  buyRecord: function(store, recordName){
      return _.find(store.inventory, function(record){
        if (record.recordName === recordName) {
        this.balance -= record.price;
        return this.collection.push(record);
        }
      }.bind(this))
  },

  sellRecord: function(store, recordName){
    return _.find(this.inventory, function(record){
      if (record.recordName === recordName) {
      this.balance += record.price;
      return this.collection.pop(record);
      }
    }.bind(this))
  }
}


module.exports = Customer;