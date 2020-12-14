const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("sorry jij kan dit niet");

    dienst = args[0];
    type = args[1];
     co = args[2];
     datum = args[3];
     tijd = args[4];
     opmerking = args[5];
   
    if (!args[0]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen");
    if (!args[1]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen");
    if (!args[2]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen");
    if (!args[3]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen");
    if (!args[4]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen");
    if (!args[5]) return message.reply("dienst-type-co host-datum-tijd-opmerkingen.");
   
   
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
    .setImage('https://www.defensie.nl/binaries/large/content/gallery/defensie/content-afbeeldingen/organisatie/marechaussee/otc/foto-website-1.jpg')
    .setFooter('Defensie', '');

    var channel = message.member.guild.channels.cache.get("779617907587940352");

    if (!channel) return

    channel.send(botEmbed);
}

module.exports.help = {
    name: "training",
    description: ".training dienst-type-co host-datum-tijd-opmerkingen",
    category: "Algemeen"
}