module.exports = {
    name: 'info',
    description: "Info on our gambling server.",
    execute(client, message, args, Discord) {
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle("How to start gambling!")
        .setAuthor('Royal Dragon Casino')
        .addFields(
            {name: 'Adding funds', value: 'Contact any host to add funds to your wallet, and get immediate access to our games!.'},
            {name: 'Playing Games', value: 'We currently only have one available game; Coin Flip. Use the !toss command to play now!.'}
        )
        message.channel.send({ embeds: [infoEmbed] });
    }
}