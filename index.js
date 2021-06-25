'use strict';

require('dotenv').config();

const { Client, MessageAttachment } = require('discord.js');
const client = new Client();

const DISCORD_BOT_SECRET = process.env.DISCORD_BOT_SECRET;
const PREFIX = process.env.PREFIX;

client.on('ready', () => {
    console.info('Aplicativo aberto!');
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const command = message.content.split(PREFIX)[1];

    if (command === 'image') {
        const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    } else if (command === 'code') {
        message.channel.send('const version = 1;', {code: 'js'});
    } else if (command === 'server') {
        message.channel.send(`Servidor: ${message.guild.name}\nMembros totais: ${message.guild.memberCount}`)
    } else if (command === 'user') {
        message.channel.send(`Seu nome: ${message.author.username}\nSeu ID: ${message.author.id}`)
    } else if (command === 'italico') {
        message.channel.send('*italico*');
    } else if (command === 'negrito') {
        message.channel.send('**negrito**');
    } else if (command === 'atividade') {
        message.client.user.setActivity('Jogando algum jogo', {type: 'PLAYING'});
    }

});

client.login(DISCORD_BOT_SECRET);