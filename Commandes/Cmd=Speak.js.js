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
const newUsers = new Discord.Collection();

/* =Commande= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
;
if(command === "speak") {
  if(!message.member.hasPermission("ADMINISTRATOR"))
  if (message.author.id !== config.ownerID)
  return message.reply("Tu n'as pas les permsisions");
  const parole = args.join(" ");
  message.delete();
   message.channel.send(parole)
   console.log(`=> Commande Speak utilisé !
          ► ${message.author.tag} | ${message.author.username}
          ► ` + parole);
  const embed = new Discord.RichEmbed()
  .setAuthor("📝 Logs - Speak", `${client.user.avatarURL}`)
  .setColor("0xfa05fa")
  .addField(`**Auteur :**`, `${message.author}`)
  .addField("**Parole utilisée :**", parole)
  .addField("**Channel :**", `#${message.channel.name}`)
  client.channels.get("442467811017883658").send({embed})
}});

/* =Connexion Système= */
client.login(config.token);


