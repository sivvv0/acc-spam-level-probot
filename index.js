const { Client } = require('discord.js-selfbot-v13');


const client = new Client({ checkUpdate: false });

const config = require(`${process.cwd()}/config.json`);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.login(config.Token);
