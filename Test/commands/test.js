const discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    var channel = message.member.guild.channels.cache.get("778300362607951912");

    dienst = args[0];
    type = args[1];
     co = args[2];
     datum = args[3];
     tijd = args[4];
     opmerking = args[5];
   
    if (!args[0]) return message.reply("Geen Training opgegeven.");

    if (!args[1]) return message.reply("Gelieve een type op te geven.");

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Defensie')
    .setColor("#0099ff")
    .setTimestamp()
    .addFields(
        {name:" ** Training **" , value:(dienst)},
        {name:" ** Dienst **" , value: (type) },
        {name:" ** Host **" , value:` ${message.author} `},
        {name:" ** co-Host **" , value: (co) },
        {name:" ** Datum **" , value: (datum) },
        {name:" ** Tijd **" , value: (tijd) },
        {name:" ** Opmerking **" , value: (opmerking) },

        
        
    )
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://f.jwwb.nl/public/g/w/t/temp-mxahzxdricxvqfpwpnhx/lm5nsv/km.jpg')
    .setFooter('Defensie', '');


    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "training",
    description: "",
    category: "Algemeen"
}