const{ Client, IntentsBitsField} = require('discord.js');

const client = new Client({ 
    intents: [
        IntentsBitsField.Flags.Guilds,
        IntentsBitsField.Flags.GuildMessages,
        IntentsBitsField.Flags.GuildMembers,
        IntentsBitsField.Flags.MesssageContent,
    ] 
});

client.login(
    "MTIzNzUxNjcwMTE4MTAyMjMxOQ.GzhNOl.UxNBkw0JTmyqrTJH_JdCwnRWfk3DA36XGRLNQc"
);