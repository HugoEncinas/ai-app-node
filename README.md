# AI Apps

This is a collection of some node AI applications utilizing [OpenAI's gpt-3.5 model](https://platform.openai.com/docs/introduction).

Also uses [LangChain](https://js.langchain.com/docs/get_started/introduction) to generate vector stores and word embeddings.

The approximate cost of running all apps once should be less than $0.08 USD.

## Installation

1. **Clone the Repository**: Clone this repository to your local machine using Git:

   ```
   git clone https://github.com/HugoEncinas/ai-app-node.git
   ```

2. **Navigate to the Project Directory**: Change into the directory of the cloned repository:

   ```
   cd ai-app-node
   ```

3. **Install Node.js**: Make sure you have at least Node.js version 18.16.0 installed on your system. You can download and install it from [Node.js website](https://nodejs.org/).

4. **Install Dependencies**: Install the required dependencies using npm:

   ```
   npm install
   ```

5. **Add API Key**: You may need to provide your own OpenAI key, you can [create an account here](https://platform.openai.com/) on the OpenAi platform site. This is a different account from what you would normally use for [ChatGPT](https://chat.openai.com/). Add the key to your `.env` file.

   ```
   OPENAI_API_KEY=""
   ```

## Applications

**Chat CLI**

Chat in the terminal with the gpt model, ask questions and get answers, it remembers conversation history within the same session.

```
npm run chat
```

**Search**

Use semantic search to get movie recommendations. For now it only gives recommendations from a list of 7 movies.

```
npm run search "cute and fluffy"
```

**Document QA**

Question Answering System: We have access to two unrelated sources for obtaining answers:

- a [Frontend Masters podcast](https://www.youtube.com/watch?v=zR_iuq2evXo).
- an xbox Product and Regulatory Guide, Limited Warranty & Agreement Guide PDF.

Based on the context of the question, the AI will determine the more appropriate source and provide a factual answer to the user's query. For example:

```
npm run qa "What is the Xbox warranty?"
```

**Function Calling**

Support 2 functions:

-Perform advanced math calculations: Calls the `calculate` function only when prompted to do math. Otherwise, it provides a normal AI-generated response.

```
npm run functions "what is 12 * 100 / 12 +290 / 67 * 2"
```

-Generate an image based on a prompt: Calls the `generateImage` function when prompted to do so and returns an external URL to view it. Uses DALL·E that is integrated within OpenAi.

```
npm run functions "generate image of a flying cat"
```

## Credits

This project was built based on a [course](https://frontendmasters.com/courses/openai-node/) provided by Scott Moss from Frontend Masters.
