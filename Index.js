const Discord = require("discord.js") // Defininos Discord con el módulo discord.js
const intents = new Discord.Intents(32767) // Definimos los intents, explicado en el video
const client = new Discord.Client({ intents }) // Definimos client con los intents

client.on('messageCreate', async (message) => { // Abrimos el evento mensaje

    if(message.channel.type === 'dm') return; // Hacemos que el bot no responda a mensajes directos o privados
    if(message.author.bot) return; // Hacemos que el bot no responda a mensajes de otros bots

    let prefix = "." // Definimos el prefijo

    if(!message.content.startsWith(prefix)) return; // Hacemos que el bot no responda a mensajes que no empiecen con el prefijo

    const args = message.content.slice(prefix.length).trim().split(/ +/g); // Definimos args. Explicado en el video
    const command = args.shift().toLowerCase() // Definimos command, tambien explicado en el video

    if(command === "ping"){ // Hacemos un comando "ping"
        message.reply("Pong") // Hacemos la respuesta al comando
    }

})

client.login("Token") // Aqui pondremos el token de nuestro bot