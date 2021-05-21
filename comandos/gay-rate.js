module.exports = {
    name: "gay-rate",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let random = Math.floor(Math.random()*100)

        let usuario = message.mentions.members.first() || message.member 

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(usuario.user.displayAvatarURL())
            .setDescription("> **`🌈` | "+usuario.user.username+" gay percentage**")
            .addField("**`🌈` | "+usuario.user.username+" gay percentage:**", "> **`"+random+"%`**")
            .setColor("#0CCBFF")
        )
    }
}