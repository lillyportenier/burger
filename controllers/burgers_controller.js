var express = require("express");

var router = express.Router();


var burgers = require ("../models/burger.js");

router.get("/", function(req,res){
	res.redirect("burgers")
});

router.get("/burgers", function (req, res) {
    burgers.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/create", function (req, res) {
 
});

router.put("/burgers/update/:id", function (req, res) {

});


// Export routes for server.js to use.
module.exports = router;
