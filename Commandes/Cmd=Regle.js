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
if (command === "regle") {
    message.delete()
const embed = new Discord.RichEmbed()
.setAuthor("Réglement Libérias", `${client.user.avatarURL}`)
.setColor("0x00ae00")
.addField("__**Règlement Libérias :**__", "`Liberias Se Reserve Le Droit De Modifier A Tout Moment Les Articles Proposes Sur Ce Present Reglement.`")
message.channel.send({embed})
}});

/* Connexion */
client.login(config.token)