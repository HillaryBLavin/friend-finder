var adv = require("../data/adventurers.js");

module.exports = function(app) {
    app.get("/api/adventurers", function(req, res) {
        res.json(adv);
    });

    app.post("/api/adventurers", function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 1000
        };

        // Gather the user's survey data
        var userData = req.body;
        var userScores = userData.scores;

        // A variable for the difference between the user's scores, and the scores of the adventurers in the database
        var totalDifference = 0;

        // Loop through the stored adventurers
        for (var a = 0; a < adventurers.length; a++) {
            totalDifference = 0;

            // Loop through the scores of each adventurer
            for (var b = 0; a < adventurers[a].scores[b]; b++) {
                // Calculate the difference between scores
                totalDifference += Math.abs(parseInt(userScores[b]) - parseInt(adventurers[a].scores[b]));

                // If the sum of the differences is less than the difference between the user and current "best match"
                if (totalDifference <= bestMatch.scoreDifference) {
                    // Update bestMatch
                    bestMatch.name = adventurers[a].name;
                    bestMatch.photo = adventurers[a].photo;
                    bestMatch.scoreDifference = totalDifference;
                }
            }
        }

        // Push the user's data to the database 
        adventurers.push(userData);

        // Return bestMatch in JSON format, to display in HTML
        res.json(bestMatch);
    });
}  