import { thisBooleanValue } from 'es-abstract';
import React from 'react';

export default class Block extends React.Component {

    state = {
        blockData: this.props.blockData
    }

    render() {
        return (
            <div>
                {"Block Data: " + this.state.blockData}
            </div>
        )
    }
}