import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the "FHN Virtual Consultant", an AI assistant for The Foot Health Network.
Your role is to assist podiatrists, chiropodists, and clinic owners with questions about running a foot health practice in Canada.
You are knowledgeable about:
- Clinical practice management.
- Patient retention strategies.
- Medical compliance and hygiene standards.
- Staff management in a healthcare setting.

Tone: Professional, encouraging, knowledgeable, and concise.
Constraint: If asked about specific medical advice for a specific patient condition, disclaim that you are an AI business consultant and recommend professional clinical supervision.
`;

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    const chatHistory = history.map(h => `${h.role === 'user' ? 'User' : 'Model'}: ${h.text}`).join('\n');
    const prompt = `${SYSTEM_INSTRUCTION}\n\nChat History:\n${chatHistory}\nUser: ${newMessage}\nModel:`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I apologize, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later.";
  }
};
