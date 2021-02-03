const moment = require('moment'),
    Discord = require('discord.js')
 
moment.locale('fr')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        message.channel.send(new Discord.MessageEmbed()
            .setDescription(`__**FireShield**__ \n\n **Tout est en règle :white_check_mark:!**\n\n FireBot n'a rien détecté d'anormal et les fonctionnalités de modération sont activées.`))},
    name: 'fireshield',
    guildOnly: true
}