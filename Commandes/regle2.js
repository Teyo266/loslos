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
if (command === "regle2") {
    message.delete()
const embed = new Discord.RichEmbed()
.setColor("0x3758f4")
.addField("__**Article N° 1 - Règlement Discord**__","======================")
.addField("**N° 1.1 :**", "Tout manque de respect, insulte, divulgation d’informations personnelles envers un quelconque Joueur ou un membre de notre équipe, propos raciste, discriminatoire ou encore rabaissant est strictement interdit et passible d’un bannissement permanent de notre plateforme")
.addField("**N° 1.2 :**", "Il est interdit de réaliser des annonces publicitaires pour d’autres serveurs sur le serveur Discord de Libérias")
.addField("**N° 1.3 :**", "Tout mensonge concernant la véracité d’une accusation portée par un membre de notre équipe sera sanctionné.")
.addField("**N° 1.4 :**", "Tout partage de liens, vidéos ou site ayant un contenu de type pornographique, pédophilie, zoophilie, violence physique ou morale ou tout autres types d’actes à caractère choquant se verra sévèrement sanctionnée.")
message.channel.send({embed})
}});

/* Connexion */
client.login(config.token)