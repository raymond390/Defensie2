const discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    
        const categoryID = "793468772778246144";
        var staff = "790291727889858570";
        var person = message.author;

        var userName = message.author.username;
        var userDiscriminator = message.author.discriminator;
    
        var ticketBestaat = false;
    
        message.guild.channels.cache.forEach(channel => {
    
            if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
                ticketBestaat = true;
    
                message.reply("Je hebt al een ticket aangemaakt");
    
                return;
            }
    
        });
    
        if (ticketBestaat) return;
    
        var embed = new discord.MessageEmbed()
            .setTitle("Hoi " + message.author.username)
            .setFooter("Sollicitatie kanaal wordt aangemaakt");
    
        message.channel.send(embed);
    
        message.guild.channels.create(userName.toLowerCase() + "-" + userDiscriminator, { type: 'text' }).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === '@everyone'), {
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
    
                        settedParent.updateOverwrite(message.author.id, {
                            CREATE_INSTANT_INVITE: false,
                            READ_MESSAGES: true,
                            SEND_MESSAGES: true,
                            ATTACH_FILES: true,
                            CONNECT: true,
                            ADD_REACTIONS: true,
                            VIEW_CHANNEL: true,
                            READ_MESSAGE_HISTORY: true
                        });
    
                    var embedParent = new discord.MessageEmbed()
                        .setTitle("Hoi" + message.author.username)
                        .setColor("#00BFFF")
                        .setDescription("Hier is u Sollictatie ");

                    var vraag0 = new discord.MessageEmbed()
                    .setTitle("sollicitatie vraag 1")
                    .setColor("#00BFFF")
                    .setDescription(" Wat is Prio 1: "); 
                    
                    var vraag1 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 2")
                        .setColor("#00BFFF")
                        .setDescription(" Wat is Prio 2 ");    
                    
                    var vraag2 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 3")
                        .setColor("#00BFFF")
                        .setDescription("Wat is Prio 3 "); 
                        
                    var vraag3 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 4")
                        .setColor("#00BFFF")
                        .setDescription("Wat is Groenelampje:"); 
                    
                    var vraag4 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 5")
                        .setColor("#00BFFF")
                        .setDescription("Wat is Oranje Lampje:"); 
                    
                    var vraag5 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 6")
                        .setColor("#00BFFF")
                        .setDescription("Wat is BTGV: "); 

                    var vraag6 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 7")
                        .setColor("#00BFFF")
                        .setDescription(" Wat is OPS "); 

                    var vraag7 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 8")
                        .setColor("#00BFFF")
                        .setDescription("Wat is HRB:");

                     var vraag8 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 9")
                        .setColor("#00BFFF")
                        .setDescription("Wat is GBB");

                    var vraag9 = new discord.MessageEmbed()
                        .setTitle("sollicitatie vraag 10")
                        .setColor("#00BFFF")
                        .setDescription("Wat is BSB")
                      
                        settedParent.send(message.author.id);
                        settedParent.send(embedParent);
                        settedParent.send(vraag0);
     
    
                        settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                            var antwoord0 = antwoord.first();;
                            settedParent.send(vraag1);
     
                            settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                             var antwoord1 = antwoord.first();;
                             settedParent.send(vraag2);
     
                             settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                 var antwoord2 = antwoord.first();;
                                 settedParent.send(vraag3);
     
                                 settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                     var antwoord3 = antwoord.first();;
                                     settedParent.send(vraag4);
     
                                     settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                         var antwoord4 = antwoord.first();;
                                         settedParent.send(vraag5);
     
                                         settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                             var antwoord5 = antwoord.first();;
                                             settedParent.send(vraag6);
     
                                             settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                var antwoord6 = antwoord.first();;
                                                settedParent.send(vraag7);
                                                
                                                settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                    var antwoord7 = antwoord.first();;
                                                    settedParent.send(vraag8);

                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                        var antwoord8 = antwoord.first();;
                                                        settedParent.send(vraag9);
                                             
                                                    settedParent.awaitMessages(s => s.author.id == message.author.id, {max: 1}).then(antwoord => {
                                                        var antwoord9 = antwoord.first();;
                                                        

                                             
     
                                             var uitkomst = new discord.MessageEmbed()
                                             .setTitle("Bedankt voor het solliciteren")
                                             .setColor("#00FF00")
                                             .setTimestamp()
                                             .setDescription(`**Wat is Prio 1: **: \n${antwoord0}\n\n**Wat is Prio 2 **: \n${antwoord1}\n\n**Wat is Prio 3**: \n${antwoord2}\n\n**Wat is Groenelampje: **: \n${antwoord3}\n\n**Wat is Oranje Lampje:**:\n${antwoord4}\n\n**Wat is BTGV: **: \n${antwoord5}\n\n**Wat is OPS **: \n${antwoord6}\n\n**Wat is HRB:**\n${antwoord7}\n\n**Wat is GBB: **\n${antwoord8}\n\n**Wat is BSB:.**\n${antwoord9}`)
                                         
     
                                             settedParent.bulkDelete(14).then(
                                                 settedParent.send(uitkomst)
                                             )
                                         })
                                     })
                                 })
                             })
                         })
                     })     
                 })

            })
          })
        })
        
                    }
                    
                ).catch(err => {
                    message.channel.send("Er is iets misgelopen");
                });
            }
        ).catch(err => {
            message.channel.send("Er is iets misgelopen");
        });
    }
    


module.exports.help = {
    name: "sollicitatie",
    description: "Hier mee start je een sollicitatie",
    category: "Informatie"
}