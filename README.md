<h1>Dappster!</h1>
--------------------------------------------------------------------
<h3>Intro</h3>
A simple Dapp for exploring your private network.

Built with Geth, Truffle, and React.

Named: Dappster, not because Napster, but because Dappster is cool.
--------------------------------------------------------------------
<h3>Network instructions </h3>
Start node: 

geth --datadir ./nodes/00 --networkid 8989 --nat extip:127.0.0.1 --port 30304 --allow-insecure-unloc
k --rpccorsdomain "*" --rpc --rpcapi "miner, eth, web3, personal, admin, net" --rpcport 8545 --rpcaddr 127.0.0.l

Connect to node: 

geth attach http://127.0.0.1:8545

------------------------------------------
