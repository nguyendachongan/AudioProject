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
    },
    UpdateExpression:"set link=link +:val",

    ExpressionAttributeValues:{
        ":val":"K"
    },
    ReturnValues:"UPDATED_NEW"
};

console.log("Attempting a conditional update...");
docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Update Item succeeded:", JSON.stringify(data, null, 2));
    }
});
