const { PingPlugin, SummarizePlugin } = require('../plugins/reactions');

const registerReactionHandlers = (bot) => {
  bot.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return;

    switch (reaction.emoji.name) {
      case '👍':
        break;
    }
  });
};

module.exports = { registerReactionHandlers };
