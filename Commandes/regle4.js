/*********************************************\
 * Created By "Teyo's#0525"
 * 18-03-2018
 * Created for Fun by MySelf
 * Library : NodeJS | JavaScript
 * Helping : https://discord.js.org/#/
 /**********************************************/

 /* Constantes */
 const Discord = require ("discord.js");
 const client = new Discord.Client();
 const config =  require ("./config.json");
 
 /* Const Command | Préfix */
 client.on("message", message => {
     if(message.author.bot) return;
     if(message.content.indexOf(config.prefix) !== 0) return;
     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
     
/* Commande */
if (command === "regle4") {
    message.delete()
const embed = new Discord.RichEmbed()
.setColor("0xffffff")
.addField("__**Article 3 - Remboursements**__","======================")
.addField("**N° 3.1 :**", " L’administration ne fera pas de remboursements de moins de 10.000$.")
.addField("**N° 3.2 :**", "Lors d’un remboursement, des preuves vous seront demandées pour légitimer le remboursement")
.addField("**N° 3.3 :**", "L’administration se garde le droit de refuser un remboursement.")
message.channel.send({embed})
}});

/* Connexion */
client.login(config.token)