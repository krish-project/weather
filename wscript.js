function load() {
	var mydata = JSON.parse(data);

	document.getElementById("p").innerHTML = mydata[0].city;
	document.getElementById("c").innerHTML =  mydata[0].C;
	document.getElementById("f").innerHTML =  mydata[0].F;
	alert(mydata[0].city);
	//document.getElementById("forienheit").innerHTML =  mydata[0].age;

}


var weather;
var api_path = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apikey = '&appid=aeb9aeb113930e875f7ff78e75ff2514';
var units = '&units=metric';
var input;

//funtion init() {
//	var button = select('#submit');
//	var input = select('#city')
//	button.mousePressed(wCondition);
//	
//}

//funtion wCondition() {
//	var url = api_path + input.value() + apikey + units;
//	
//	// LoadJSON("city.json", gotData); //in case of realtime inplace of json file calling locally we will call variable "url"
//}

//function gotData(data){
//	weather = data;
//}