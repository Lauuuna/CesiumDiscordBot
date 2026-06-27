const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction, client) {
        if (interaction.isButton()) {
            const { ruComponentsV2, enComponentsV2 } = require('../utils/rulesData');
            const { ruInfoComponentsV2, enInfoComponentsV2 } = require('../utils/infoData');
            const { Routes } = require('discord.js');

            let componentsToSend = null;
            
            if (interaction.customId === 'rules_ru') componentsToSend = ruComponentsV2;
            if (interaction.customId === 'rules_en') componentsToSend = enComponentsV2;
            
            if (interaction.customId === 'info_ru') componentsToSend = ruInfoComponentsV2;
            if (interaction.customId === 'info_en') componentsToSend = enInfoComponentsV2;

            if (componentsToSend) {
                try {
                    await client.rest.post(
                        Routes.interactionCallback(interaction.id, interaction.token),
                        {
                            body: {
                                type: 4,
                                data: {
                                    flags: 32768 | 64,
                                    components: componentsToSend
                                }
                            }
                        }
                    );
                } catch (error) {
                    console.error('[REST Error] Error sending V2 components:', error);
                }
                return;
            }
        }

        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`[Error] The command ${interaction.commandName} was not found.`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`[Error] An error occurred while executing the command ${interaction.commandName}:`, error);
            
            const errorMessage = { content: 'Something went wrong while running this command.', ephemeral: true };
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp(errorMessage);
            } else {
                await interaction.reply(errorMessage);
            }
        }
    },
};
