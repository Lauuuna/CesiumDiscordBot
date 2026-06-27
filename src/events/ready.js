const { Events, REST, Routes } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`[Ready] Bot logged in as ${client.user.tag}`);

        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
        
        const commands = client.commands.map(cmd => cmd.data.toJSON());

        try {
            console.log(`[REST] Started refreshing ${commands.length} application (/) commands...`);
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands }
            );
            console.log(`[REST] Successfully reloaded application (/) commands!`);
        } catch (error) {
            console.error(`[REST Error] Error registering commands:`, error);
        }
    },
};
