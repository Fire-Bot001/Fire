const fs = require('fs')
 
module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (!client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon n\'est pas verrouillé.')
        client.db.lockedChannels.splice(client.db.lockedChannels.indexOf(channel.id), 1)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été déverrouillé !')
    },
    name: 'unlock',
    guildOnly: true
}