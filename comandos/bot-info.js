module.exports = {
    name: "bot-info",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(client.user.avatarURL())
            .setDescription("> **`🤖` | "+client.user.username+" infomation**")
            .addField("**`📟` | Channels:**", "> **`"+client.channels.cache.size+"`**", true)
            .addField("**`📅` | Creation:**", "> **`"+client.user.createdAt.toLocaleDateString()+"`**", true)
            .addField("**`😀` | Emojis:**", "> **`"+client.emojis.cache.size+"`**", true)
            .addField("**`👑` | Owner:**", "> **`VBDev | xTheNoobx#8845`**", true)
            .addField("**`🏠` | Servers:**", "> **`"+client.guilds.cache.size+"`**", true)
            .addField("**`👤` | Users:**", "> **`"+client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)+"`**", true)
            .setColor("#0CCBFF")
        )
    }
}