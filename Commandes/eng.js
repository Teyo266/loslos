/*********************************************\
 * Created By "Teyo's#0525"
 * 18-03-2018
 * Created for Fun by MySelf
 * Library : NodeJS | JavaScript
 * Helping : https://discord.js.org/#/
 /**********************************************/

 
/* =Constante= */
const Discord = require ("discord.js");
const client = new Discord.Client();
const config = require ("./config.json");

/* =Commande= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 

if(command === "eng") {
let member = message.mentions.members.first();
message.delete();
message.member.send({embed: {
  color: 3447003,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Official Website ► Truckers MP",
  url: "https://truckersmp.com/",
  description: "",
  fields: [{
      name: "🛵 English",
      value: "You have  now  acces to the English parts on the Discord server !"
    },
  ],
}
});
console.log(`=> ${message.author.tag} speak English`);
var role = message.guild.roles.find('name', '🛵 English')
message.member.addRole(role);


}});
/* =Connexion Système= */
client.login(config.token);


