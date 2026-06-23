import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(
  req: Request
) {
  try {
    const body = await req.json()

    const { word } = body

    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'You generate Japanese learning sentences.',
          },
          {
            role: 'user',
            content: `
Generate ONE simple Japanese sentence using the word "${word}".

Return ONLY valid JSON.

Format:
{
  "japanese": "私は水を飲みます。",
  "english": "I drink water.",
  "pronunciation": "Watashi wa mizu o nomimasu."
}

Rules:
- japanese MUST contain actual Japanese characters
- NEVER leave japanese empty
- pronunciation in romaji
- no markdown
- no explanation
`,
          },
        ],

        model:
          'llama-3.3-70b-versatile',
      })

    const text =
      completion.choices[0]
        .message.content || ''

    const parsed =
      JSON.parse(text)

    return Response.json(parsed)
  } catch (error) {
    console.log(error)

    return Response.json({
      japanese:
        '私は水を飲みます。',
      english:
        'I drink water.',
      pronunciation:
        'Watashi wa mizu o nomimasu.',
    })
  }
}