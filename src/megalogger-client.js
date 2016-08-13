var Class = function (methods) {
    var klass = function () {
        this.initialize.apply(this, arguments);
    };

    for (var property in methods) {
        klass.prototype[property] = methods[property];
    }

    if (!klass.prototype.initialize)
        klass.prototype.initialize = function () {
        };

    return klass;
};

var Megalogger = Class({
    initialize: function (initData) {
        this.apiKey = initData.apiKey;
        this.source = initData.source;
    },
    log: function (data, level) {
        var r = {};
        r.aud = this.apiKey;
        r.exp = KJUR.jws.IntDate.getNow() + 30;
        var sClaim = JSON.stringify(r);
        var alg = 'HS512';
        var pHeader = {'alg': alg, 'typ': 'JWT'};
        var sHeader = JSON.stringify(pHeader);
        var key = 'megalogger';
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
            source: this.source

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
            console.log(e.message);
        }
    }
});