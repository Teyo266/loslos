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
const config = require ("./Commandes/config.json");

/* =Commandes= */

/* =Async Fonction= */
client.on("message", message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase(); 
});

/* =Démarrage Système= */
client.on("ready", () => {
  client.user.setStatus(`dnd`)
  client.user.setGame("chercher un nom de serveur");
  console.log(`
  =======================================
   Démarrage des Systèmes en cours ...   
   [Système opérationnel]             
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ${client.users.size} Utilisateurs  
      ${client.guilds.size}  Serveurs    
  =======================================
  `)
});


client.on("guildMemberAdd", member => {
  let mem = member.guild
  const embed = new Discord.RichEmbed()
.setAuthor("TheLife  ~ Nouvel Utilisateur !")

.setColor(0x00ff00)
.setDescription(member.user + " vient de nous rejoindre ! 💻")
.setTimestamp();
client.channels.get("442403150507409409").send({embed});
});

/* =Ancien Joueur= */
client.on("guildMemberRemove", member => {
let mem = member.guild
const embed = new Discord.RichEmbed()
.setAuthor("TheLife  ~ Ancien Utilisateur")

.setColor(0xff0000)
.setDescription(member.user + " vient de nous quitter ! 💻")
.setTimestamp();
client.channels.get("442403150507409409").send({embed});
});


client.on("guildMemberAdd", member => {
  var role = member.guild.roles.find('name', 'Membres');
  member.addRole(role)
});

/* =Connexion Système= */
client.login(config.token);