module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Tu dois mentionner le membre à unmute.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne  peux pas unmute le propriétaire du serveur.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas unmute ce membre')
        if (!member.manageable) return message.channel.send('Je ne pas unmute ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie.'
        const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
        if (!muteRole) return message.channel.send('Il n\'y a pas de muterole.')
        await member.roles.remove(muteRole)
        message.channel.send(`${member} a été unmute !`)
    },
    name: 'unmute',
    guildOnly: true
}