var fibos = require('fibos');
var config = require('./config.json')

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

fibos.load("chain",config.parameter);
fibos.load("chain_api");
fibos.enableJSContract = false;

fibos.start();