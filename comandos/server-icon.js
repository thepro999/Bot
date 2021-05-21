module.exports = {
    name: "server-icon",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let icono = message.guild.iconURL()

        if (!icono) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | This server has no icon**")
            .setColor("#0CCBFF")
        )

        message.channel.send(
            new MessageEmbed()
            .setDescription("> **`📸` | Icon of "+message.guild.name+"**")
            .setImage(message.guild.iconURL({ size: 1024, dynamic: true }))
            .setColor("#0CCBFF")
        )
    }
}