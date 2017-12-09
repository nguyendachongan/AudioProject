var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001"
});
AWS.config.secretAccessKey="25345344";
AWS.config.accessKeyId="343143";
var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing audios into DynamoDB. Please wait.");

var allMovies = JSON.parse(fs.readFileSync('.json', 'utf8'));
allMovies.forEach(function(audio) {
    var params = {
        TableName: "Audios",
        Item: {
            "ID":audio.ID,
            "singer":  audio.singer,
            "title": audio.title,
            "link":  audio.link
        }
    };

    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add movie", movie.title, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", movie.title);
        }
    });
});
