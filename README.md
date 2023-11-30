
# Discord Cohere Bot

This project is a Discord bot that integrates Cohere's natural language processing (NLP) capabilities. It's structured to provide channelg summary and handle different types of interactions, including message mentions and reactions.

## Structure

The bot is divided into several modules for better organization and scalability:

- `index.js`: The main entry point of the application.
- `handlers/mentionHandlers.js`: Handles the logic for mentions in Discord messages.
- `handlers/reactionHandlers.js`: Manages reactions to messages.
- Plugins: Each plugin in `plugins/mentions` and `plugins/reactions` directories is a self-contained unit performing specific tasks.

## Setup

1. **Install Node.js**: Ensure Node.js is installed on your system.
2. **Clone the Repository**: Clone this repository to your local machine.
3. **Install Dependencies**: Run `npm install` to install the required packages.
4. **Environment Variables**: Set up your `.env` file with the following variables:
   ```
   DISCORD_BOT_TOKEN=your_discord_bot_token
   COHERE_API_KEY=your_cohere_api_key
   ```
5. **Run the Bot**: Execute `node index.js` to start the bot.

## Contribution

Contributions to this project are welcome. You can enhance existing features or add new ones. Ensure that new features are modular and well-documented.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
