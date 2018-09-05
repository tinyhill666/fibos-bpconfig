var config = {
    "p2p_peer_address": [
        "10.10.0.108:10100",
        "10.10.0.108:10200",
        "10.10.0.229:10100",
        "10.10.0.229:10200",
        "10.10.0.54:10100",
        "10.10.0.54:10200",
        "10.10.0.243:10100",
        "10.10.0.243:10200",
        "se-p2p.fibos.io:9870",
        "sl-p2p.fibos.io:9870",
        "to-p2p.fibos.io:9870",
        "ca-p2p.fibos.io:9870",
        "ln-p2p.fibos.io:9870",
        "va-p2p.fibos.io:9870",
        "seed.bitze.site:9870",
        "p2p-mainnet.fibos123.com:9977",
        "p2p-mainnet.fibos123.com:9977",
        "seed.fibos.rocks:10100",
        "seed-mainnet.fibscan.io:9103",
        "p2p.mainnet.fibos.me:80",
        "p2p.foshenzhenbp.com:9877",
        "p2p.eoschina.me:10300",
        "fibos-p2p.slowmist.io:9870",
        "fibos.qubitfund.com:9870"
    ],
    "config_dir": "./config",
    "data_dir": "./data",
    "producer-name": "",
    "public-key": "",
    "private-key": "",
    "parameter": {
        "genesis-json": "./genesis.json",
        "delete-all-blocks": true
    }
}

var fibos = require('fibos');
fibos.config_dir = config.config_dir;
fibos.data_dir = config.data_dir;

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": "0.0.0.0:8888"
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9876",
	"p2p-peer-address": config.p2p_peer_address
});

fibos.load("producer", {
	'producer-name': config["producer-name"],
	'private-key': JSON.stringify([config["public-key"], config["private-key"]])
});

fibos.load("chain", config.parameter);
fibos.load("chain_api");
fibos.enableJSContract = false;

fibos.start();