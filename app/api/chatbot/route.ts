import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { portfolioData } from "../../../data";

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// System prompt with portfolio context
const SYSTEM_PROMPT = `You are a helpful AI assistant for a portfolio website. Here is the portfolio data you should use to answer questions:

${JSON.stringify(portfolioData, null, 2)}

INSTRUCTIONS:
- Answer questions ONLY based on the portfolio information provided above.
- Be concise, friendly, and professional.
- If asked about something not in the portfolio, say: "I don't have information about that in my portfolio. Feel free to email Alex at alex@example.com for more details!"
- Highlight relevant projects and skills when answering.
- Keep responses under 150 words unless specifically asked for details.
- Use markdown formatting for better readability.`;

export async function POST(req: NextRequest) {
  try {
    const { message, history = [] } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Construct messages array with system prompt and history
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    // Call Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: messages as any,
      model: "llama-3.3-70b-versatile", // or "mixtral-8x7b-32768", "gemma2-9b-it"
      temperature: 0.7,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    const response = chatCompletion.choices[0]?.message?.content;

    if (!response) {
      throw new Error("No response from Groq");
    }

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Groq API Error:", error);
    
    // Handle rate limit errors specifically
    if (error.status === 429) {
      return NextResponse.json(
        { 
          error: "Rate limit exceeded. Please wait a moment and try again.",
          retryAfter: "60"
        },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}