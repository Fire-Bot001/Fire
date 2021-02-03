const fs = require('fs')
 
module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const say = args.slice(0).join(' ')
        message.channel.send(`${say}`)
        message.channel.bulkDelete(1)
    },
    name: 's',
    guildOnly: true
}