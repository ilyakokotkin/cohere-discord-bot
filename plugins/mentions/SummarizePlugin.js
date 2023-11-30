const cohere = require('cohere-ai');
cohere.init(process.env.COHERE_API_KEY);

//Call Cohere API to make a summary
const execute = async (message, content) => {
  const response = await cohere.generate({
    model: 'large',
    prompt: `Summarize this: ${content}\n\nSummary:`,
    max_tokens: 50,
  });
  
  //Send summary as a reply
  message.reply(response.body.generations[0].text);
};

module.exports = { execute };
