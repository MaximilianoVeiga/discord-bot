'use strict';

require('dotenv').config();

const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

const DISCORD_BOT_SECRET = process.env.DISCORD_BOT_SECRET;
const PREFIX = process.env.PREFIX;

client.on('ready', () => {
    console.info('Aplicativo aberto!');
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const command = message.content.split(PREFIX)[1];

});

client.login(DISCORD_BOT_SECRET);