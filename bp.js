var fibos = require('fibos');

fibos.config_dir = "./config";
fibos.data_dir = "./data";

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": "0.0.0.0:8888"
});

fibos.load("net", {
	"p2p-listen-endpoint": "0.0.0.0:9876",
	"p2p-peer-address": [
		"se-p2p.fibos.io:9870",
		"sl-p2p.fibos.io:9870",
		"to-p2p.fibos.io:9870",
		"ca-p2p.fibos.io:9870",
		"ln-p2p.fibos.io:9870",
		"va-p2p.fibos.io:9870"
	]
});

var config = {
	"producer-name": "",
	"public-key": "",
	"private-key": ""
};

fibos.load("producer", {
	'producer-name': config["producer-name"],
	'private-key': JSON.stringify([config["public-key"], config["private-key"]])
});

fibos.load("chain", {
	//"hard-replay": true,
	//"genesis-json": "./genesis.json",
	//"delete-all-blocks": true
});
fibos.load("chain_api");

fibos.start();