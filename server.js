import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(express.json());

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    res.json({
      reply: completion.choices[0].message,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(` Backend running at http://localhost:${PORT}`));
