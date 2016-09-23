var RecordStore = function(name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;  
  this.inventory = [];
}

RecordStore.prototype = {
  
  listRecords: function() {
    this.inventory.forEach(function(item) {
      return item;
    })
  },
  
  addRecord: function(record) {
    this.inventory.push(record);
  }
}

module.exports = RecordStore;

