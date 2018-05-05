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
if (command === "kick") {
    console.log("Kick")
if(!message.member.hasPermission("KICK_MEMBERS"))
return message.reply("You can't Kick !")
let member = message.mentions.members.first();
if(!member)
return message.reply("Please mention someone !");
member.send(`You have been Kicked from ${message.guild.name}`)
member.kick
}
 });

/* Connexion */
client.login(config.token)