var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(tableName, burgerCol, devouredCol, burgerVal, devouredVal, cb) {
      orm.create("burgers", burgerCol, devouredCol, burgerVal, devouredVal, function(res) {
        cb(res);
      });
    },
    // update: function(objColVals, condition, cb) {
    //   orm.update("burgers", objColVals, condition, function(res) {
    //     cb(res);
    //   });
    // },
    // delete: function(table, condition, cb) {
    //   orm.delete("burgers" , this.id, function(result) {
    //     cb(result)
    //   })
    // }
  };

  module.exports = burgers;
