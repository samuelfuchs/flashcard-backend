async function generateFlashcard(prompt: string) {
  const { Configuration, OpenAIApi } = require("openai");
  console.log("ncodeURIComponent(prompt)", encodeURIComponent(prompt));
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: encodeURIComponent(prompt) },
    ],
  });
  const generatedResponse = chat_completion.data.choices[0].message.content;
  return generatedResponse;
}

export { generateFlashcard };
