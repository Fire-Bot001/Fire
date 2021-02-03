module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission d\'utiliser cette commande.')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Tu dois indiquer un nombre de messages à supprimer.')
        if (count > 99) return message.channel.send('À cause des limites définies par Discord, je ne peux pas supprimer plus de 99 messages')
        if (count < 1) return message.channel.send('Je peux supprimer au minimum 1 message')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`${size - 1} messages ont été supprimés !`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'clear',
    guildOnly: true
}