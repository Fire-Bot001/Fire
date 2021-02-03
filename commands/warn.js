const fs = require('fs')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Tu dois mentionner le membre à warn.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne peux pas warn le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas warn ce membre.')
        const reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send('Tu dois indiquer une raison.')
        if (!client.db.warns[member.id]) client.db.warns[member.id] = []
        client.db.warns[member.id].unshift({
            reason,
            date: Date.now(),
            mod: message.author.id
        })
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send(`${member} a été averti pour la raison suivante: ${reason}. Attention: 3 avertissements = bannissement temporaire !`)
    },
    name: 'warn',
    guildOnly: true
}