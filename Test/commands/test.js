const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var test = args.slice(1).join(1);
    var dienst = args.slice(3).join(2);
    var type = args.slice(5).join(3);
    var a = args.slice(0).join(4);
    if (!args[0]) return message.reply("Geen Training opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    var botEmbed = new discord.MessageEmbed()
    .setTitle('Defensie')
    .setColor("#0099ff")
    .setTimestamp()
    .addFields(
        {name:" ** Training **" , value:` ${test} `},
        {name:" ** Dienst **" , value:` ${dienst} `},
        {name:" ** Type-Training **" , value:` ${type} `},
        {name:" ** Host **" , value:` ${message.author} `}
    )
    .setThumbnail('https://yt3.ggpht.com/a/AGF-l7_P42jUnWAoIvDDHzQH27EIOs5hAoDAwfdgug=s900-c-k-c0xffffffff-no-rj-mo')
    .setImage('https://f.jwwb.nl/public/g/w/t/temp-mxahzxdricxvqfpwpnhx/lm5nsv/km.jpg')
    .setFooter('Defensie', '');


    return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "test",
    description: "",
    category: "Algemeen"
}