const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) => {
    let profile = await profileModel.create({
        userId: member.id,
        serverID: member.guild.id,
        goldPieces: 1000,
        bank: 0
    });
    profile.save();
};
