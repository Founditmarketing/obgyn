import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();
    
    // Ensure the key exists (server-side only)
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API Key not configured." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const prompt = `You are the AI Nurse Concierge for Dr. Alex Joseph's elevated OBGYN clinic. 
You are empathetic, highly professional, emotionally intelligent, and clinical. Maintain a luxurious and calming tone.
Always gently remind the patient that in case of a true medical emergency, they should call 911 or visit the ER.
Patient says: "${message}"

Respond directly to the patient in 1-2 short, conversational paragraphs. Use markdown formatting to bold important terms gently if necessary.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 });
  }
}
