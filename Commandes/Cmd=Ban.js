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
return message.reply("Tu ne peux pas ban !")
let member = message.mentions.members.first();
if(!member)
return message.reply("Please mention someone !");
member.send(`You have been banned from ${message.guild.name}`);
member.ban()
}
 });

/* Connexion */
client.login(config.token)