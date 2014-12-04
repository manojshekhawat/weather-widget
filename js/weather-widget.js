// JavaScript Document for weather widget
// Author - Manoj Kumar Shekhawat
// http://www.manojshekhawat.com

(function ($) {
    $.fn.weatherWidget = function (options) {
	var element_id = $(this).attr('id');
	var options = $.extend({location: "22102", unit: "c", loadingtxt: "Loading..."}, options);
	$('#'+element_id).html('<div class="weatherLoading">'+options.loadingtxt+'</div>');
	$.ajax({
		type: "GET",
		url: 'http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%22'+options.location+'%22%20and%20u%3D%27'+options.unit+'%27&format=json',
		success : function(weather){
			response = weather;
			var img = (weather.query.results.channel.item.description).split('<br />');
			var location = (weather.query.results.channel.item.title).split('for');
			var wdata = '<h2>'+location[1].split('at')[0]+'</h2>'+
			'<div class="blk currtemp"><div class="temprature">'+weather.query.results.channel.item.condition.temp+'<sup>o</sup></div>'+
			'<div class="condition">'+img[0]+'<br />'+weather.query.results.channel.item.condition.text+'</div></div>'+
			'<ul class="forcast">';			
			$(weather.query.results.channel.item.forecast).each(function(){
				wdata += '<li><span>'+this.day+'</span>'+this.high+'<sup>o</sup> / '+this.low+'<sup>o</sup></li>';
			});			
			wdata+='</ul>';
			$('#'+element_id).html(wdata);
	  	}
	}); 
}
})(jQuery);
