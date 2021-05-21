module.exports = {
    name: "help",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        if (!message.channel.nsfw) return message.channel.send(
            new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("> **`📋` | "+client.user.username+" commands list**")
            .addField("**`👑` | Administration:**", "> **`nuke`**")
            .addField("**`🎮` | Fun:**", "> **`8ball` `beauty` `cookie` `gay-rate` `random-dog`**")
            .addField("**`📄` | Information:**", "> **`bot-info` `server-info` `user-info`**")
            .addField("**`🍑` | NSFW:**", "> **`NSFW channel`**")
            .addField("**`📲` | Support:**", "> **`ping`**")
            .addField("**`🏅` | Utility:**", "> **`avatar` `server-icon`**")
            .setColor("#0CCBFF")
        )

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("> **`📋` | "+client.user.username+" commands list**")
            .addField("**`👑` | Administration:**", "> **`nuke`**")
            .addField("**`🎮` | Fun:**", "> **`8ball` `beauty` `cookie` `gay-rate` `random-dog`**")
            .addField("**`📄` | Information:**", "> **`bot-info` `server-info` `user-info`**")
            .addField("**`🍑` | NSFW:**", "> **`4k` `boobs` `pussy`**")
            .addField("**`📲` | Support:**", "> **`ping`**")
            .addField("**`🏅` | Utility:**", "> **`avatar` `server-icon`**")
            .setColor("#0CCBFF")
        )
    }
}