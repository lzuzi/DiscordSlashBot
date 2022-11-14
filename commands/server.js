const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Sunucu hakkında bilgi verir.'),
	async execute(interaction) {
		await interaction.reply(`Sunucu adı: ${interaction.guild.name} & Üye sayısı: ${interaction.guild.memberCount}`);
	},
};