const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({ readyStatus: false, checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Status Broadcaster Online!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server is active.');
});

client.on('ready', async () => {
  console.log(`${client.user.username} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId(process.env.APPLICATION_ID || '1565935843833815130')
    .setType('STREAMING')
    .setURL('https://twitch.tv')
    .setDetails(process.env.DETAILS || '⊹₊˚‧︵‿₊୨𖹭୧₊‿︵‧˚₊⊹')
    .setState(process.env.STATE || '🇮​ ​🇱​​🇴​​🇻​​🇪​ ​🇭​​🇮​​🇲​ ​🇸​​🇴​ ​🇲​​🇺​​🇨​​🇭')
    .setAssetsLargeImage(process.env.LARGE_IMAGE_KEY || 'https://pin.it/Z9cTxB0Dk');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" });
});

client.login(process.env.TOKEN);
