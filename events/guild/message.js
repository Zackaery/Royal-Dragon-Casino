require("dotenv").config();
const profileModel = require("../../models/profileSchema");
//create cooldowns map
const cooldowns = new Map();
module.exports = async (Discord, client, message) => {
    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

     let profileData;
     try{
         profileData = await profileModel.findOne({ userID: message.author.id });
         if(!profileData){
             let profile = await profileModel.create({
                 userID: message.author.id,
                 serverID: message.guild.id,
                 goldPieces: 1000,
                 bank: 0,
             });
             profile.save();
         }
     } catch (err) {
         console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if(command) command.execute(client, message, args, Discord, cmd, profileData);
}