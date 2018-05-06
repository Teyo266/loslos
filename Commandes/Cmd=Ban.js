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
if (command === "ban") {
    console.log("ban")
if(!message.member.hasPermission("BAN_MEMBERS"))
return message.reply("T'es ouf toi pour essayer de ban ?")
let member = message.mentions.members.first();
if(!member)
return message.reply("Moi j'veux bien ban mais qui ?");
member.send(`Vous avez été banni de ${message.guild.name}`);
member.ban()
const embed = new Discord.RichEmbed()
.setAuthor("📝 Logs - Ban", `${client.user.avatarURL}`)
.setColor("0xfa05fa")
.addField(`**Auteur :**`, `${message.author}`)
.addField("**Utilisateur Banni  :**", `${member.user}`)
.addField("**Raison :**", `${reason}`)
client.channels.get("442467811017883658").send({embed})
}});

/* Connexion */
client.login(config.token)