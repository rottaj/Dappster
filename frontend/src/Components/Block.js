import { thisBooleanValue } from 'es-abstract';
import "./Block.css"
import React from 'react';

export default class Block extends React.Component {

    state = {
        blockData: this.props.blockData
    }

    render() {
        return (
            <div class="Block">
                {console.log("testing block fooooobar")}
                {"Block Data: " + this.state.blockData}
            </div>
        )
    }
}