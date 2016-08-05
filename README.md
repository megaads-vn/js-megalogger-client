# javascript megalogger client
#With nodejs
##Installation:
```
 npm install megalogger
```


##Usage:

```javascript
var megalogger = require('megalogger');

 // your apiKey
 var apiKey = 'asefas_efjhj-afsd64sf';

 // Log
 var dataLog = [{data: "Message test"}];

 // level for log include: info, debug, warning, error, critical 
 var level = 'info';
 // push log
megalogger.log(apiKey, dataLog, level, 'source');
 
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
 // Log
 var dataLog = [{data: "Message test"}];
 // level for log include: info, debug, warning, error, critical 
 var level = 'info';
 // push log
 var Logger = new Megalogger(apiKey, 'source');
 Logger.log(dataLog, level);
 
```



