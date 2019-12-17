var connection = require("../config/connection.js");


var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, results) {
            if (err) {
                console.log("throw error orm selectAll");
                throw err;
            };
            console.log(queryString);
            cb(results);
        })
    },
    create: function (tableName, burgerCol, devouredCol, burgerVal, devouredVal, cb) {
        var queryString = "INSERT INTO " + tableName + " (" + burgerCol.toString() + ", " + devouredCol.toString() + ") VALUES (" + burgerVal.toString() + " ," + devouredVal.toSTring() + ");";


        console.log(queryString);
        connection.query(queryString, function (err, results) {
            if (err) {
                console.log("throw error insertone orm");
                throw err;
            };
            cb(results);
        });

    }

}

module.exports = orm;