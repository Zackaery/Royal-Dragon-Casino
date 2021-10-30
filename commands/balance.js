module.exports = {
    name: "balance",
    description: "Check the user balance",
    execute(client, message, args, Discord, cmd, profileData) {
        const coinsEmoji = '<:Coins:903886538662887435>';
        const balanceEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setAuthor(`${message.author.username}'s current balance:`)
        .addFields(
            {name: 'Wallet:', value: `${coinsEmoji}${profileData.goldPieces}`},
            {name: 'Bank:', value: `${coinsEmoji}${profileData.bank}`}
        )
        message.channel.send({ embeds: [balanceEmbed] });
    }
}
