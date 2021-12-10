// handler.js

"use strict";
const AWS = require("aws-sdk");
const SES = new AWS.SES();

function sendEmail(formData, callback) {
  const { contact, serviceType, email, company, message } = formData;
  const emailParams = {
    Source: "accounting@laserexpressutah.com", // SES SENDING EMAIL
    ReplyToAddresses: [email, "accounting@laserexpressutah.com"],
    Destination: {
      ToAddresses: ["accounting@laserexpressutah.com"], // SES RECEIVING EMAIL
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: `Name: ${contact}\n\nEmail: ${email}\n\nCompany: ${company}\n\nService Type: ${serviceType}\n\nMessage: ${message}`,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "New request from laserexpressutah.com",
      },
    },
  };

  SES.sendEmail(emailParams, callback);
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body);

  sendEmail(formData, function (err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };

    callback(null, response);
  });
};
