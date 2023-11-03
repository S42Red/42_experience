const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Afficher les infos du serveur.'),
	async execute(interaction) {
		return interaction.reply(`Nom du serveur : ${interaction.guild.name}\nNombre de membres : ${interaction.guild.memberCount}`);
	},
};