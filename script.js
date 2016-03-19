$(function(){
	var links = ["freecodecamp", "riotgamesturkish", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
	for(u in links)
	twitch(links[u]);
});

function twitch(user){
	$.getJSON("https://api.twitch.tv/kraken/streams/"+user+"?callback=?", function(data) {
	 //console.log(data);
	 da(data._links.channel);
	});
};

function da(data){
	var img;
	$.getJSON(data, function(data) {
		if(data.logo==null)
			img = "";
		else
			img = "<img src='"+data.logo+"'>";

		if(data.partner)
			$('.resultados').append("<div class='blocos blocoOn'><a href='"+data.url+"'><div class='imagem'>"+img+"</div><div class='text'><div class='title'>"+data.display_name+"</div><div class='about'>"+data.status+"</div></div></a></div>");
		else
			$('.resultados').append("<div class='blocos blocoOff'><div class='imagem'>"+img+"</div></div>");
	});
};