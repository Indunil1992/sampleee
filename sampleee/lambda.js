let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    ddb.get({
        TableName: "IndunilDDB",
        Key: {
            test: "10",
            demo: "100"
        }
    }).promise()
        .then(data => {
            // your code goes here
        })
        .catch(err => {
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};