var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8001"
});

AWS.config.secretAccessKey="25345344";
AWS.config.accessKeyId="343143";
var docClient = new AWS.DynamoDB.DocumentClient();

var table = "Audios";
var ID=1;
var title = "2012";
var params = {
    TableName:table,
    Key:{
        "ID":ID,
        "title": title
    }
};

docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
