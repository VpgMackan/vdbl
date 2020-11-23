const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function (tokan, status, prefix) {
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity(status, {
      type: "PLAYING",
    });
  });

  client.login(tokan);
};

exports.add = function (name, output) {
  client.on('message', msg => {
    if (msg.content === name) {
      msg.channel.send(output)
    }
  });
}