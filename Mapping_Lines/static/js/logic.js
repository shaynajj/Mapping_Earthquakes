// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// Change the map center to somewhere between LAX and SFO; also increase zoom
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];

// Coordinates for each point to be used in the polyline.
// Add 2 more airport stops
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Change the line color to yello
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// Change the style to satellite-streets-v11
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);