const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Kullanıcı hakkında bilgi verir.'),
	async execute(interaction) {
		await interaction.reply(`Bu komut ${interaction.user.username} tarafından çalıştırıldı, ${interaction.user.username} bu sunucuya ${interaction.member.joinedAt} tarihinde giriş yaptı.`);
	},
};