import React from 'react';
import './App.css';
import BlockContainer from './Containers/BlockContainer';
import io from 'socket.io-client';
var socket = io("http://localhost:8080", {
  withCredentials: false,
})


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Dappster</h1>
                <BlockContainer/>
            </div>
        )
    }
}
