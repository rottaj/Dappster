import React from 'react';
import './App.css';
import BlockContainer from './Containers/BlockContainer';
import io from 'socket.io-client';
var socket = io("http://localhost:8080", {
  withCredentials: false,
})


export default class App extends React.Component {

    connectToSocket = () => {
        socket.on("connection", () => {
          console.log("connected to back-end")
          socket.emit("request.block")
        })
        socket.on("receive.block", (response) => {
          console.log("receive.block", response)
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Dappster</h1>
                {console.log("socket", socket)}
                {this.connectToSocket()}
                <BlockContainer/>
            </div>
        )
    }
}
