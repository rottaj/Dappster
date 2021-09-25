import React from 'react';
import Web3 from 'web3';
import Block from '../Components/Block';
export default class BlockContainer extends React.Component {
    
    state = {
        blocks: []
    }

    render() {
        return (
            <div>
                Block Container
                <Block blockNumber={1} blockMiner={2}/>
            </div>
        )
    }
}