const API_KEY = "pk.eyJ1Ijoic2VuZHZlcm9uaSIsImEiOiJjazgxdjBkbjUwYmJ1M2ZwZzN6MGM3eXgxIn0.FXs-04eDQg-O2c0PdBYXpA";


var myMap = L.map("plotname", {
    center: [45.52, -122.67],
    zoom: 13
  });

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

  