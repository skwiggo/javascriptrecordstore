var assert = require("assert");
var _ = require("lodash");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");


describe("Record Store", function (){

    var record1;
    var record2;
    var record3;
    var record4;
    var record5;
    var record6;
    var underground;

    before(function() {
      record1 = new Record("The Cure", "The Head on The Door", "12inch vinyl", "alternative/indie", 9.00);
      record2 = new Record("Converge", "Jane Doe", "CD","metal/harcore", 7.00);
      record3 = new Record("Basic Channel", "BCD-1", "CD", "techno", 10.00);
      record4 = new Record("Various Artists", "Drive OST", "12inch vinyl", "soundtrack", 20.00);
      record5 = new Record("George Duke", "Master of the Game", "cassette", "rnb/disco", 5.00);
      record6 = new Record("Throbbing Gristle", "20 Jazz Funk Greats", "12inch vinyl", "industrial", 12.00);
      underground = new RecordStore("Underground", "Edinburgh", 10000.00);
    })

  it("should return record store name", function() {
    assert.equal("Underground", underground.name);
  })

  it("should return record store city", function() {
    assert.equal("Edinburgh", underground.city);
  })

  it("should return record store balance", function() {
    assert.equal(10000, underground.balance);
  })

  it("should return record price", function() {
    assert.equal(9.00, record1.price);
  })
  
  it("should return no records intially in the system", function() {
    assert.equal(0, underground.inventory.length);
  })

  it("should return the inventory", function() {
    underground.addRecord(record1);
    assert.equal(record1, underground.listRecords());
  })

  it("should add records to the record store inventory", function() {;
    underground.addRecord(record2);
    underground.addRecord(record3);
    underground.addRecord(record4);
    assert.equal(4, underground.inventory.length);
  })

  it("should be able to search for a record", function() {
    assert.equal(record4, underground.findRecord("Drive OST"));
  })

  it("should be able to sell a specific record", function() {
    underground.sellRecord("Drive OST");
    assert.equal(10020, underground.balance);
  })

})