const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-rules')
        .setDescription('Sending a language selection message for the rules.'),
    async execute(interaction) {
        const requiredRoleId = '1436366658888273980';
        if (!interaction.member.roles.cache.has(requiredRoleId)) {
            return interaction.reply({ 
                content: 'Insufficient permissions.', 
                ephemeral: true 
            });
        }

        const channelId = '1292825984952827944';
        const channel = interaction.client.channels.cache.get(channelId);

        if (!channel) {
            return interaction.reply({ content: 'Channel not found.', ephemeral: true });
        }

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
                                        content: "### 📜 Правила сервера / Server Rules\nПожалуйста, выберите язык, чтобы прочитать правила.\nPlease select a language to read the rules."
                                    },
                                    {
                                        type: 1,
                                        components: [
                                            {
                                                type: 2,
                                                style: 2,
                                                label: "Русский",
                                                emoji: { name: "🇷🇺" },
                                                custom_id: "rules_ru"
                                            },
                                            {
                                                type: 2,
                                                style: 2,
                                                label: "English",
                                                emoji: { name: "🇬🇧" },
                                                custom_id: "rules_en"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            );
            await interaction.reply({ content: 'Rules published.', ephemeral: true });
        } catch (error) {
            console.error('[REST Error]', error);
            await interaction.reply({ content: 'Error sending message.', ephemeral: true });
        }
    },
};
