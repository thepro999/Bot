module.exports = {
    name: "cookie",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let mencion = message.mentions.users.first()

        if (!mencion) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You have to mention someone**")
            .setColor("#0CCBFF")
        )

        if (mencion === client.user) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You can't use this command with me**")
            .setColor("#0CCBFF")
        )

        if (mencion === message.author) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You cannot use this command with you**")
            .setColor("#0CCBFF")
        )

        if (mencion.bot) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You cannot use this command with a bot**")
            .setColor("#0CCBFF")
        )

        let razon = args.slice(1).join(" ")

        if (!razon) {
            razon = "null"
        }

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(mencion.displayAvatarURL())
            .setDescription("> **`🍪` | "+mencion.username+", you have received a cookie**")
            .addField("**`👤` | Member:**", "> **`"+message.author.username+"`**")
            .addField("**`💬` | Reason:**", "> **`"+razon+"`**")
            .setColor("#0CCBFF")
        )
    }
}