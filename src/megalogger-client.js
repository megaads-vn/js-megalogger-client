var MegaLogger = Class.create();
MegaLogger.prototype = {
    initialize: function (apiKey, source) {
        this.apiKey = apiKey;
        this.source = source;
    },
    log: function (data, level) {
        var r = {};
        r.aud = this.apiKey;
        var sClaim = JSON.stringify(r);
        var alg = 'HS512';
        var pHeader = {'alg': alg, 'typ': 'JWT'};
        var sHeader = JSON.stringify(pHeader);
        var key = 'megadev_secret';
        var token = '';
        token = KJUR.jws.JWS.sign(null, sHeader, sClaim, key);
        var d = new Date();
        var n = d.getTime();
        var dataLog = {
            token: token,
            type: 'request',
            data: data,
            level: level,
            meta: {
                language: 'Javascript'
            },
            time: n,
            source: source

        };
        var strData = JSON.stringify(dataLog);
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("POST"
                    , "http://192.168.1.172:8161/api/message?destination=queue://logger&enable_cors_headers=true&enable_http_auth=true"
                    , true);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log('Response:' + xhr.responseText);
                }
            };
            xhr.send(strData);

        } catch (e) {
            alert(e.message);
        }
    }
};




