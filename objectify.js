function GetAsJSON(jsonUrl){
var Httpreq = new XMLHttpRequest(); // instantiate new request
Httpreq.open("GET",jsonUrl,false);
Httpreq.send(null);
return JSON.parse(Httpreq.responseText); 
}
