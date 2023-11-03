const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secretping')
		.setDescription('Secret !'),
	async execute(interaction) {
		//await interaction.reply({ content: 'Secret Pong !', ephemeral: true });
		await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply('Secret Pong !');
	},
};