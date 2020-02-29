var express = require('express');
var app = express();
app.use(express.json());
var axios = require("axios");

app.post("/*", async function(req,res) {
var msg = req.body.queryResult.queryText;
res.json({
  "fulfillmentText": msg,
    "outputContexts": [
    {
      "name": "projects/project-id/agent/sessions/session-id/contexts/context-name",
      "lifespanCount": 5,
      "parameters": {
        "param-name": "param-value"
      }
    }
  ],
  "followupEventInput": {
    "name": "event name",
    "languageCode": "en-US",
    "parameters": {
      "param-name": "param-value"
    }
  }
})
})

app.listen(process.env.PORT);
