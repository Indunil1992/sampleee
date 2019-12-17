let AWS = require('aws-sdk');
const translate = new AWS.Translate();

exports.handler = async (event) => {
    translate.translateText({
        SourceLanguageCode: "ar",
        TargetLanguageCode: "en",
        Text: "ummi"
    }).promise()
        .then(data => {
            // your code goes here
            console.log(data);
        })
        .catch(err => {
                        console.log(err);
            // error handling goes here
        });

    return { "message": "Successfully executed" };
};