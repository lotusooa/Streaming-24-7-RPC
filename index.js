const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });

const keepAlive = require("./server.js");
keepAlive();

client.on('ready', async () => {
  console.log(`${client.user.username} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId(process.env.APPLICATION_ID || '156571652941152849')
    .setType('STREAMING')
    .setURL('https://twitch.tv')
    .setDetails(process.env.DETAILS || '╭─────────── .o. ⋆ 𓍼 ─╮ 𝗜 𝗟𝗢𝗩𝗘 𝗛𝗜𝗠 𝗦𝗢 𝗠𝗨𝗖𝗛')
    .setState(process.env.STATE || '╰─ 𓍼 ⋆ .o. ───────────╯')
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY || 'https://prodia.xyz');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" });
});

client.login(process.env.TOKEN);
