const fs = require('fs')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà verrouillé.')
        client.db.lockedChannels.push(channel.id)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été verrouillé !')
    },
    name: 'lock',
    guildOnly: true
}