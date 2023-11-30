const { PingPlugin, SummarizePlugin } = require('../plugins/mentions');

const registerMentionHandlers = (bot) => {
  bot.on('messageCreate', async message => {
    if (message.author.bot || !message.mentions.has(bot.user)) return;
    
    // Example: Parse the command (e.g., !ping, !summarize)
    const command = message.content.split(' ')[0].substring(1).toLowerCase();
    const content = message.content.slice(command.length + 2).trim();

    switch (command) {
      case 'ping':
        await PingPlugin.execute(message, content);
        break;
      case 'summarize':
        await SummarizePlugin.execute(message, content);
        break;
      // Can add more cases for other commands
    }
  });
};

module.exports = { registerMentionHandlers };
