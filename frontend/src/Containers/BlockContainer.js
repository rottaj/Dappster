import React from 'react';
import Web3 from 'web3';
import Block from '../Components/Block';
import io from 'socket.io-client';
var socket = io("http://localhost:8080", {
  withCredentials: false,
})
export default class BlockContainer extends React.Component {
    
    state = {
        blocks: []
    }

    connectToSocket = () => {
        socket.on("connection", () => {
          console.log("connected to back-end")
        })
        setInterval(() => {
            socket.emit("request.block")
            socket.on("receive.block", (response) => {
                console.log("receive.block", response.blockData.number)
                
            })
        }, 5000)

    }


    render() {
        return (
            <div>
                Block Container
                {this.connectToSocket()}
                <Block blockNumber={1} blockMiner={2}/>
            </div>
        )
    }
}