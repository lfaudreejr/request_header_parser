var express = require('express'),
    app = express();


app.get('/', function(req, res) {
    var ipAddress = req.ip,
        language = req.headers['accept-language'],
        userAgent = req.headers['user-agent'].match(/\((.+\d)\)/),
        userOS = userAgent[0].substring(1, userAgent[0].length-1);
        resObj = {
            ipaddress: ipAddress,
            language: language.split(',')[0],
            software: userOS
        };
        console.log(ipAddress);
    res.send(JSON.stringify(resObj));
});


app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("Listening...");
});