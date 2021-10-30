module.exports = {
    name: 'duel',
    description: "dueling command",
    execute(client, message, args, Discord) {
        const whipEmoji = '<:whip:903896785439830036>';
        const hostEmoji = '<:host:903893611635175465>';
        const memberEmoji = '<:member:903893625556062238>';
        const nohpEmoji = '<:0hp:903893331044622356>';
        const fullhpEmoji = '<:100hp:903893386929520720>';
        const duelEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle(`${whipEmoji} Staking Duel ${whipEmoji}` )
        .addField(`${message.author.username} is dueling Host_Name.`, '\u200B', false)
        .addField(`**Host_Name**      ${message.author.username}`, `${fullhpEmoji}     ${nohpEmoji}`, false)
        .addField(`${hostEmoji}     ${memberEmoji}`, `Hitpoints: 99     Hitpoints: 0`, false)
        message.channel.send({ embeds: [duelEmbed] });
    }
}