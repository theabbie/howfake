var express = require('express');
var app = express();
app.use(express.json());

app.post("/*", async function(req,res) {
var msg = req.body.queryResult.queryText;
res.json({
  "fulfillmentText": msg,
  "fulfillmentMessages": [
    {
      "card": {
        "title": "card title",
        "subtitle": "card text",
        "imageUri": "https://example.com/images/example.png",
        "buttons": [
          {
            "text": "button text",
            "postback": "https://example.com/path/for/end-user/to/follow"
          }
        ]
      }
    }
  ],
  "source": "example.com",
  "payload": {
    "google": {
      "expectUserResponse": true,
      "richResponse": {
        "items": [
          {
            "simpleResponse": {
              "textToSpeech": "this is a simple response"
            }
          }
        ]
      }
    },
    "facebook": {
      "text": msg
    },
    "slack": {
      "text": msg
    }
  },
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
