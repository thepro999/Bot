module.exports = {
    name: "boobs",
    alias: [],
    async execute (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const NSFW = require('discord-nsfw')
        let nsfw = new NSFW()

        if (!message.channel.nsfw) return 

        let imagen = await nsfw.boobs()
        
        message.channel.send(
            new MessageEmbed()
            .setDescription("> **`🍑` | Nudes for you**")
            .setImage(imagen)
            .setColor("#0CCBFF")
        )
    }
}