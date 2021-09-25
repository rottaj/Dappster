<h1>Dappster!</h1>
-----------------------------------------------------------------------
<h3>Intro</h3>
Dapp skeleton to build from.
Built with Geth, Truffle, and React.

Named: Dappster, not because Napster, but because Dappster is cool.
------------------------------------------------------------------------
<h3>Network instructions </h3>
Start node: 

geth --datadir ./nodes/00 --networkid 8989 --nat extip:127.0.0.1 --port 30304 --allow-insecure-unlock --rpccorsdomain "*" --rpc --rpcapi "miner, eth, web3, personal, admin, net" --rpcport 8545 --rpcaddr 127.0.0.l

Connect to node: 

geth attach http://127.0.0.1:8545

------------------------------------------------------------------------
<h3> Frontend instructions <h3>
Start frontend:

<cd frontend
npm start

<h3> Start express server </h3>

node express-server.js

-------------------------------------------------------------------------
<h3> Block Viewer </h3>
<h4> Returns recently mined block </h4>

{
  difficulty: '134615',
    extraData: '0xd983010a03846765746888676f312e31362e338664617277696e',
    gasLimit: 8000000,
    gasUsed: 0,
    hash: '0x403542cd44328b63a0637da88e7074eb7a631604c9c5d5852166144351c9cde0',
    logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    miner: '0xF5Ce81a1f70122c7ab7886d06F233F09AB2B32f4',
    mixHash: '0x8aafb3f85050fc767e625bd9ce216579dfc804fa517492164eb7ce08dcea5741',
    nonce: '0x4fb7feaa128fffa6',
    number: 56,
    parentHash: '0xe1facc7a80225dee1457001440e65cf758becf6a50df154e136d74676713f545',
    receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
    size: 537,
    stateRoot: '0x4cb1e500d50dce7fb5476a7aabc94fddc15203e8e2d1b47624da7d25eef4abb3',
    timestamp: 1632592366,
    totalDifficulty: '7438877',
    transactions: [],
    transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    uncles: []
}

------------------------------------------------------------------------------------------------------------
<h3> Problems </h3>

If all nodes are shutdown, the data is destroyed.. This poses the obvious problem for locally run networks, as these nodes won't be running forever.
---> Maybe add a mongo instance to save data?
    --> If mongo is added, we could do a lot more.. Adding accounts, transactions, etc.
------------------------------------------------------------------------------------------------------------
<h3>Rules <h3>
<p>
Rule #1 Don't talk about fight club.

Rule #2 Don't talk about fight club.

Rule #3 Every commit = shot of bourbon.

Rule #4 Repeat rule #3 until Dapp or bourbon is finished.
</p>


