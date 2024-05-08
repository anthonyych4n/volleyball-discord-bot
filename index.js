import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

import{
    Client,
    ButtonBuilder,
    ButtonStyle,
    ModalBuilder,
    TextInputBuilder,
    TextInputBuilder
} from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ],
});

client.login(process.env.DISCORD_TOKEN);

const btn = new ButtonBuilder()
    .setCustomId('penis')
    .setLabel('i love penis')
    .setStyle(ButtonStyle.Primary)




client.on('messageCreate', async (message) => {
    console.log(message.content);

    if (!message.author.bot){
        message.author.send({
            content: 'Hello, I am a bot!',
            components: [btn]
        })
    }
});

client.on('interactionCreate', async interaction => {

    if (interaction.customId === 'penis'){
        await interaction.reply({
            content: 'Mom says hi back!',
            ephemeral: true
        })
    }
})