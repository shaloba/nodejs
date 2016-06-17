/**
 * Created by shaloba on 11/06/2016.
 */
var fs = require('fs');
var http = require('http');
var connect = require('connect');
var app = connect();

function home_page(request ,response){
    console.log('home page');
}

function profile(request ,response){
    console.log('profile');
}
app.use('/profile', profile);
app.use('/home_page', home_page);

http.createServer(app).listen(8001);
