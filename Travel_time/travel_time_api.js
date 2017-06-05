/**
 * Created by Louis on 4/13/17.
 */

// API Functions
function encodeData(data) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}

// API Keys and URLs
// LTA
var key_lta = 'mAkXNom4RDaHb58BgQyh5w==';
var url_lta = 'http://datamall2.mytransport.sg/ltaodataservice/EstTravelTimes/';

//  Bing
var key_bing = "Avah46_M-gfFeQ3P1w09Qq1ElAV9ZEHFDm9b8JRCRa8qPP5uVn21hDqAPVJgV4i_";

var uri  =  'http://dev.virtualearth.net/'; // Resource URL
var path  =  'REST/v1/Routes?/';


// Make the URL

var data = {'AccountKey': key_lta, 'accept': 'application/json'};
var data_bing = {'wayPoint.0':'Clementi, Singapore',
                'wayPoint.1' : 'Haw Par Villa, Singapore',
                'routeAttributes':'routePath',
                'key':key_bing
}

const request = require('request');

request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

// URL formatting
var querystring = encodeData(data_bing);

console.log(querystring)

// URL retriever
var xhr = new XMLHttpRequest();
xhr.open("GET", uri+ path + querystring, false);  // retrieves information from the specified source

// GET POST PUT DELETE
xhr.send()

console.log(xhr.status)
console.log(xhr.statusText)





/*
//Width and height
var w = 500;
var h = 300;
var padding = 30;

//Dynamic, random dataset
var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

//Create scale functions
var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[0]; })])
    .range([padding, w - padding * 2]);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
    .range([h - padding, padding]);

var rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
    .range([2, 5]);

//Create SVG element
var body = d3.select("body");
var transit = body
    .style("color", "green") // make the body green
    .transition()
    .style("color", "red"); // then transition to red

var svg = body.append("svg")
    .attr("width", w)
    .attr("height", h);

// Axis
var xAxis = d3.axisBottom();
xAxis.scale(xScale);
xAxis.ticks(10,"s");

var yAxis = d3.axisLeft();
yAxis.scale(yScale);
yAxis.ticks(5,"s");


// Generating SVG
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return xScale(d[0]);
    })
    .attr("cy", function(d) {
        return yScale(d[1]);
    })
    .attr("r", function(d) {
        return rScale(d[1]);
    });




svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + padding + ",0)")
    .call(yAxis);


*/