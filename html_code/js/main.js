/**
 * main call system
 * OTT
 */

var jq = jQuery.noConflict();
//var latOrigen;
//var longOrigen;	

function initialize() {
	
	var mapProp = {
			center:new google.maps.LatLng(20.972066, -101.092829),
			zoom:5,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	
	//var point = new google.maps.LatLng(20.693422807,103.419893682);
	
	
	
	//map.addOverlay(new google.maps.Marker(point));
	
	/*
	var marker = new google.maps.Marker({
	      position: point,
	      map: map,
	      title: 'Hello World!'
	  });
	 */ 
	
}

google.maps.event.addDomListener(window, 'load', initialize);

jq(document).ready(function(){
	
});
	

function doAction(ord){
var lat;
var long;
var tag;
var ordinal;
	
	jq.ajax({
		   method: "GET",
		   url:	"php/getInnerCoordinates.php",
		   async: false,
		   data: {ordinal: ord}
		})
		.done(function(msg){
			result = msg.split("-");
		    ordinal = result[0];
			tag = result[1];
			lat = result[2];
			long = result[3];
		});
	jq("#campusTag").text(tag);
	
	
	var mapProp = {
			center:new google.maps.LatLng(lat, -1*long),
			zoom:8,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	
	
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition);
		
		var point2 = new google.maps.LatLng(latOrigen, longOrigen);
				
		
		//map.addOverlay(new google.maps.Marker(point));
		
		
		var marker2 = new google.maps.Marker({
		      position: point2,
		      map: map,
		      title: 'Punto'
		  });
		marker2.setMap(map);
		
				
    }else{
        alert('TU NAVEGADOR NO SOPORTA GEOLOCALIZACION');
    }
	
	//map.addOverlay(new google.maps.Marker(point));
	
	
	var marker = new google.maps.Marker({
	      position: point,
	      map: map,
	      title: 'Punto'
	  });
	 
	marker.setMap(map);
	
	
}

function doOuterAction(ord){
var lat;
var long;
var tag;
var ordinal;	
	
	jq.ajax({
		   method: "GET",
		   url:	"php/getCoordinates.php",
		   async: false,
		   data: {ordinal: ord}
		})
		.done(function(msg){
			result = msg.split("-");
			ordinal = result[0];
			tag = result[1];
			lat = result[2];
			long = result[3];
	    });
	jq("#campusTag").text(tag);
	
	
	var mapProp = {
			center:new google.maps.LatLng(lat, -1*long),
			zoom:8,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);

	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getPosition);
		
		var point2 = new google.maps.LatLng(latOrigen, longOrigen);
				
		
		//map.addOverlay(new google.maps.Marker(point));
		
		
		var marker2 = new google.maps.Marker({
		      position: point2,
		      map: map,
		      title: 'Punto'
		  });
		marker2.setMap(map);
		
				
    }else{
        alert('TU NAVEGADOR NO SOPORTA GEOLOCALIZACION');
    }
	
	
	var point = new google.maps.LatLng(lat, -1*long);
		
	
	//map.addOverlay(new google.maps.Marker(point));
	
	
	var marker = new google.maps.Marker({
	      position: point,
	      map: map,
	      title: 'Punto'
	  });
	marker.setMap(map);
	
	drawRoute(point,point2);
	

}

function getPosition(position){
	latOrigen = position.coords.latitude; 
	longOrigen = position.coords.longitude;
}

//ultima funcion
function drawRoute(point1,point2){
	var directionsDisplay;
	var directionsService = new google.maps.DirectionsService();
	
	var mapProp = {
			center:point1,
			zoom:8,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
	
	var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
	directionsDisplay = new google.maps.DirectionsRenderer();
	
	
	var start = point1;
	  var end = point2;
	  var request = {
	      origin:start,
	      destination:end,
	      travelMode: google.maps.TravelMode.DRIVING
	  };
	  directionsService.route(request, function(response, status) {
	    if (status == google.maps.DirectionsStatus.OK) {
	      directionsDisplay.setDirections(response);
	    }
	  });
			
	directionsDisplay.setMap(map);	
}
