'use strict';

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.info('Aplicativo aberto!');
});

client.on('message', message => {
    if (command === 'olá') {
        message.channel.send('mundo');
    }
});

client.login('ODU3NDE5ODY3ODI0MTkzNTQ2.YNPUeg.jYGqcwy28Td-jHdOvGMU89xL5sk');