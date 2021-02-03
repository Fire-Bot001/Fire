module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Tu dois mentionner le membre à exclure.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne peux pas exclure le propriétaire du serveur')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas exclure ce membre.')
        if (!member.kickable) return message.channel.send('Je ne peux pas exclure ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été exclu !`)
    },
    name: 'kick',
    guildOnly: true
}