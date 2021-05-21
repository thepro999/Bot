const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const fs = require('fs')

function presence() {
    
    client.user.setPresence({

        status: "online",

        activity: {
            name: "🏠 | "+client.guilds.cache.size+" servers, 👤 | "+client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)+" users",
            type: "WATCHING"
        }
    })
}

client.on("ready", () => {
    console.log("Estoy listo!")
    presence()
})

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`)
    client.commands.set(command.name, command)
}

client.on("message", (message) => {
    let prefix = "!"
    
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))

    if (cmd) {
        cmd.execute(client, message, args)
    }
})

client.on("guildCreate", (guild) => {
    client.channels.cache.get("844589138518605864").send(
        new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .setDescription("> **`💖` | I have joined a new server**")
        .addField("**`👤` | Members:**", "> **`"+guild.memberCount+"`**")
        .addField("**`💬` | Name:**", "> **`"+guild.name+"`**")
        .setColor("#0CCBFF")
    )
})

client.on("guildDelete", (guild) => {
    client.channels.cache.get("844589138518605864").send(
        new Discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL())
        .setDescription("> **`💔` | I have abandoned a server**")
        .addField("**`👤` | Members:**", "> **`"+guild.memberCount+"`**")
        .addField("**`💬` | Name:**", "> **`"+guild.name+"`**")
        .setColor("#0CCBFF")
    )
})

client.login(config.token)
