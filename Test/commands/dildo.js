const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Dildo')
    .setDescription("een dilo voor Jamy")
    .setColor("#521441")
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://hwimages.beslist.net/beslist-images/32BKzpy9LUAzWYemm1pfj2SYq15G/394/V800/cdc232f2f463edda11b787682c4affa1/Realistische-dildo%27s/Extreme-Oversized-Xxxxxxl-Dildo.jpg')
    .setTimestamp()
    .setFooter('Defensie', '');

    

return message.channel.send(botEmbed);


}

module.exports.help = {
    name: "dildo",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}