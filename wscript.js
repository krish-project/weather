// function load() {
//	var mydata = JSON.parse(data);

//	document.getElementById("p").innerHTML = mydata[0].city;
//	document.getElementById("c").innerHTML =  mydata[0].C;
//	document.getElementById("f").innerHTML =  mydata[0].F;
//	alert(mydata[0].city);
	//document.getElementById("forienheit").innerHTML =  mydata[0].age;

//}


//var weather;
//var api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';
//var apikey = '&appid=aeb9aeb113930e875f7ff78e75ff2514';
//var units = '&units=metric';


//funtion setup() {
//	var button = select('submit');
//	var input = select('city');
//}

function wCondition() {
	//var url = api_path + input.value('city') + apikey + units;
	//LoadJSON(url, gotData); 
	var api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';
	var apikey = '&appid=aeb9aeb113930e875f7ff78e75ff2514';
	var units = '&units=metric';
	var location = document.getElementById("city").value;
	var url = api_path + location + apikey + units;

		if (location && location != ''){
				location = location.trim()
				getData(url)
			}
			else {
				alert('Please enter the city name')
			}

}
		
		function getData (url, cityName, appId, units) {
			var request = $.ajax({
				url: url,
				dataType: "jsonp",
				data: {q: cityName, appid: appId, units: units},				
				jsonpCallback: "fetchData",
				type: "GET"
			}).fail(function(error){
				console.error(error)
				alert('Error sending request')
			})
		}
		function fetchData (forecast) {
			console.log(forecast)
			alert(forecast.name)
			alert(forecast.sys.country)
			alert(forecast.sys.id)
			alert(forecast.main.temp)
			alert(forecast.main.humidity)
			alert(forecast.weather.icon)
			alert(forecast.weather.description)
			alert(forecast.wind.speed)
			alert(forecast.time)
			
			
			var dis = "<p>" + "Current location: " + forecast.name + " " + forecast.sys.country + "</p>";
			var temp = "Current Temp: " + "<span class='large-temp'>" + forecast.main.temp + "<span class='small-temp'>&#8451;</span>" + "</span>";
			var humidity = "<p>" + forecast.main.humidity + "</p>";
			var wind = "<p>" + forecast.wind.speed + "</p>";
			
			alert(dis)
			alert(temp)
			alert(humidity)
			alert(wind)
			
			document.getElementById("date").innerHTML = Date();
			document.getElementById("weather").innerHTML = dis;
			document.getElementById("humidity").innerHTML = humidity;
			document.getElementById("temp").innerHTML = temp;
			document.getElementById("wind").innerHTML = wind;
			
			/*var html = '',
			  cityName = forecast.name,
				country = forecast.country

			html += '<h3> Weather Forecast for ' + cityName + ', ' + country + '</h3>'
			forecast.list.forEach(function(forecastEntry, index, list){
				html += '<p>' + forecastEntry.dt_txt + ': ' + forecastEntry.main.temp + '</p>'*/


			<!--$('#log').html(html)-->
		}



//function gotData(data) {
//	weather = data;
//}

//function display() {
//	var temp = weather.main.temp;
//	var temp = weather.main.humidity;
	
//}