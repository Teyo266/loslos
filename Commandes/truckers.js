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

if(command === "trucker") {
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
      name: "🚲 French",
      value: "**Salut toi ! Je te remercie d'avoir lu les règles du serveur Discord 'Truckers MP'. Tu as désormais accès à une des channels supplémentaires ! N'oublies pas d'aller sur le site lire les règles aussi.  Allez, va t'amuser maintenant** ♥"
    },
    {
      name: "🛵 English",
      value: "**Hey you ! Thank's for read the rules of the Discord server 'Truckers MP'. Now, you have acces to news channels on the server ! Don't forget to go on the official website and read the rules. Let's have fun now !** ♥"
    },
    {
      name: "Rules ► Truckers MP",
      value: "[Official rules](https://forum.truckersmp.com/index.php?/forum/115-truckersmp-rules/)"
    }
  ],
  footer: {
    icon_url: client.user.avatarURL,
    text: "🚚 🚚 🚚 🚚 🚚"
  }
}
});
console.log(`=> ${message.author.tag} à été validé.`);
var role = message.guild.roles.find('name', '🚚 Truckers')
message.member.addRole(role);


}});
/* =Connexion Système= */
client.login(config.token);


