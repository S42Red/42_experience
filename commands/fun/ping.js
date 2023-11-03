const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Partie de Ping-Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
		await wait(2000);
		await interaction.editReply('Ping again !');
		await wait(2000);
		await interaction.editReply('Pong again !');
		await interaction.followUp("Ce message s'autodétruira dans 5 secondes");
		await wait(5000);
		await interaction.deleteReply();
	},
};