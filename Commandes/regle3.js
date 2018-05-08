/*********************************************\
 * Created By "Teyo's#0525"
 * 18-03-2018+
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
if (command === "regle3") {
    message.delete()
const embed = new Discord.RichEmbed()
.setColor("0xaa0000")
.addField("__**Article N° 2 - Règlement Général**__","`	Le Règlement Général est là pour rappeler les bases essentielles du RolePlay. Le RP est tout simplement la transposition de la vie réelle dans un jeu vidéo,  il y a certaines règles mais ceci fait appel surtout au bon sens des joueurs.  Il est bon de rappeler que tout manquement au règlement peut être puni d’un ban temporaire voire permanent. Lorsqu'un ban sera prononcé, une discussion sera possible avec les membres de l'administration afin d'évaluer le problème. Toute forme de trolling ne sera pas négociable.`")
.addField("**N° 2.1 :**", "Il est obligatoire d'avoir un  nom RP en jeu, sur discord et sur Steam [ ex sur steam : Pro_GamerxX ( Michel Rolland )  ].")
.addField("**N° 2.2 :**", "La présence sur Discord est obligatoire lorsque vous êtes en jeu. Pour faciliter la mise en relation avec le Staff. ")
.addField("**N° 2.3 :**", "Les formes de trolling qui sont sanctionnés d’un ban permanent sont:\
	\
-Les massacres de masse de différentes façons que ce soit. \
-Le stream hack rentre aussi dans cette catégorie.\
	-L’utilisation d'un mod menu ou d'un autre système de Cheat. \
	-Le Powergaming s'agit de réaliser une action irréaliste, comme par exemple, sauter d'un toit et ne pas avoir mal, avoir un accident de voiture et repartir comme si de rien n'était ou encore s'enfuir en étant braqué par cinq individus. Cet acte est interdit.")
.addField("**N° 2.4 :**", "Le respawn “Hôpital” et le “Déco/Reco” sont interdits lors d’une scène RP.")
.addField("**N° 2.5**", "Il est interdit de parler en jeu ou radio en étant dans le coma.")
.addField("**N° 2.6**", "Le coma n’est pas une mort RP (Perte de conscience).")
.addField("**N° 2.7**", "Lorsque vous tombez dans le coma il est interdit de déco reco même si vous avez un inventaire et de l'argent en conséquence sur vous. Dans un premier temps appeler une  ambulance si pas de disponibilité il vous faudra alors respawn à l'hôpital.")
.addField("**N° 2.8**", "Une demande de mort RP doit être déposée auprès de l’administration sous forme de dossier. Elle sera ensuite analysée, puis votée par l’ensemble du staff. Il vous sera communiqué la réponse en moins de 7 jours.")
.addField("**N° 2.9**", "Une scène de mort RP met en jeu la vie de la cible mais aussi celle des tueurs. Ne l’oubliez pas. Le tueur met donc aussi sa vie RP durant cette scène.")
.addField("**N° 2.10**", "Si vous crashez lors d'une scène RP, vous vous devez screen l’erreur et de contacter les personnes pour les prévenir, tout manquement à cette règle peut être suivi par de lourdes sanctions")
.addField("**N° 2.11**", "Votre personnage a une conscience, si vous êtes encerclé par un groupe étant en supériorité numérique à vous, vous ne pouvez pas vous permettre de tirer sur tous les membres du groupe adverse en même temps.")
.addField("**N° 2.12**", "Si vous êtes kidnappé et torturé par un groupe de citoyens ou un citoyen quelconque, vous devez répondre à toutes ces questions. Sous la torture et la pression d’un groupe lourdement armée, votre personnage est terrifié et fait tout ce qu’il peut pour s’en sortir vivant. Si cette règle n’est pas respectée, vous serez sanctionné pour du No Fear RP.")
.addField("**N° 2.13**", "Lors d’une peine de prison ferme, elle sera simulée par un bannissement temporaire le temps de l’emprisonnement.")
.addField("**N° 2.14**", "La prison fédérale ne peut être acceptée que par un juge ou un par le procureur.")
.addField("**N° 2.15**", "Le sursis s’applique à la prochaine faute et non prochaine demande de prison fédérale. Dans ce cas, la peine sera additionnée.")
.addField("**N° 2.16**", "Il est strictement interdit de faire son métier en véhicule non conforme à l’activité concernée.")
.addField("**N° 2.17**", "Toutes formes de glitch/usebug sera suivie d'une sanction après analyse de la situation par l'administration.")
.addField("**N° 2.18**", "Le commissariat et l’hôpital sont des safezone, il est strictement interdit de commettre un meurtre dans ces lieux sauf exception en cas de scène RP (avoir prévenu au moins un administrateur)")
message.channel.send({embed})
}});

/* Connexion */
client.login(config.token)