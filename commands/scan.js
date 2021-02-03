const moment = require('moment'),
    Discord = require('discord.js')
 
moment.locale('fr')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Tu dois mentionner le membre à scanner.')
        if (!client.db.banned[member.id]) return message.channel.send(new Discord.MessageEmbed()
        .setDescription(`__**FireShield**__ \n\n **Analyse du membre terminée !** \n\n Membre: ${member} \n\n **Résultat de l'analyse:** :white_check_mark: Ce membre ne représente aucun danger connu \n\n Une erreur ? Veuillez contacter le créateur du bot.`))
        if (client.db.banned[member.id])
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`__**FireShield**__ \n\n **Analyse du membre terminée !** \n\n Membre: ${member} \n\n **Résultat de l'analyse:** :x: Ce membre représente un danger selon notre base de donnée. Pour protéger votre serveur, nous l'avons expulser \n\n Une erreur ? Veuillez contacter le créateur du bot.`))
        await member.kick()
    },
    name: 'scan',
    guildOnly: true
}