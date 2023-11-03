const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription("Afficher les infos de l'utilisateur."),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`Cette commande à été utilisée par ${interaction.user.username}, qui à rejoins le ${interaction.member.joinedAt}.`);
	},
};