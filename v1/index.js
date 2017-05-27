var express = require('express'),
    app = express();


app.get('/', function(req, res) {
    var ipAddress = req.ip,
        language = req.headers['accept-language'],
        userAgent = req.headers['user-agent'],
        resObj = {
            ipaddress: ipAddress,
            language: language,
            software: userAgent
        };

    res.send(JSON.stringify(resObj));
});


app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Listening...");
});