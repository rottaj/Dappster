<h1>Dappster!</h1>
-------------------------------------------------------------------------------------------------------
<h3>Named: Dappster, not because Napster, but because Dappster is cool.</h3>
-------------------------------------------------------------------------------------------------------
<h3>Intro</h3>
Dapp skeleton to build from. <br></br>
Built with Geth, Truffle, and React.

------------------------------------------------------------------------------------------------------------------------------------------

<h3>Network instructions </h3>
Start node: 

geth --datadir ./nodes/00 --networkid 8989 --nat extip:127.0.0.1 --port 30304 --allow-insecure-unlock --rpccorsdomain "*" --rpc --rpcapi "miner, eth, web3, personal, admin, net" --rpcport 8545 --rpcaddr 127.0.0.l

Connect to node: 

geth attach http://127.0.0.1:8545

-------------------------------------------------------------------------------------------------------------------------------------------
<h3> Frontend instructions <h3>
Start frontend:

<cd frontend
npm start

<h3> Start express server </h3>

node express-server.js

<h3> Block Viewer </h3>
<h4> Returns recently mined block </h4>

![Screenshot](https://github.com/rottaj/Dappster/blob/master/block_sc.png?raw=true)
-------------------------------------------------------------------------------------------------------------------------------------------
<h3> Problems </h3>

If all nodes are shutdown, the data is destroyed. nodes won't be running forever... this is problematic.
<br></br>
---> Add a mongo instance to save node info? <br></br>
-------------------------------------------------------------------------------------------------------------------------------------------
<h3>Rules <h3>
<p>
Rule #1 Don't talk about fight club.

Rule #2 Don't talk about fight club.

Rule #3 Every commit = shot of bourbon.

Rule #4 Repeat rule #3 until Dapp or bourbon is finished.
</p>


