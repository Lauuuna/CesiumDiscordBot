const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check Server Status'),
    async execute(interaction) {
        await interaction.reply({ 
            content: 'GDPS is in development. Stay tuned!', 
            ephemeral: false 
        });
    },
};
