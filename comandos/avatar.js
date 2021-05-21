module.exports = {
    name: "avatar",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let miembro = message.mentions.members.first() || message.member

        message.channel.send(
            new MessageEmbed()
            .setDescription("> **`📸` | Avatar of "+miembro.user.username+"**")
            .setImage(miembro.user.displayAvatarURL({ size: 1024, dynamic: true }))
            .setColor("#0CCBFF")
        )
    }
}