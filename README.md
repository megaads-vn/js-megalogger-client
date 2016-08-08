# javascript megalogger client
#With nodejs
##Installation:
```
 npm install megalogger
```


##Usage:

```javascript
var Megalogger = require('megalogger');

 // your apiKey
 var apiKey = 'asefas_efjhj-afsd64sf';
 var source = 'Your source';
 var initData = {
            apiKey: apiKey,
            source: source
        };
 // Log
 var dataLog = [{data: "Message test"}];

 // level for log include: info, debug, warning, error, critical 
 var level = 'info';
 
 // init instance of class Megalogger
 var logger = new Megalogger(initData);

 // push log
 logger.log(dataLog, level);
 
```

#With pure javascript
##Installation:
**add script below into header tag in your project**
```
 <script language="JavaScript" type="text/javascript" src="src/jwt-lib.min.js"></script>
 <script language="JavaScript" type="text/javascript" src="src/megalogger-client.js"></script>
```


##Usage:
**Add the code below into your function**

```javascript
 // your apiKey
 var apiKey = 'asefas_efjhj-afsd64sf';
 var source = 'Your source';
 var initData = {
    apiKey: apiKey,
    source: source
 };
 // Log
 var dataLog = [{data: "Message test"}];
 // level for log include: info, debug, warning, error, critical 
 var level = 'info';
 // push log
 var Logger = new Megalogger(initData);
 Logger.log(dataLog, level);
 
```



