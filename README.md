# javascript megalogger client

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
 var apiKey = 'asefas_efjhj-afsd64sf_megaToken';
 // Log
 var dataLog = [{data: "Message test"}];
 // level for log include: info, debug, warning, error, critical 
 var level = 'info';
 // push log
 _MEGALOGGER.clientLib._pushLog(apiKey, dataLog, level, 'test_log');
 
```



