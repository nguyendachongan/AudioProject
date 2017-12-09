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
var singer = "MAYDAY";
var title = "Quật cường";
var link="https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbZFVIUkwxR1EzZFU";
var image="https://drive.google.com/uc?export=download&id=0B7x-nVRJcvsbS0IxNm1UcTNZWTQ"
var params = {
    TableName:table,
    Item:{
        "ID":ID,
        "singer": singer,
        "title": title,
        "link":link,
        "image":image
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
