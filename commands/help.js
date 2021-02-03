const moment = require('moment'),
    Discord = require('discord.js')
 
moment.locale('fr')

module.exports = {
    run: async (message, args) => {
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`__**FireBot: Aide**__ \n\n **Bonjour, je suis FireBot, voici mes commandes:** \n\n /ban [user]: banni un membre \n\n /tempban [user] [time]: banni temporairement un membre \n\n /mute [user]: mute un membre du serveur \n\n /tempmute [user] [time]: mute temporairement un membre du serveur \n\n /unmute [user]: rend la parole à un membre du serveur \n\n /warn [user]: averti un membre du serveur \n\n /unwarn [user] [number of warn]: enlève un avertissement à un membre du serveur \n\n /infractions [user]: affiche les infractions d\'un membre du serveur \n\n /kick [user]: expulse un membre du serveur \n\n /say ou /s [message]: permet de parler en étant le bot \n\n /lock: Bloque l\'envoi de messages dans le salon \n\n /unlock: Débloque l\'envoie de messages dans le salon \n\n /clear [nombre de messages]: clear un certain nombre de messages \n\n /fireshield: affiche l\'état du FireShield \n\n /scan: [member] scan un membre et vérifie si il est dangereux \n\n /help: affiche cette aide \n\n **Au revoir**`))},
    name: 'help'
}