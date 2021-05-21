module.exports = {
    name: "ping",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let ping = Math.floor(message.client.ws.ping)

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("> **`🏓` | Pong**")
            .addField("**`📡` | Ping:**", "> **`"+ping+"`**")
            .setColor("#0CCBFF")
        )
    }
}