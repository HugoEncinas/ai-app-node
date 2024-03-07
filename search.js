import 'dotenv/config'
import { Document } from 'langchain/document'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { OpenAIEmbeddings } from '@langchain/openai'
import MOVIES from './movieList.js'

const createStore = () =>
  MemoryVectorStore.fromDocuments(
    MOVIES.map(
      ({ id, title, description }) =>
        new Document({
          pageContent: `Title: ${title}. Description: ${description}.`,
          metadata: { source: id, title: title },
        })
    ),
    new OpenAIEmbeddings()
  )

export const search = async (query, count = 1) => {
  const store = await createStore()
  return store.similaritySearch(query, count)
}

const PROMPT = process.argv[2] || 'funny'
console.log(await search(PROMPT))
