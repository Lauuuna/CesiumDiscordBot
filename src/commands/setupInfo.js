const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-info')
        .setDescription('Sending a language selection message for information.'),
    async execute(interaction) {
        const requiredRoleId = '1436366658888273980';
        if (!interaction.member.roles.cache.has(requiredRoleId)) {
            return interaction.reply({ 
                content: 'Insufficient permissions.', 
                ephemeral: true 
            });
        }

        const channelId = '1520521431589589023';
        const { Routes } = require('discord.js');

        try {
            await interaction.client.rest.post(
                Routes.channelMessages(channelId),
                {
                    body: {
                        flags: 32768,
                        components: [
                            {
                                type: 17,
                                accent_color: 2829617,
                                components: [
                                    {
                                        type: 10,
                                        content: "### ℹ️ Информация о сервере / Server Information\nПожалуйста, выберите язык, чтобы прочитать информацию.\nPlease select a language to read the information."
                                    },
                                    {
                                        type: 1,
                                        components: [
                                            {
                                                type: 2,
                                                style: 2,
                                                label: "Русский",
                                                emoji: { name: "🇷🇺" },
                                                custom_id: "info_ru"
                                            },
                                            {
                                                type: 2,
                                                style: 2,
                                                label: "English",
                                                emoji: { name: "🇬🇧" },
                                                custom_id: "info_en"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            );
            await interaction.reply({ content: 'Info published.', ephemeral: true });
        } catch (error) {
            console.error('[REST Error]', error);
            await interaction.reply({ content: 'Error sending message.', ephemeral: true });
        }
    },
};
