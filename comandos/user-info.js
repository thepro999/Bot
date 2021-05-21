module.exports = {
    name: "user-info",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let usuario = message.mentions.members.first() || message.member 

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(usuario.user.displayAvatarURL())
            .setDescription("> **`👤` | "+usuario.user.username+" information**")
            .addField("**`📅` | Creation:**", "> **`"+usuario.user.createdAt.toLocaleDateString()+"`**", true)
            .addField("**`🧧` | Discriminator:**", "> **`#"+usuario.user.discriminator+"`**", true)
            .addField("**`🎨` | Hex color role:**", "> **`"+usuario.displayHexColor+"`**", true)
            .addField("**`💬` | Nickname:**", "> **`"+usuario.displayName+"`**", true)
            .addField("**`👑` | Permissions:**", "> **`"+usuario.permissions+"`**", true)
            .addField("**`📟` | Status:**", "> **`"+usuario.user.presence.status+"`**", true)
            .addField("**`🚪` | Union:**", "> **`"+usuario.joinedAt.toLocaleDateString()+"`**", true)
            .addField("**`🆔` | User ID:**", "> **`"+usuario.user.id+"`**", true)
            .setColor("#0CCBFF")
        )
    }
}