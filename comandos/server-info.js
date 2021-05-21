module.exports = {
    name: "server-info",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let serverIcon = message.guild.iconURL()

        if (!serverIcon) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`🏠` | "+message.guild.name+" information**")
            .addField("**`✨` | Boosts:**", "> **`"+message.guild.premiumSubscriptionCount+"`**", true)
            .addField("**`🎁` | Boost level:**", "> **`"+message.guild.premiumTier+"`**", true)
            .addField("**`📟` | Channels:**", "> **`"+message.guild.channels.cache.size+"`**", true)
            .addField("**`📅` | Creation:**", "> **`"+message.guild.createdAt.toLocaleDateString()+"`**", true)
            .addField("**`😀` | Emojis:**", "> **`"+message.guild.emojis.cache.size+"`**", true)
            .addField("**`👤` | Members:**", "> **`"+message.guild.memberCount+"`**", true)
            .addField("**`👑` | Owner:**", "> **`"+message.guild.owner.user.username+"`**", true)
            .addField("**`🌍` | Region:**", "> **`"+message.guild.region+"`**", true)
            .addField("**`✨` | Roles:**", "> **`"+message.guild.roles.cache.size+"`**", true)
            .addField("**`🆔` | Server ID:**", "> **`"+message.guild.id+"`**", true)
            .addField("**`🔰` | Verification level:**", "> **`"+message.guild.verificationLevel+"`**", true)
            .setColor("#0CCBFF")
        )

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(serverIcon)
            .setDescription("> **`🏠` | "+message.guild.name+" information**")
            .addField("**`✨` | Boosts:**", "> **`"+message.guild.premiumSubscriptionCount+"`**", true)
            .addField("**`🎁` | Boost level:**", "> **`"+message.guild.premiumTier+"`**", true)
            .addField("**`📟` | Channels:**", "> **`"+message.guild.channels.cache.size+"`**", true)
            .addField("**`📅` | Creation:**", "> **`"+message.guild.createdAt.toLocaleDateString()+"`**", true)
            .addField("**`😀` | Emojis:**", "> **`"+message.guild.emojis.cache.size+"`**", true)
            .addField("**`👤` | Members:**", "> **`"+message.guild.memberCount+"`**", true)
            .addField("**`👑` | Owner:**", "> **`"+message.guild.owner.user.username+"`**", true)
            .addField("**`🌍` | Region:**", "> **`"+message.guild.region+"`**", true)
            .addField("**`✨` | Roles:**", "> **`"+message.guild.roles.cache.size+"`**", true)
            .addField("**`🆔` | Server ID:**", "> **`"+message.guild.id+"`**", true)
            .addField("**`🔰` | Verification level:**", "> **`"+message.guild.verificationLevel+"`**", true)
            .setColor("#0CCBFF")
        )
    }
}