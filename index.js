const { Client } = require('discord.js-selfbot-v13');


const client = new Client({ checkUpdate: false });

const config = require(`${process.cwd()}/config.json`);


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('error', (error) => {
  console.error('An error occurred:', error);
});

client.on('ready', () => {
  let channel = client.channels.cache.get(config.Channel)
  setInterval(function() {
    var s1vann = Math.floor(Math.random() * sivv.length)
    channel.send(sivv[s1vann])
  }, 43000) // 40000+ No banned
}) //s1vann//  40000- if you get banned im not responsible
const sivv = ['ProBot is a highly configurable, multipurpose bot that offers features like image greeting', 'detailed logs, social commands, moderation, self-assignable roles', 'social media notifications and protection for your server.', 'Welcome to the ProBot Docs!', 'Dashboard Your One-Stop-Shop for Server Management', 'Frequently Asked Questions', 'Custom Welcome and Goodbye Messages for Engaging Discord Server Management', 'MODULES Self-Assignable Roles', 'Easily create embeds for your server!', 'Level System', '1', '1525', '2', 'hwav12', '3', 'wkab1627', 'r4', 'wis18263', 'd5', '@2/6', 'add **s1vann**', 'y6', '@62?gab', '-s1', 's-s1', '99d423', 'd8-bass', 'sets the channel where Carl-bot will log things such as message deletions, name changes, role updates and a lot more which you can find later on in this documentation.', 'This guide will cover everything you need to do to get started with the basics of what carlbot offers.', 'Use the Dashboard to configure the bot easily without the need to use any commands.', 'Additionally, the bot uses converters which makes specifying roles, ', 'This argument is optional so you can either use foo or bar, or don’t specify it at all', 'Our documentation provides comprehensive explanations on how to use and configure each feature of ProBot, as well as troubleshooting tips for any issues that may arise.', 'Easily navigate to a specific module by clicking its name in the sidebar on the left. Each module has its own configuration page.', '<foos...> This argument is mandatory and you can specify more than one', 'Each category of commands has their own page which can be found on the sidebar.', 'All ProBot commands have a dedicated page with usage examples and information. Check out our commands page for more details.', 'Step by Step to invite ProBot']

client.on('messageCreate', async (message) => {
  if (message.author.bot || !message.guild) return;

  const prefix = '='; // Replace with your preferred prefix
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Restrict commands to one specific user
  if (message.author.id !== message.author.id) {
    return message.reply('You are not authorized to use this command.');
  }

  if (command === 'avatar') {
    const user = message.mentions.users.first() || message.author;
    return message.reply(`${user.tag}'s avatar: ${user.displayAvatarURL({ size: 1024, dynamic: true })}`);
  }

  if (command === 'servericon') {
    if (!message.guild.iconURL()) {
      return message.reply('This server does not have an icon.');
    }
    return message.reply(`${message.guild.name}'s icon: ${message.guild.iconURL({ size: 1024, dynamic: true })}`);
  }

  if (command === 'uptime') {
    const uptime = client.uptime; // In milliseconds
    const seconds = Math.floor((uptime / 1000) % 60);
    const minutes = Math.floor((uptime / (1000 * 60)) % 60);
    const hours = Math.floor((uptime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));

    return message.reply(`Uptime: ${days}d ${hours}h ${minutes}m ${seconds}s`);
  }

  if (command === 'ping') {
    const msg = await message.reply('Pinging...');
    const latency = msg.createdTimestamp - message.createdTimestamp;
    const apiLatency = Math.round(client.ws.ping);

    return msg.edit(`Pong! Latency: ${latency}ms | API Latency: ${apiLatency}ms`);
  }
});

client.login('YOUR_BOT_TOKEN');




client.login(config.Token || process.env.token);
