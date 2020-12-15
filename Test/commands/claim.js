const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {

  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");  
     

    var botEmbed = new discord.MessageEmbed()
   
    
    .setTitle('Claim')
    .setColor("#f00c0c")
    .setTimestamp()
    .setDescription("TEST")
    
   
    var channel = message.member.guild.channels.cache.get("761879667124600842");

    if (!channel) return

    channel.send(botEmbed);
  
}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}

