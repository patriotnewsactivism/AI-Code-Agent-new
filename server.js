import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch'; // Use 'node-fetch' or the built-in fetch in Node 18+

const app = express();
app.use(express.json());

// Your React app's 'dist' folder
app.use(express.static('dist')); 

const API_KEY = process.env.GOOGLE_API_KEY;
// This is the correct public API endpoint
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

app.post('/api/generate', async (req, res) => {
  if (!API_KEY) {
    return res.status(500).json({ error: "API key not configured." });
  }

  const { systemPrompt, contextPrompt } = req.body;

  const payload = {
    contents: [{ parts: [{ text: contextPrompt }] }],
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    generationConfig: {
      responseMimeType: "application/json",
    }
  };

  try {
    const apiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("Google API Error:", errorText);
      return res.status(apiResponse.status).json({ error: "Failed to fetch from Google API.", details: errorText });
    }

    const data = await apiResponse.json();
    
    // Extract the JSON string from the response and parse it
    const jsonText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!jsonText) {
      return res.status(500).json({ error: "Invalid response from Google API." });
    }

    // Send the parsed JSON object back to the frontend
    res.json(JSON.parse(jsonText));

  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Internal server error.", details: error.message });
  }
});

// Fallback for client-side routing (if you had it)
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});