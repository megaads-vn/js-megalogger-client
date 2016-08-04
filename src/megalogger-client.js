if (typeof _MEGALOGGER == "undefined" || !_MEGALOGGER)
    _MEGALOGGER = {};
if (typeof _MEGALOGGER.logger == "undefined" || !_MEGALOGGER.logger)
    _MEGALOGGER.logger = {};

_MEGALOGGER.logger._pushLog = function (apiKey, dataLog, level, source) {
    var r = {};
    r.aud = apiKey;
    var token = _generateToken(r);
    var dataPush = _buildDataLog(token, dataLog, level, source);
    _doPush(dataPush);
    function _doPush(data) {
        var strData = JSON.stringify(data);
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

    function _buildDataLog(token, dataLog, level, source) {
        var d = new Date();
        var n = d.getTime();
        var retVal = {
            token: token,
            type: 'request',
            data: dataLog,
            level: level,
            meta: {
                language: 'Javascript'
            },
            time: n,
            source: source

        };
        return retVal;
    }

    function _generateToken(r) {
        var sClaim = JSON.stringify(r);
        var alg = 'HS512';
        var pHeader = {'alg': alg, 'typ': 'JWT'};
        var sHeader = JSON.stringify(pHeader);
        var key = 'megadev_secret';
        var sJWS = '';
        sJWS = KJUR.jws.JWS.sign(null, sHeader, sClaim, key);
        return sJWS;
    }

};




