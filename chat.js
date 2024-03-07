import 'dotenv/config'
import readline from 'node:readline'
import { openai } from './openai.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const newMessage = async (history, message) => {
  const results = await openai.chat.completions.create({
    messages: [...history, message],
    model: 'gpt-3.5-turbo',
    // temperature: 0 | optional, 0-2 ranging from factual stuff to more creative answers
  })

  return results.choices[0].message
}

const formatMessage = (userInput) => ({ role: 'user', content: userInput })

const chat = () => {
  const history = [
    {
      role: 'system',
      content: 'You are an AI assistant, answer questions briefly',
    },
  ]
  const start = () => {
    rl.question('You: ', async (userInput) => {
      if (userInput.toLowerCase() === 'exit') {
        rl.close()
        return
      }

      const userMessage = formatMessage(userInput)
      const response = await newMessage(history, userMessage)

      history.push(userMessage, response)
      console.log(`\n\nAI: ${response.content}\n\n`)
      start()
    })
  }
  start()
}

console.log("Chatbot initialized. Type 'exit' to end the chat.")
chat()
