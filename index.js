require('dotenv').config();
const { Client, Intents } = require('discord.js');
const { registerMentionHandlers } = require('./handlers/mentionHandlers');
const { registerReactionHandlers } = require('./handlers/reactionHandlers');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.once('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  registerMentionHandlers(bot);
  registerReactionHandlers(bot);
});

bot.login(process.env.DISCORD_BOT_TOKEN);
