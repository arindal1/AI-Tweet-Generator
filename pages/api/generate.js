import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: 'Description is required.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);
    const model = await genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const prompt = `Generate a short and engaging tweet based on this description: ${description}`;
    const result = await model.generateContent([prompt]);

    if (result && result.response) {
      const generatedText = await result.response.text();
      return res.status(200).json({ tweet: generatedText });
    } else {
      throw new Error('No response received from the model.');
    }
  } catch (error) {
    console.error('Error generating tweet:', error);
    res.status(500).json({ error: 'Failed to generate tweet' });
  }
}
