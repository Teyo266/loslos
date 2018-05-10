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
// const parole = require ("./Commandes/Cmd=Speak.js");
const kick = require ("./Commandes/Cmd=Kick.js");
const ban = require ("./Commandes/Cmd=Ban.js");
const ping = require ("./Commandes/Cmd=Ping.js");
const muteun = require ("./Commandes/Cmd=Mute.js");
const unmuteun = require ("./Commandes/Cmd=Unmute.js");
const regle = require ("./Commandes/Cmd=Regle.js");
const regle2 = require ("./Commandes/regle2.js");
const regle3 = require ("./Commandes/regle3.js");
const regle4 = require ("./Commandes/regle4.js")

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
  client.user.setGame("En cours de Dev ... ");
  console.log(`
  =======================================
  Dev Bot !          
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ${client.users.size} Utilisateurs  
      ${client.guilds.size}  Serveurs    
  =======================================
  `)
});


client.on("guildMemberAdd", member => {
  let mem = member.guild
  const embed = new Discord.RichEmbed()
.setAuthor(" ~ Nouvel Utilisateur !")

.setColor(0x00ff00)
.setDescription(member.user + " vient de nous rejoindre ! 💻")
.setTimestamp();
client.channels.get("443543180579700745").send({embed});
});

/* =Ancien Joueur= */
client.on("guildMemberRemove", member => {
let mem = member.guild
const embed = new Discord.RichEmbed()
.setAuthor(" ~ Ancien Utilisateur")

.setColor(0xff0000)
.setDescription(member.user + " vient de nous quitter ! 💻")
.setTimestamp();
client.channels.get("443543180579700745").send({embed});
});


client.on("guildMemberAdd", member => {
  var role = member.guild.roles.get("442404826438172683")
  member.addRole(role)
});

/* =Connexion Système= */
client.login(config.token);
