module.exports = async (client) =>{
    const guild = client.guilds.cache.get('903148409299554334');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('903588419391873034');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 60000);

}