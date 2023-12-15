const { Client } = require('discord.js-selfbot-v13');


const client = new Client({ checkUpdate: false });

const config = require(`${process.cwd()}/config.json`);


client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', () => {
  let channel = client.channels.cache.get(config.Channel)
  setInterval(function() {
    var s1vann = Math.floor(Math.random() * sivv.length)
    channel.send(sivv[s1vann])
  }, 43000) // 40000+ No banned
}) //s1vann//  40000- if you get banned im not responsible
const sivv = ['ProBot is a highly configurable, multipurpose bot that offers features like image greeting', 'detailed logs, social commands, moderation, self-assignable roles', 'social media notifications and protection for your server.', 'Welcome to the ProBot Docs!', 'Dashboard Your One-Stop-Shop for Server Management', 'Frequently Asked Questions', 'Custom Welcome and Goodbye Messages for Engaging Discord Server Management', 'MODULES Self-Assignable Roles', 'Easily create embeds for your server!', 'Level System', '1', '1525', '2', 'hwav12', '3', 'wkab1627', 'r4', 'wis18263', 'd5', '@2/6', 'add **s1vann**', 'y6', '@62?gab', '-s1', 's-s1', '99d423', 'd8-bass', 'sets the channel where Carl-bot will log things such as message deletions, name changes, role updates and a lot more which you can find later on in this documentation.', 'This guide will cover everything you need to do to get started with the basics of what carlbot offers.', 'Use the Dashboard to configure the bot easily without the need to use any commands.', 'Additionally, the bot uses converters which makes specifying roles, ', 'This argument is optional so you can either use foo or bar, or don’t specify it at all', 'Our documentation provides comprehensive explanations on how to use and configure each feature of ProBot, as well as troubleshooting tips for any issues that may arise.', 'Easily navigate to a specific module by clicking its name in the sidebar on the left. Each module has its own configuration page.', '<foos...> This argument is mandatory and you can specify more than one', 'Each category of commands has their own page which can be found on the sidebar.', 'All ProBot commands have a dedicated page with usage examples and information. Check out our commands page for more details.', 'Step by Step to invite ProBot']


client.login(config.Token || process.env.token);
