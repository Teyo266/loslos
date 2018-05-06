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
 client.on("message", async message => {
     if(message.author.bot) return;
     if(message.content.indexOf(config.prefix) !== 0) return;
     const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
     const command = args.shift().toLowerCase();
     
/* Commande */
if (command === "mute") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas les droits pour muter un utilisateur !");
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!toMute) return message.channel.send("Merci d'entrer un utilisateur !");
        let role = message.guild.roles.find(r => r.name === "Utilisateurs mutés");
        if(!role){
          try {
            role = await message.guild.createRole({
              name: "Utilisateurs mutés",
              color:"#000000",
              permissions:[]
            });
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(role, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          } catch (e) {
            console.log(e.stack)
          }
        }
        if(toMute.roles.has(role.id)) return message.channel.send('Cet utilisateur est déjà muté !');
        await(toMute.addRole(role));
        message.channel.send("Je l'ai muté !");
        return;
      }
    
    });
    

/* Connexion */
client.login(config.token)