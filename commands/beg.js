const profileModel = require("../models/profileSchema");
module.exports = {
    name: "beg",
    description: "beg for gold pieces",
    async execute(client, message, args, Discord, cmd, profileData) {
        const coinsEmoji = '<:Coins:903886538662887435>';
        const randomNumber = Math.floor(Math.random() * 500) + 1;
        const response = await profileModel.findOneAndUpdate(
            {
                userID: message.author.id,
            },
            {
                $inc: {
                    goldPieces: randomNumber,
                },
            }
        );
        const begEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setAuthor(`${message.author.username}`)
        .addFields(
            {name: 'Amount won:', value: `You begged and received ${coinsEmoji}${randomNumber}`}
        )
        message.channel.send({ embeds: [begEmbed] });
    }
}