module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(client, message, args, Discord) {
        const channel = '903817705793130506';
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Red team");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Blue team");
    
        const redTeamEmoji = '🔴';
        const blueTeamEmoji = '🔵';

        let reactionEmbed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a team to play on!')
        .setDescription('Choosing a team will allow you to interact with your teammates!\n\n'
            + `${redTeamEmoji} for Red team\n`
            + `${blueTeamEmoji} for Blue team`);

        let messageEmbed = await message.channel.send({embeds: [reactionEmbed]});
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(blueTeamEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
            
        });
    }

}