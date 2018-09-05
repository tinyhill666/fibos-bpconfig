var fibos = require('fibos');
var config = require('./config.json')

fibos.config_dir = config.config_dir;
fibos.data_dir = config.data_dir;

console.notice("config_dir:", fibos.config_dir);
console.notice("data_dir:", fibos.data_dir);

fibos.load("http", {
	"http-server-address": config.http_server_address
});

fibos.load("net", {
	"p2p-listen-endpoint": config.p2p_listen_endpoint,
	"p2p-peer-address": config.p2p_peer_address
});

fibos.load("producer", {
	'producer-name': config["producer-name"],
	'private-key': JSON.stringify([config["public-key"], config["private-key"]])
});

fibos.load("chain", {
	//"hard-replay": true,
});
fibos.load("chain_api");
fibos.enableJSContract = false;

fibos.start();