var ball;
var database;
var position;
var canvas;
var backgroundImage, gameState = 0, playerCount;
var form,player,game;

function setup(){
    database = firebase.database();
    createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
}