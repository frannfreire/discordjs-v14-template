const { EmbedBuilder } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Returns websocket latency",

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
      .setColor("Purple")
      .setTitle("🏓 Pong!")
      .setDescription(`Latency : ${client.ws.ping}ms`)
      .setTimestamp()
      .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL()}` });
    interaction.reply({ embeds: [embed] });
  },
};
