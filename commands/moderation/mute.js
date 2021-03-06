const Discord = require("discord.js");

module.exports = {
	name: "mute",
	description: "Mute an user.",
  permissions: "KICK_MEMBERS",
	execute(message, args) {
    let mutedRole = message.guild.roles.cache.get("843644501469298738");
    let user = message.mentions.members.first();
    if (!user) {
      let targetEmbed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setDescription("Por favor menciona al usuario que quieres silenciar.");
      return message.channel.send(targetEmbed);
    }
    if (user.id === message.author.id) {
      let sameidEmbed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setDescription("¡No puedes silenciarte a ti mismo!");
      return message.channel.send(sameidEmbed);
    }
    if (user.roles.cache.has("843644501469298738")) {
      let alreadyEmbed = new Discord.MessageEmbed()
        .setColor("#FFFF00")
        .setDescription("El usuario ya esta silenciado.");
      return message.channel.send(alreadyEmbed);
    }
    let muteEmbed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setTitle("**:mute: ¡USUARIO SILENCIADO! :mute:**")
      .setDescription(`El usuario ${user} ha sido silenciado.
      **ID:** ${user.id}`)
      .addField("Moderador", `${message.author.tag}`, false)
      .setTimestamp();
    message.channel.send(muteEmbed);
    user.roles.add(mutedRole);
	},
};