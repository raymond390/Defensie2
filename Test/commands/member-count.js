const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    module.exports = (client) => {
        const channelId = '760836476102639652'
      
        const updateMembers = (guild) => {
          const channel = guild.channels.cache.get(channelId)
          channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
        }
      
        client.on('guildMemberAdd', (member) => updateMembers(member.guild))
        client.on('guildMemberRemove', (member) => updateMembers(member.guild))
      
        const guild = client.guilds.cache.get('464316540490088448')
        updateMembers(guild)
      }

}

module.exports.help = {
    name: "hallo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}