var adv = require("../data/adventurers.js");

module.exports = function(app) {
    app.get("/api/adventurers", function(req, res) {
        res.json(adv);
    });
}