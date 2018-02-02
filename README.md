# libraries
Here you can find all my small libraries, free to use, as long as you give credit.


# loop.js
loop.js is a library that makes using loops in your projects easier.
It is only `250 Bytes` so you do not need to worry about speed.

usage:
```js
loop(<function>, <delay>, [amount], [callback]);
```

# httpget.js
httpget.js is an easy way to make http get requests in nodejs.
It is small, fast, compact and easy-to-use, compared to the normal http get.

usage:
```js
var get = require('./httpget.js');

// http get without arguments
get("https://icanhazdadjoke.com", "/", function(res) => {
   // do things with the result
});

// http get with arguments
get("https://your-site.com", "getname.php?name=john&lastname=doe", function(res) => {
   // do things with the result
});
```

# discordbot.js
discordbot.js is a library that makes running discord bots really easy.

First you need to install discord.js, to do this open a command window in your folder and type:
```bash
npm install --save discord.js
```

You also need to download this library in any way you like.

Now that you are all set, you are ready to create your own discord bot.
To use this library you just need to require it, and run the function like this:
```js
require("./discordbot.js")();
```

If it is the first time you have opened it it will setup all the folders and files for you.
Now that everything is set up, it is time to create some super awesome commands!

To create a command you need to create a new .js file in commands, with the name being the command.
For example, if you want to create the help command you will call it ``help.js``.
In the .js file you can use all enviroment variables that are also in a normal discord bot.
These include ``client/bot, config/cfg, message,msg, command/cmd, args and more``.

Handling events goes pretty much the same way, all you do is put a js file in the events folder.
If you want to handle the event ready, you create the javascript file ``ready.js``.
Of course you also have acces to enviroment variables such as ``client/bot, config/cfg and more``.

In the end the files should look something like this:
```
my awesome discord bot
|- node_modules (where nodejs saves all the libraries in)
|- bot.js (or whatever you name it)
|- discordbot.js (the library)
|- config.json (the config where your prefix and token is in)
|- commands (all your commands)
   |- testcommand.js
   |- help.js
|- events (all your events)
   |- ready.js
   |- typingStart.js
