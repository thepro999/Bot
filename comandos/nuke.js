module.exports = {
    name: "nuke",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | I don't have permissions**")
            .setColor("#0CCBFF")
        )

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You don't have permissions**")
            .setColor("#0CCBFF")
        )

        let posicion = message.channel.position 

        message.channel.clone().then((canal) => {
            message.channel.delete()

            canal.setPosition(posicion)

            canal.send(
                new MessageEmbed()
                .setDescription("> **`🤯` | Nuked channel**")
                .setImage("https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif")
                .setColor("#0CCBFF")
            )
        })
    }
}