import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const OPENAI_API_URL = 'https://api.openai.com/v1/responses';

const SYSTEM_PROMPT = `You are a senior enterprise AI strategy consultant.

Analyze the given business problem and propose structured AI-driven initiatives suitable for enterprise implementation.

Return strictly valid JSON:

{
  "summary": "2–3 sentence executive-level summary",
  "opportunities": [
    {
      "title": "Short AI initiative title",
      "description": "Clear explanation"
    }
  ],
  "impact": [
    "Specific measurable business outcome 1",
    "Specific measurable business outcome 2",
    "Specific measurable business outcome 3"
  ]
}

Guidelines:
- Professional tone
- No buzzwords
- No text outside JSON`;

app.post('/api/generate', async (req, res) => {
  const { problem } = req.body;

  if (!problem || problem.trim().length < 20) {
    return res.status(400).json({ error: 'Business problem description is too short or missing.' });
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.4,
        max_output_tokens: 350,
        response_format: { type: 'json_object' },
        instructions: SYSTEM_PROMPT,
        input: [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: `Business Problem: ${problem}`
                    }
                ]
            }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API Error:', errorData);
      return res.status(response.status).json({ error: errorData.error?.message || 'Failed to call OpenAI Responses API' });
    }

    const data = await response.json();
    
    // The structured JSON is expected in output[0].content[0].text per Responses API preview
    // Note: The structure of /v1/responses is slightly different from /v1/chat/completions
    const content = data.output?.[0]?.content?.[0]?.text;
    
    if (!content) {
      throw new Error('Unexpected response format from OpenAI.');
    }

    let parsedResult;
    try {
      parsedResult = JSON.parse(content);
    } catch (parseError) {
      console.error('JSON Parsing Error:', content);
      return res.status(500).json({ error: 'AI returned invalid structured content.' });
    }

    res.json(parsedResult);

  } catch (error) {
    console.error('Backend Error:', error);
    res.status(500).json({ error: 'Internal server error occurred.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
