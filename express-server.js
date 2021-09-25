//const socketIO = require("socket.io");
var app = require('express')();
const cors = require("cors");
const Web3 = require("web3");
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});
web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
app.use(cors({
  origin: "*"
}));
http.listen(8080, () => {
    console.log("Listening on port 8080")
})

web3.eth.getBlockNumber().then(function(res) {
    web3.eth.getBlock(res).then(function(blockData) {
      console.log(blockData)
    })
})
console.log("Socket running on port 8080!")
io.on("connection", (socket) => {
    console.log("Client connected!");
    socket.emit("connection", null);
    socket.on("request.block", (req, res) => {
      console.log("nothing")

      web3.eth.getBlockNumber().then(function(res) {
        web3.eth.getBlock(res).then(function(blockData) {
        console.log(blockData)
        socket.emit("receive.block", {blockData: blockData})
        })
      })
    })
})
