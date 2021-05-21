module.exports = {
    name: "random-dog",
    alias: [],
    execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const got = require('got')
        got("https://random.dog/woof.json").then((res) => {
            message.channel.send(
                new MessageEmbed()
                .setDescription("> **`🐶` | Random dog for you**")
                .setImage(JSON.parse(res.body).url)
                .setColor("#0CCBFF")
            )
        })
    }
}