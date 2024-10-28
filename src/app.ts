const express = require("express");
const { Server } = require("socket.io");
const { socket } = require("socket.io");
const http = require("http");
const bodyParser = require("body-parser");

// Making an express instance
const app = express();

// Middleware
app.use(express.json()); // for parsing JSON documents
app.use(bodyParser.urlencoded({ extended: true })); // for parsing URL-encoded data

// Initializing the server
const server = http.createServer(app);
const io = new Server(server);
