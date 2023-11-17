
const { SlashCommandBuilder, PermissionFlagsBits, PermissionsBitField, ChannelType } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription('Créez un ticket pour contacter le staff')
    //.setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
    .setDMPermission(false),
  async execute(interaction) {
    await interaction.reply({ content: "Prise en compte de ta demande, chargement en cours...", ephemeral: true });

    try {
		await interaction.channel.parent.children.create({
        name: `Ticket de ${interaction.user.username}`,
        type: ChannelType.GuildText,
        permissionOverwrites: [
          {
            id: interaction.guild.id,
            deny: [PermissionsBitField.Flags.ViewChannel],
          },
          {
            id: interaction.user.id,
            allow: [PermissionsBitField.Flags.ViewChannel],
          },
        ],  
      });

      await interaction.editReply({ content: "Ta demande de contact a bien été reçue 📨\nUn salon a été créé pour discuter avec le staff !" });
    } catch (error) {
      console.log(error);
      await interaction.editReply({ content: "Nous rencontrons un bug, exceptionnellement tu peux mp un staff en lui précisant que tu n'as pas pu créer de ticket à cause des méchants développeurs du bot XD" });
    }
  },
};