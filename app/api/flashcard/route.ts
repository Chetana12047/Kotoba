import Groq from 'groq-sdk'
console.log(process.env.GROQ_API_KEY)

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function GET() {
  try {
    const completion =
      await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'You generate random Japanese vocabulary flashcards.',
          },
          {
            role: 'user',
            content: `
Generate ONE random Japanese vocabulary word.

Return ONLY valid JSON.

Format:
{
  "japanese": "雲",
  "english": "cloud",
  "pronunciation": "kumo"
}

Rules:
- japanese field MUST contain actual Japanese characters
- NEVER leave japanese empty
- pronunciation must be romaji
- no markdown
- no explanation
`,
          },
        ],

        model: 'llama-3.3-70b-versatile',
      })

    const text =
      completion.choices[0].message.content || ''

    console.log('AI RESPONSE:', text)

    const parsed = JSON.parse(text)

    return Response.json(parsed)
  } catch (error) {
    console.log('GROQ ERROR:', error)

    return Response.json({
      japanese: '空',
      english: 'Sky',
      pronunciation: 'Sora',
    })
  }
}