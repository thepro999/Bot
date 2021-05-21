module.exports = {
    name: "8ball",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')

        let pregunta = args.join(" ")

        if (!pregunta) return message.channel.send(
            new MessageEmbed()
            .setDescription("> **`❎` | You have to write something**")
            .setColor("#0CCBFF")
        )

        var preguntas = ["Yes", "No", "Mea by", "Probably", "Sure", "I think not"] 
        let random = preguntas[Math.floor(Math.random()*preguntas.length)]

        message.channel.send(
            new MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription("> **`❓` | "+message.author.username+" question**")
            .addField("**`👤` | "+message.author.username+" question:**", "> **`"+pregunta+"`**")
            .addField("**`💬` | My answer is:**", "> **`"+random+"`**")
            .setColor("#0CCBFF")
        )
    }
}