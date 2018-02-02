// this program is not affiliated with discord in any way
// copyright (c) wipeautcrafter 2018

// on first run the bot will create a file called config.json
// in this file you need to put your prefix and your bot token

// on first run the bot will create a folder called commands
// in this folder you will store all your commands in a js file
// for example, help would be help.js

// on first run the bot will create a folder called events
// in this folder you will store all events as a js file
// these will run at a discord.js event
// for example, ready would be ready.js

module.exports = function() {
	// assign fs
	var fs = require('fs');

	// check if ran for the first time
	if(!(fs.existsSync("./commands") && fs.existsSync("./events") && fs.existsSync("./config.json"))) {
		fs.writeFileSync("./config.json", "{\n\t\"token\": \"your very long token here\",\n\t\"prefix\": \".\"\n}");
		fs.mkdirSync("./commands");
		fs.mkdirSync("./events");

		console.log("<!> created config.json, commands folder and events folder");
		console.log("<!> please fill in your bots token and the prefix in the config");
		console.log("<!> you can place all commands in a serperate js file in the folder commands");
		console.log("<!> you can place all events in a serperate js file in the folder events");
		process.exit();
	}

	// getting commands and events
	var commands = [];
	var events = [];

	// get commands from folder
	var files = fs.readdirSync("./commands");

	files.forEach(f => {
		var content = fs.readFileSync("./commands/"+f, "utf-8");
		commands.push({"name":f.split(".js")[0],"code":content});
	});

	// get events from folder
	var files = fs.readdirSync("./events");

	files.forEach(f => {
		var content = fs.readFileSync("./events/"+f, "utf-8");
		events.push({"name":f.split(".js")[0],"code":content});
	});


	// define variables for bot
	var discord = require('discord.js');
	var bot = client = new discord.Client();
	var config = cfg = require('./config.json');

	// save events to client
	events.forEach(e => {
		client.on(e.name, () => eval(e.code));
	});

	// create commands
	client.on("message", m => {
		if(!m.content.startsWith(cfg.prefix)) return;

		var message = msg = m;

		var command = cmd = m.content.split(" ")[0].replace(cfg.prefix, "");
		var args = m.content.split(" ").splice(1);

		commands.forEach(c => {
			if(cmd == c.name) eval(c.code);
		});
	});

	client.login(cfg.token);
};
