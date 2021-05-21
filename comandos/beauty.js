module.exports = {
    name: "beauty",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let random = Math.floor(Math.random()*100)

        let usuario = message.mentions.members.first() || message.member 

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(usuario.user.displayAvatarURL())
            .setDescription("> **`💖` | "+usuario.user.username+" beauty percentage**")
            .addField("**`💖` | "+usuario.user.username+" beauty percentage:**", "> **`"+random+"%`**")
            .setColor("#0CCBFF")
        )
    }
}