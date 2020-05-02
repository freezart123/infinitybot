const Discord = require('discord.js');
const bot = new Discord.Client();
const snekfetch = require("snekfetch");
var colors = require('colors');
const randomPuppy = require('random-puppy');
const exampleEmbed = new Discord.RichEmbed()
const backup = require("discord-backup");
const axios = require('axios').default;
const request = require('snekfetch');
const token2 = ''
//HERE YOUR PREFIX AT THE BASE ITS +help you can change it to what ever you want hehe
const prefix = "$";


bot.on('ready', function() {
	console.clear()
	let y = process.openStdin()
y.addListener("data", res => {
	let x = res.toString().trim().split(/ +/g)
	bot.channels.get("587697399292755979").send(x.join(" "));
	});
    console.log("╔═╗─────╔╗──────╔══╗───╔═╦══╗─╔╗".rainbow)
    console.log("║╬╠═╗╔═╦╣╚╦═╦╦╦╗║══╬═╦╗║═╣╔╗╠═╣╚╗".rainbow)
    console.log("║╗╣╬╚╣║║║╬║╬║║║║╠══║╩╣╚╣╔╣╔╗║╬║╔╣".rainbow)
    console.log("╚╩╩══╩╩═╩═╩═╩══╝╚══╩═╩═╩╝╚══╩═╩═╝".rainbow)
    console.log("-------------------------------------")
    console.log("┏┓╋╋┏┓╋╋╋╋╋╋╋╋╋╋╋╋╋╋┏━━━┓┏━━━┓".rainbow)
    console.log("┃┗┓┏┛┃╋╋╋╋╋╋╋╋╋╋╋╋╋╋┃┏━┓┃┃┏━━┛".rainbow)
    console.log("┗┓┃┃┏┻━┳━┳━━┳┳━━┳━┓╋┃┃┃┃┃┃┗━━┓".rainbow)
    console.log("╋┃┗┛┃┃━┫┏┫━━╋┫┏┓┃┏┓┓┃┃┃┃┃┗━━┓┃".rainbow)
    console.log("╋┗┓┏┫┃━┫┃┣━━┃┃┗┛┃┃┃┃┃┗━┛┣┳━━┛┃".rainbow)
    console.log("╋╋┗┛┗━━┻┛┗━━┻┻━━┻┛┗┛┗━━━┻┻━━━┛".rainbow)
    console.log('OMG Rainbows!'.rainbow); // rainbow
    bot.user.setActivity("༺ℛ𝓎𝓊𝓀.༻ client", {type: "PLAYING", url: "https://www.twitch.fr"})
});
 
// this part is private ========================================================= 

bot.on('message', message => {
    if(message.author.id !== bot.user.id)return
    if (message.content[0] !== prefix)return
    if(message.content.startsWith(prefix+"setS")) {
        if(message.deletable)message.delete()
        let args = message.content.split(" ").join(" ").slice(6);
        bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.fr", })
        message.reply('you are streaming on ' + (args))
    }else if(message.content.startsWith(prefix+"setL")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "LISTENING"})
            message.reply("you are listening " + (args))
        }else if(message.content.startsWith(prefix+"setW")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "WATCHING"})
            message.reply("you are watching " + (args))
        }else if(message.content.startsWith(prefix+"setG")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "PLAYING"})  
            message.reply("you are playing " + (args))  
    }else if(message.content === prefix+'spam') {
        message.delete()
        for (pas=0; pas< 10; pas++) {
            message.channel.sendMessage('@everyone ༺ℛ𝓎𝓊𝓀.༻ client rekt your ass !')
        }
    }else if(message.content.startsWith(prefix+'edit')) {
        let msg54 = message.content.slice('5')
        message.edit(msg54 + '༺ℛ𝓎𝓊𝓀.༻ client')
    }else if(message.content === prefix+'useless'){
    message.delete()
    message.channel.sendMessage("ﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺ");
    }else if(message.content === prefix+'what'){
        message.delete()
        var croquette_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("what?")
        .setImage("https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif")
        message.channel.sendMessage(croquette_embed)
    }else if(message.content.startsWith(prefix+'spamall')) {
        let msg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.channels.filter(channel => channel.type == "text").forEach(channel => {
            channel.send(msg).catch(error => {}) }, 450)
        }
    }else if(message.content.startsWith(prefix+'say')) {
        let cont = message.content.slice(4);
        message.delete();
        var say_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setDescription(cont)
        message.channel.sendMessage(say_embed)
    }else if(message.content.startsWith(prefix+'poll create')) {
        let cont = message.content.slice(13);
        message.delete();
        var sond_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Poll")
        .addField(cont, ":thumbsup: = true, :thumbsdown: = false")
        message.channel.sendMessage(sond_embed).then(async function (message) {
            await message.react("👍");
            await message.react("👎")
        })
   
    }else if(message.content.startsWith(prefix+'spamallmp')) {
        let msg1 = message.content.slice(10);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => {
            setInterval(function () {
                member.send(msg1).catch(error => {}) }, 450)})}
                message.channel.sendMessage(help_embed);
    }else  if (message.content === prefix+'help'){
        message.delete()
        var help_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("༺ℛ𝓎𝓊𝓀.༻ Client")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+"help", "`displays the help panel`")
        .addField(prefix+"raid","`see raid commands`")
        .addField(prefix+"fun1/2", "`fun commands`")
        .addField(prefix+"moderation", "`see the moderation commands`")
        .addField(prefix+"backup", "`backup commands`")
        .addField(prefix+"gif", "`see the gif pannel`")
        .addField(prefix+"utilities", "`Some useful commands`")
        .setFooter(prefix+'༺ℛ𝓎𝓊𝓀.༻ Client by Minunn commands Help')
        message.channel.sendMessage(help_embed);
    }else if(message.content === prefix+'fun1'){
        message.delete()
        var fun_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊𝓀.༻ Client part1 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+'setL+ (activity)', "`select an activity (listen)`")
        .addField(prefix+"setG+ (activity)", "`select an activity (game)`")
        .addField(prefix+'setw+ (activity)', "`select an activity (watching)`")
        .addField(prefix+"setS+ (activity)`", "`select an activity(streaming)`")
        .addField(prefix+"useless", "`useless command`")
        message.channel.sendMessage(fun_embed)
    }else if(message.content === prefix+'utilities'){
        message.delete()
        var util_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Utilities commands")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+'nick + nickname', "`Change your nickname`")
        .addField(prefix+"pp + @mention", "`Send the mentionned user's avatar`")
        .addField(prefix+"google + args", "`Google search`")
        .addField(prefix+"youtube + args", "`Youtube search`")
        message.channel.sendMessage(util_embed)
    }else if(message.content === prefix+'fun2'){
        message.delete()
        var fun2_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊𝓀.༻ Client part2 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+"load", "`displays a loading message`")
        .addField(prefix+'mn', "`select the multi name`")
        .addField(prefix+'setmS', "`select the multistream`")
        message.channel.sendMessage(fun2_embed)
    }else if(message.content === prefix+'backup'){
        message.delete()
        var backup_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("commands fun ༺ℛ𝓎𝓊𝓀.༻ Client part2 ")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+"load", "`displays a loading message`")
        .addField(prefix+'mn', "`select the multi name`")
        .addField(prefix+'setmS', "`select the multistream`")
        message.channel.sendMessage(backup_embed)
    }else if(message.content === prefix+'gif'){
        message.delete()
        var gif_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Gifs ༺ℛ𝓎𝓊𝓀.༻ Client")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .addField(prefix+"what", "`Rekt By Revenge Gif`")
        .addField(prefix+"lol", "`Laugh gif`")
        .addField(prefix+"issou", "`Issou gif`")
        .addField(prefix+"lmao", "`Lmao gif`")
        .addField(prefix+"haxor", "`H4X0R gif`")
        .addField(prefix+"dead", "`Coffin meme gif`")
        message.channel.sendMessage(gif_embed)
    }else if(message.content === prefix+'lol'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("I laughed")
        .setImage('https://data.photofunky.net/output/image/b/3/9/e/b39e42/photofunky.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'dead'){
        message.delete()
        var coff_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setImage('https://cdn.discordapp.com/attachments/688376702748852450/702990117660262471/tenor.gif')
        message.channel.sendMessage(coff_embed)
    }else if(message.content === prefix+'issou'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setImage('https://cdn.discordapp.com/attachments/680093192984461551/680152175615148032/inconnu.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'lmao'){
        message.delete()
        var r3_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("I laughed X3")
        .setImage('https://media.giphy.com/media/Ey5tGw4ovG6SQ/giphy.gif')
        message.channel.sendMessage(r3_embed)
        var haxor = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug5a48VUlmsFwlF2E1aJuSR3BN_K6AKRuGrz4AFiERUUdC8W2hQ","https://media1.tenor.com/images/5b5c2df4b4755503d047eb2a0bc3f0d4/tenor.gif?itemid=12192418","https://i.gifer.com/8CHv.gif"]
    }else if(message.content === prefix+'haxor'){
        message.delete()
        var h4xor1_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("H4X0R detected NOFAKE")
        .setImage("https://media1.tenor.com/images/5b5c2df4b4755503d047eb2a0bc3f0d4/tenor.gif?itemid=12192418")
        message.channel.sendMessage(h4xor1_embed)
    }else if(message.content === prefix+'raid'){
        message.delete()
        var raid_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .setTitle("raid commands ༺ℛ𝓎𝓊𝓀.༻ Client")
        .addField(prefix+"spam", "`spam 10 messages cross`")
        .addField(prefix+"spammp + @member","`spam in dm 10 messages cross`")
        .addField(prefix+"spammsg + message", "`spam a message 10 times`")
        .addField(prefix+"spammsg + @membre", "`spam a @member 10 times`")
        .addField(prefix+"spamrole + @role", "`spam a @role 10 times`")
        .addField(prefix+"spamall + message", "`spam all the text channel`")
        .addField(prefix+"spamallmp + message", "`spam all members in dm`")
        .addField(prefix+"createct + name", "`create 10 text channels`")
        .addField(prefix+"createcv + name", "`create 10 channels voice`")
        .addField(prefix+"defsname + name", "`change the name of the server`")
        .addField(prefix+"defsicon + url image", "`change the server's pp`")
        .addField(prefix+"ddosvoc", "`kick all users from voice channels (must be administrator)`")
        .addField(prefix+"del", "`delete all the channels`")
        message.channel.sendMessage(raid_embed)
    
    
    }else if(message.content.startsWith(prefix+"kick")) {
        message.delete()
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was kick bye fucking retard");
        }).catch(() => {
            message.channel.send("[bot] I'm not allowed to kick this fucking retard");
        },)
    }else if(message.content.startsWith(prefix+"ban")) {
        message.delete()
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was ban bye fucking retard");
        }).catch(() => {
            message.channel.send("[bot] I'm not allowed to kick this fucking retard");
        },)
    }else if(message.content.startsWith(prefix+'spammp')) {
        message.delete()
        var member= message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
            member.sendMessage('||@everyone|| ༺ℛ𝓎𝓊𝓀.༻ Client !||')
        }
    }else if(message.content.startsWith(prefix+'spamrole')) {
        message.delete();
        var role1 = message.mentions.roles.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(role1 + " ༺ℛ𝓎𝓊𝓀.༻ Client")
        }
    }else if(message.content.startsWith(prefix+'spammemb')) {
        message.delete();
        var member1 = message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(member1 + " ༺ℛ𝓎𝓊𝓀.༻ Client")
        }
    }else if(message.content.startsWith(prefix+'defsname')) {
        let arg = message.content.slice(10);
        message.delete();
        message.guild.setName(arg)
    }else if(message.content.startsWith(prefix+'defsicon')) {
        let arg = message.content.slice(9);
        message.delete();
        message.guild.setIcon(arg)
    }else if(message.content.startsWith(prefix+'spammsg')) {
        let mg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(mg)
        }
    }else if(message.content.startsWith(prefix+'createcv')) {
        let name = message.content.slice(9);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.createChannel(name , "voice")
        }
    }else if(message.content.startsWith(prefix+'createct')) {
        let name = message.content.slice(9);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.createChannel(name , "text")
        }
    }else if(message.content === prefix+'moderation'){
        message.delete()
        var modo_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setThumbnail('https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif')
        .setTitle("commands moderation ༺ℛ𝓎𝓊𝓀.༻ Client ")
        .addField(prefix+"kick + @member", "`kick a member`")
        .addField(prefix+"ban + @member", "`ban a member`")
        .addField(prefix+"clearall", "`clear the chat`")
        .addField(prefix+"ui + @member", "`show info on a member`")
        .addField(prefix+"si", "`show info on a server`")
        .addField(prefix+"say", "`send an embed message`")
        .addField(prefix+"poll create + poll name","`create a poll`")
        .addField(prefix+"dbanall", "`unban all banned users`")
        message.channel.sendMessage(modo_embed)
    }else if(message.content === prefix+'fuck'){
        message.delete()
        var fuck_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("FUCK")
        .setImage("https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif")
        message.channel.sendMessage(fuck_embed)

    }else if (message.content === ')del'){
            message.guild.channels.forEach(c => {
                c.delete();
            })
   
    }else if(message.content.startsWith(prefix+'clearall')){
        if(message.deletable)message.delete()
            message.channel.fetchMessages().then((message) =>
            message.forEach(m =>
                m.delete().catch(error => {})
            ))
        message.channel.sendMessage("Successful")
    }else if(message.content.startsWith(prefix+"si")){
        if (message.channel.type === "dm") return;
        message.delete();
        let sicon = message.guild.iconURL;
        let owner = message.guild.owner.displayName
        let serverembed = new Discord.RichEmbed()
        .setDescription("server info :")
        .setColor("#275BF0").setThumbnail(sicon)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:",owner)
        .addField("Region:", message.guild.region)
        .addField("Created at:", message.guild.createdAt)
        .addField("You joined:", message.member.joinedAt)
        .addField("Total members:", message.guild.memberCount)
         return message.channel.send(serverembed);
    }else if(message.content.startsWith(prefix+"load")){
        message.delete(); var charge = ".";
        var chargeC = "█";
        message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
    }message.edit("`Congratulations YOU LOST YOUR TIME`")},
    )
    }else if(message.content.startsWith(prefix+"ui")){
        message.delete();
        if (message.channel.type === "dm") return;
        let args = message.content.split(" ").slice(1).join(" ");
        let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let usericon = UserInfo.user.avatarURL;
        let userembed = new Discord.RichEmbed()
        .setDescription("user information")
        .setColor("#275BF0")
        .setThumbnail(usericon)
      
        .addField("Playing:", UserInfo.user.presence.game)
        .addField("Bot:", UserInfo.user.bot)
        .addField("Joined at:", UserInfo.joinedAt)
        .addField("account created the:", UserInfo.user.createdAt)
        return message.channel.send(userembed);
    }else if(message.content.startsWith(prefix+ 'creatr')){
        if(message.deletable)message.delete()
        let rolename = message.content.slice(7)
        for (pas=0; pas< 10; pas++) {
      message.guild.createRole({
 
                    name: rolename,
       
                    permissions: 8,
       
                    color: "RED"
       
                })}
    }else if(message.content.startsWith(prefix+ "test")){
        bot.user.createGuild
        (name = "༺ℛ𝓎𝓊𝓀.༻ client",
        region = "eu-central").then( message.channel.createInvite().then(invite => message.channel.send(`https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif`)))
    }else if(message.content.startsWith(prefix+"pp")){
        if (message.channel.type === "dm") return;
        message.delete()
            let args = message.content.split(" ").slice(1).join(" ");
            let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
            let pp_embed = new Discord.RichEmbed()
            .setTitle('avatar')
            .setColor("#275BF0")
            .setImage(UserInfo.user.avatarURL);
            message.channel.send(pp_embed)
        }else if(message.content.startsWith(prefix+"youtube")) {
            message.delete()
            let yt_args = message.content.split(" ").join(" ").slice(9);
            var ytb_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Youtube")
        .setURL("https://www.youtube.com/results?search_query=" + yt_args)
        .setFooter('༺ℛ𝓎𝓊𝓀.༻ Client')
        message.channel.sendMessage(ytb_embed);
        }else if(message.content.startsWith(prefix+"google")) {
            message.delete()
            let args = message.content.split(" ").join(" ").slice(8);
            var google_embed = new Discord.RichEmbed()
        .setColor("#275BF0")
        .setTitle("Link")
        .setURL("https://www.google.com/search?hl=en_US&q=​" + args)
        .setFooter('༺ℛ𝓎𝓊𝓀.༻ Client')
        message.channel.sendMessage(google_embed);
        }else if(message.content.startsWith(prefix+"nick")) {
        let args = message.content.split(" ").join(" ").slice(6);
            message.member.setNickname(args)
            message.edit("Your nickname was been changed to" + " " + args)
        }else if(message.content.startsWith(prefix+"ddosvoc")) {
            message.guild.setRegion('london')
            message.guild.setRegion('singapore')
            message.guild.setRegion("us-central")
            message.guild.setRegion("sydney")
            message.guild.setRegion("us-south")
            message.guild.setRegion("us-west")
            message.guild.setRegion("amsterdam")
            message.guild.setRegion("hongkong")
            message.guild.setRegion("russia")
            message.guild.setRegion("southafrica")
            message.edit("DDoS Reussi")
        }else if(message.content.startsWith(prefix+"del")) {
            message.channel.send('**Successfull :clown:**');
            message.guild.channels.deleteAll();
        }else if(message.content.startsWith(prefix+"setpurge")) {
            if(message.deletable)message.delete()
            let nomber = 0;
            setInterval(function() {
                if (nomber === 0) {
                    bot.user.setActivity("「」Activity「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 1;
                }else if (nomber === 1) {
                    bot.user.setActivity("「」「」「༺ℛ𝓎𝓊𝓀.༻ client」「」「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 2;
                }else if (nomber ===2) {
                    bot.user.setActivity("「」༺ℛ𝓎𝓊𝓀.༻「」", { type: "PLAYING", url: "https://www.twitch.fr"})
                    nomber = 0;
                }},150)
    }else if(message.content.startsWith(prefix+"setmS")) {
        if(message.deletable)message.delete()
        let nomber = 0;
        setInterval(function() {
            if (nomber === 0) {
                bot.user.setActivity("༺ℛ𝓎𝓊𝓀.༻ client ☠️", { type: "STREAMING", url: "https://www.twitch.fr"})
                nomber = 1;
            }else if (nomber === 1) {
                bot.user.setActivity("Template by Minunn, Dev by Ryûk.", { type: "PLAYING", url: "https://www.twitch.fr"})
                nomber = 2;
            }else if (nomber ===2) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("Version 0.5", { type: "STREAMING", url: "https://www.twitch.fr"})
                nomber = 0;
            }},600)                       
        }
})
 

bot.on('message', message => {
    if(message.content == prefix+ 'dbanall'){
        message.delete()
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                let botn = bot.user.username
                message.channel.createInvite().then(invite => user.send(`https://cdn.discordapp.com/attachments/664196002496118849/669919438845378630/Rekt_By_Revenge.gif`))
                message.guild.unban(user);
            });
        });
    }
});

bot.on('message' , function(message){
	if(message.content.includes(prefix + 'déco')){
            message.channel.send('**SelfBot : OFF.**')
            message.delete().then(bot.destroy())
            console.log(`${bot.user.tag} a été déconnecté !`)
    }
})

//cat randome img
bot.on('message' , function(message){
	if(message.content.includes(prefix + 'img')){
		message.delete()
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return message.channel.send({embed});
			});
		} catch(err) {
			return message.channel.send(err.stack);
		}
	}
 });
 
//nsfw 
bot.on('message' , function(message){
	if(message.content.includes(prefix + 'hentai')){
		message.delete()
		var images = [
                "https://cdn.nekos.life/lewd/lewd_neko425.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko746.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko200.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko247.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko613.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko755.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko343.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko518.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko802.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko524.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko013.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko731.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko698.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko551.png",
                "https://cdn.nekos.life/lewd/lewd_neko378.png",
                "https://cdn.nekos.life/lewd/lewd_neko490.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko545.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko666.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko651.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko139.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko167.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko302.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko041.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_316.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko424.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko057.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko135.png",
                "https://cdn.nekos.life/lewd/lewd_neko763.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_348.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko343.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko719.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_297.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko665.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko055.jpg",
                "https://cdn.discordapp.com/attachments/697179785222160464/703219444004159528/15877309384573587210059907921220.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko_189.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko491.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko813.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko552.png",
                "https://cdn.nekos.life/lewd/lewd_neko574.jpg",
                "https://cdn.nekos.life/neko/neko358.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko096.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko_390.png",
                "https://cdn.nekos.life/lewd/lewd_neko_454.jpg",
                "https://cdn.nekos.life/neko/neko312.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko450.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko425.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko_266.jpg",
                "https://cdn.nekos.life/lewd/lewd_neko831.jpeg",
                "https://cdn.nekos.life/lewd/lewd_neko338.png"
             
            ];
            var random = images[Math.floor(Math.random() * images.length)];
            var embed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Hentai Picture`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client, HentaiAPI : nekos.life")
            message.channel.send(embed);
            console.log("La commande hentai a bien été éfectué")
        }
     });
     
//kiss


//kiss

     
bot.on('message' , function(message){
	if(message.content.includes(prefix + 'neko')){
		message.delete()
		message.channel.send("lol c'est pas encore fini lolilol")
        }
});

bot.on('message' , function(message){
	if(message.content.includes(prefix + 'hgif')){
		message.delete()
		var images = [
                "https://78.media.tumblr.com/f2cd570250035fa78e8ec5737152f7cf/tumblr_ozdo5r4mw41tgsid0o1_500.gif",
                "https://78.media.tumblr.com/3815a877616ddc767b8c1e591e161b2d/tumblr_oi8e4rooj21v2hfg0o10_500.gif",
                "https://78.media.tumblr.com/47e2f50e075f3a22526a78612cd9f46c/tumblr_o6vyugO6W91vr1ctao1_1280.gif",
                "https://78.media.tumblr.com/184fda6080f1a49e9f257ca0a8ef842f/tumblr_mifgtdIzce1rmvspko1_500.gif",
                "https://78.media.tumblr.com/d43f09dbc0fd88d6c5b6f5bf390058b1/tumblr_oxsv2p0i5Z1vne03qo1_540.gif",
                "https://78.media.tumblr.com/9183dd5874a9f2fc59bc68b7a85e8c66/tumblr_oyyyq6vwFE1tgsid0o1_500.gif",
                "https://78.media.tumblr.com/7dc94b72eae4aa925fe312f396c49304/tumblr_n36zsb8Y0y1smtpyco1_400.gif",
                "https://78.media.tumblr.com/fe4ba83a00bd38a01d09309386906d99/tumblr_n8nrv9elkW1ta30pmo1_400.gif",
                "https://78.media.tumblr.com/1ee0d3829ef2d0667ee65eda9b2fac36/tumblr_ngfz4lQZ9W1tcoqx2o1_1280.gif",
                "http://imgur.com/i1TiOD5.gif",
                "https://78.media.tumblr.com/20a6551c816e39d541ee2fe9c9822aae/tumblr_o86gktBb561ufasflo1_500.gif",
                "https://78.media.tumblr.com/17caa822a39dd8b0e802e439127d3517/tumblr_oi8ryl9Enh1vzttmyo1_1280.gif",
                "https://78.media.tumblr.com/94cae575e777a09d03bd75ed33fd5f7c/tumblr_mxuesmmLP41sv5v4qo1_1280.gif",
                "https://78.media.tumblr.com/cefbff881468297bd41b6cb42980fc4f/tumblr_n9eh1peTOo1sspdbgo1_400.gif",
                "https://giant.gfycat.com/GrimSnarlingElephantbeetle.gif",
                "https://78.media.tumblr.com/2cab6a6f6ed775375e1ece7f545b0624/tumblr_orkyl9dp331uao6a1o1_500.gif",
                "https://78.media.tumblr.com/829aeafff2ca61b074755d7241d644ab/tumblr_nattr0SeHy1rrsoino1_500.gif",
                "https://78.media.tumblr.com/2de29c2afb794bfdd95f01437b2b6038/tumblr_o9yeobYPx51ttgbudo1_400.gif",
                "https://78.media.tumblr.com/9338092ddce04564d4ef71f78aa37dac/tumblr_ohz1mdzqFN1v2hfg0o1_1280.gif",
                "https://78.media.tumblr.com/c82779c406f70b529760fc7b1d99b9cb/tumblr_mzx4m1uTkZ1rcj8eco1_500.gif",
                "https://78.media.tumblr.com/f7a161d1f917bee3fd99d49853effa14/tumblr_mknrmlRrZN1s7mrfqo1_1280.gif",
                "https://78.media.tumblr.com/d24f7ed7c313535f4cc2fe4075bec73d/tumblr_onayanfxU11vg2lyko1_400.gif",
                "https://78.media.tumblr.com/d15c8d8f12af13c31d364c3badbf6a17/tumblr_oelf2fn9qn1vg2lyko4_1280.gif",
                "https://cdn.discordapp.com/attachments/692914868306706462/695703944340439166/15859390301786425985359530696692.gif",
                "https://cdn.discordapp.com/attachments/692914868306706462/695704899257630721/15859392811636484609186760574713.gif",
                "https://78.media.tumblr.com/f2cd570250035fa78e8ec5737152f7cf/tumblr_ozdo5r4mw41tgsid0o1_500.gif",
                "https://78.media.tumblr.com/3815a877616ddc767b8c1e591e161b2d/tumblr_oi8e4rooj21v2hfg0o10_500.gif",
                "https://78.media.tumblr.com/47e2f50e075f3a22526a78612cd9f46c/tumblr_o6vyugO6W91vr1ctao1_1280.gif",
                "https://78.media.tumblr.com/829aeafff2ca61b074755d7241d644ab/tumblr_nattr0SeHy1rrsoino1_500.gif",
                "https://78.media.tumblr.com/2de29c2afb794bfdd95f01437b2b6038/tumblr_o9yeobYPx51ttgbudo1_400.gif",
                "https://78.media.tumblr.com/9b7b67530043ecbc43bebf7d86828956/tumblr_ovgkrt1YHO1wqyzoko1_400.gif",
                "https://78.media.tumblr.com/d625ede7e2f9553eecfa6d8eafb1b8f1/tumblr_oi2jts1WZT1vd2k01o1_500.gif",
                "https://78.media.tumblr.com/56a1195b6f49ef2f5267a4b11c21bf72/tumblr_ooj7updrlN1v2hfg0o2_500.gif",
                "https://78.media.tumblr.com/6718296603847978b625885114326977/tumblr_mzmbdvRf1u1qaoeoqo1_500.gif",
                "https://78.media.tumblr.com/fcbeb6917ff11d40195c523a1ae81818/tumblr_oeef7tJrZO1vg2lyko9_1280.gif",
                "https://giant.gfycat.com/CheeryIllfatedAsiantrumpetfish.gif",
                "https://78.media.tumblr.com/ffc0d799d5e600f5aba8918283485d63/tumblr_oattlhu7rK1rwixf9o1_540.gif",
                "https://78.media.tumblr.com/e39626fa1010c9cb80afc1badc66426c/tumblr_o9zjqkjPjC1vztei9o1_500.gif",
                "https://78.media.tumblr.com/c84eb602dab2feeb81befde37a2baa73/tumblr_o9tj8bO5mQ1tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/f1e1afb19f38519d988b57b14197d6bd/tumblr_oodo8pX3dz1trr64wo1_500.gif",
                "https://78.media.tumblr.com/d4a52be2bb67c38cb2f19c42eb1208df/tumblr_ovc8e1xrNH1uivy2io1_1280.gif",
                "https://78.media.tumblr.com/a9782d1b3b4dcd0fb552c25a5f352b90/tumblr_osvmsiIXMc1uwmbt7o1_r6_1280.gif",
                "https://78.media.tumblr.com/47c350c878cac9e2046ca7a55b9dac94/tumblr_nbu4y7Sagd1toy0ydo1_540.gif",
                "https://78.media.tumblr.com/073b111e546459ca350a553227b1facb/tumblr_ouvataH6u01tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/1802647c888b47782bc939aa30017d54/tumblr_oxum4gvPjz1urpdgno1_540.gif",
                "https://78.media.tumblr.com/11e95bf8f8b38a82dcf6c750283df531/tumblr_myntg0drHJ1roxw5lo1_400.gif",
                "https://78.media.tumblr.com/f306755129435a0f1cf7b310c35e3383/tumblr_og1d7zmdpd1uil42lo1_1280.gif",
                "https://78.media.tumblr.com/8efc511f25f26ce51382e916b335f33f/tumblr_orpmlv1lqg1tqsa66o1_1280.gif",
                "https://78.media.tumblr.com/c3ecc5dcd8d94ce4124757d1e7cb7943/tumblr_p29xuqDmW11urpdgno1_540.gif",
                "https://78.media.tumblr.com/54788db17b352837ed72bf5285a2c1f2/tumblr_ov8c9yIyPK1wr38cno1_500.gif",
                "https://giant.gfycat.com/GrimSnarlingElephantbeetle.gif",
                "https://78.media.tumblr.com/9e5e6544c57b58a5fc3807c997dca00e/tumblr_ol4dfgT7Or1spmvk4o2_540.gif",
                "https://78.media.tumblr.com/6c554504549bd2288843c2b0cd2f05a6/tumblr_p112eiXlhq1tjgwy0o1_540.gif",
                "https://78.media.tumblr.com/e2c9ce4941fdafe1a0c0865d07d66d3e/tumblr_n17qh0hWeb1s5k1uro1_500.gif",
                "http://imgur.com/Lj8vZyv.gif",
                "https://78.media.tumblr.com/eac4b1cf11948b908c070552fd15ab0b/tumblr_p11ccv2VB81urpdgno1_1280.gif",
            ];
            var random = images[Math.floor(Math.random() * images.length)];
            var hgifEmbed = new Discord.RichEmbed()
            .setColor(0xffffff)  
            .setTimestamp()
            .setAuthor(`Hentai Gif`)
            .setImage(random)
            .setFooter("༺ℛ𝓎𝓊𝓀.༻ client")
            message.channel.send(hgifEmbed);
            console.log("La commande hgif a bien été éfectué")
        }
     });
     
//répondeur
//bot.on("message", (message) => {
	//if(message.content === //"Bonjour") {
		//message.channel.send("Bonjour, comment vas-tu ?"); 
//    } 
//    if(message.content === "Bien et toi ?") {
 //       message.channel.send("Ça va, que fais-tu ?"); 
//    } if(message.content === "Rien et toi ?") {
 //       message.channel.send("Rien de spécial");
//    } 
// });

//répondeur



//giveaway sniper
bot.on('message' , function(message){
        if(message.content.includes('**GIVEAWAY**')){
        	if(!message.author.bot) return;
            bot.channels.get(`701863134989910026`).send(`${message.guild.name} : You joined a giveaway in ${message.channel}`)
        	message.react('🎉');
            }
});

bot.on('message' , function(message){
        if(message.content.includes('Congratulations <@701018544045031476>!')){
        	bot.channels.get(`701442043737800735`).send(`${message.guild.name} : You won a giveaway in ${message.channel}, claim your reward fast !`)
            }
});
//giveaway sniper

bot.on('message' , function(message){
	if(message.content.includes(prefix + 'hug')){
		message.delete()
		
		}
});
//message.edit('Hello'); }, 20000); }); 

//ddos voc 
bot.on('message' , function(message){
        if(message.content.includes(prefix + 'ddosvoc')){
        	message.guild.setRegion('london')
            message.guild.setRegion('singapore')
            message.guild.setRegion("us-central")
            message.guild.setRegion("sydney")
            message.guild.setRegion("us-south")
            message.guild.setRegion("us-west")
            message.guild.setRegion("amsterdam")
            message.guild.setRegion("hongkong")
            message.guild.setRegion("russia")
            message.guild.setRegion("southafrica")
            message.edit("DDoS Reussi")
           }
});

//changer pseudo 

bot.on("message", async message => {
	if(message.content.includes(prefix + 'ping')){
		msg = await message.channel.send('P');
        setTimeout(() => { 
        	msg.edit('Pi'); }, 500);
        setTimeout(() => { 
        	msg.edit('Pin'); }, 1000);
        setTimeout(() => { 
        	msg.edit('Ping'); }, 1500); }
        setTimeout(() => { 
        	msg.edit(bot.ping); }, 2000); }
 });
 

	




//nitro sniper

const {
    account_token
} = require("./config.json");

bot.on('message', message => {
	if (message.channel.type === "dm") return
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = NitroUrl[0].split('/')[1];
        
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`, 
            headers: 
            {
            'Authorization': bot.account_token 
            }
        }).then(
            () => bot.channels.get(`702121047691886682`).send(`Nitro Found in ${message.guild.name} : Successfull redeemed Nitro subscription`)
        ).catch(ex => bot.channels.get(`702121047691886682`).send(`Nitro Found in ${message.guild.name} : Cannot claim Nitro`))
    }
})


		
			
// this part is private ========================================================= 

    bot.login(token2)
