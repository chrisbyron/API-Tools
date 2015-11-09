function getAsJSON(jsonUrl){
var Httpreq = new XMLHttpRequest(); // instantiate new request
Httpreq.open("GET",jsonUrl,false);
Httpreq.send(null);
return JSON.parse(Httpreq.responseText); // Parse string as object and return obj.
}
