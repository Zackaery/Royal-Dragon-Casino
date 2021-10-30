module.exports = {
    name: 'toss',
    description: 'Coin Flip command',
    execute(client, message, args, Discord) {
            function doRandHT() {
      var rand = ['Heads!','Tails!'];
      
      return rand[Math.floor(Math.random()*rand.length)];
      }
      
       const tossEmbed = {
        "author": 'Coin Flip',
        "title": `And the winner is...`,
        "description": doRandHT(),
        "color": 7584788,
      };

        if(message.member.roles.cache.has('903580245838426142')){
            message.channel.send({ embeds: [tossEmbed] });
        } else {
            message.channel.send("You don't have sufficient privelages to initiate this command.");
        }
        
    }
}