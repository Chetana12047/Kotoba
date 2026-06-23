import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
})
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { text } = body

    const completion =
      await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Translate English text into natural Japanese only.',
          },
          {
            role: 'user',
            content: text,
          },
        ],
      })

    const translated =
      completion.choices[0].message.content

    return NextResponse.json({
      translated,
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json({
      translated: 'Translation failed',
    })
  }
}