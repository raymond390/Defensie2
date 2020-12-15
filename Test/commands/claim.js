const discord = require("discord.js");

module.exports.run = async (client, message, argument) => {
    if (!message.member.hasPermission("KICK_MEMBER")) return message.reply("Jij kan dit niet doen");   
     

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Claim')
    .setDescription("Je hebt deze ticket geclaimt")

    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('')
    .setTimestamp()
    .setFooter('Defensie', '');


    var channel = message.member.guild.channels.cache.get("761879667124600842");

    if (!channel) return
    

    channel.send(botEmbed);

  
}

module.exports.help = {
    name: "claim",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}