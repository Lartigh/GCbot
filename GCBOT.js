var discord = require ("discord.js");
var synapse = require ("synaptic-master")
var bot = new discord.Client();
var versionNumber = "GCBot 0.0.1a";
var version = versionNumber;
var commands = "\r -commands \r -version";


bot.loginWithToken("[loginWithToken]");

bot.on("message", function(message)
{
  if(message.content == "GChelp")
  {
    bot.reply(message, commands)
  }
}
