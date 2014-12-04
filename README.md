weather-widget
==============

Weather Widget 1.0

====

USAGE

Include below css file in your ```<head>``` section 

1. ```<link href="css/weather-widget.css" rel="stylesheet" type="text/css" /></code>```

In options you can define location code provided by yahoo weather, unit 'c' for Celcius and 'f' for , loadingtxt to show some text while data is loading. Few sample location codes are as below:-

New Delhi, IN - INXX0096
Gurgaon, IN - INXX0342
London, UK - UKXX0085
McLean, VA - 22102
New York, USA - USNY0996

Include below JS files and code snipt just above the closing body tag

1. ```<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>```
2. ```<script type="text/javascript" src="js/weather-widget.js"></script>```

```javascript
  <script>
  $(document).ready(function(e) {
    $('#weatherWidget').weatherWidget({
    		location: '22102',
    		unit: 'f',
    		loadingtxt: 'Please wait while loading...'
  	 });
  });
  </script>
```
Create a div in you body section where you want to include Widget

`<div class="weatherWidget" id="weatherWidget"></div>`

Enjoy :)
