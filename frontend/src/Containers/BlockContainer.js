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

    componentDidMount() {
        socket.on("connection", () => {
          console.log("connected to back-end")
        })
        setInterval(() => {
            socket.emit("request.block")
            socket.on("receive.block", (response) => {
                console.log("receive.block", response.blockData.number)
                console.log("STATE BLOCKS", this.state.blocks)
                if (this.state.blocks.length != 0 ){
                    if (this.state.blocks[this.state.blocks.length-1].number != response.blockData.number) {
                        this.state.blocks.push(response.blockData)
                    }
                } else {
                    this.state.blocks.push(response.blockData)
                }
            })
        }, 30000)

    }

    render() {
        return (
            <div className="blockContainer">
                Dappster container
                <ul>
                {this.state.blocks.map((block) => <Block blockNumber={block}/>)}
                </ul>
            </div>
        )
    }
}