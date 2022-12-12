var express = require('express'),
    axios = require('axios'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// eslint-disable-next-line no-unused-vars
app.post('/sign-in', (req, res, next) => {
    const body = req.body;
    axios.post("https://api.leminnow.com/captcha/v1/cropped/validate", {
        private_key: "YOUR_PRIVATE_KEY", // https://help.leminnow.com/knowledge/how-does-lemin-verify-a-captcha-answer
        challenge_id: body["challenge_id"],
        answer: body["answer"],
    }).then((response) => {
        res.status(200).json(response.data);
    }).catch((err) => {
        res.status(200).json(err.response.data);
    });
});

var server = app.listen(3005, function () {
    console.log('Listening on port ' + server.address().port);
});
