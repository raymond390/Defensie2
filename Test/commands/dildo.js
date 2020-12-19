const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Dildo')
    .setDescription("een dilo voor Jamy")
    .setColor("#521441")
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage(message.guild.iconURL())
    .setTimestamp()
    .setFooter('Defensie', '');

    

return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "plaatje",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}