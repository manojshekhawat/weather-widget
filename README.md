weather-widget
==============

Weather Widget 1.0

====

USAGE

Include below files in your ```<head>``` section 

1. ```<link href="css/widget.css" rel="stylesheet" type="text/css" /></code>```
2. ```<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>```
3. ```<script type="text/javascript" src="js/widget.js"></script>```

In options you can define location in (City name, Country Code) format. ie - Gurgaon, IN
```javascript
  <script>
    $(document).ready(function(e) {
      $('#weatherWidget').widget({
        location: 'McLean, VA'
  	  });
  });
  </script>
```
Create a div in you body section where you want to include Widget

`<div class="weatherWidget" id="weatherWidget"></div>`

Enjoy :)
