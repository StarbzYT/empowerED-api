const openai = require('./config');

async function main(message) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `In 80 words, respond empathetically to this person with mental health struggles and use principles from Paulo Freire's Pedagogy of the Oppressed to offer practical solution(s) to their problems. Here's what they've said: ${message} `,
      },
    ],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}

module.exports = main;
