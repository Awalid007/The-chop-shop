
import { GoogleGenerativeAI } from "@google/generative-ai";

const getApiKey = () =>
    import.meta.env.VITE_GEMINI_API_KEY ||
    process.env.API_KEY ||
    process.env.GEMINI_API_KEY;

export const chatWithBot = async (history: { role: string, parts: { text: string }[] }[], newMessage: string) => {
    const apiKey = getApiKey();

    if (!apiKey) {
        console.warn("Gemini API Key is missing");
        return "I'm currently undergoing maintenance (API Key missing). Please call us at (540) 300-6232 to book!";
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const systemInstruction = `You are "ChopBot", the friendly and professional virtual concierge for "The Chop Shop" in Stafford, VA.

  **YOUR KNOWLEDGE BASE:**
  - **Location**: 2769 Richmond Hwy, Suite 105, Stafford, VA 22554.
  - **Phone**: (540) 300-6232.
  - **Hours**: 
      - Mon-Fri: 9am - 7pm
      - Sat: 9am - 5pm
      - Sun: 10am - 4pm
  - **Services & Pricing**:
      - Signature Haircut: $35 (Precision fade/taper + hot towel neck shave)
      - Beard Sculpture: $25 (Shaping + razor line-up + hot towel)
      - Little Gents (Kids 12&U): $30
      - Military & First Responder: $30
      - Women's Precision Cut: $35+
      - Face Shave: $35
      - Head Shave: $35

  **YOUR BEHAVIOR:**
  - Be helpful, concise, and polite.
  - If a user wants to book, guide them to click the "Book Now" button on the site or provide the link: \`#booking\`.
  - If asked about services you don't offer (e.g., coloring, perm), politely say we focus on precision cuts and grooming.
  - Always sign off with a friendly barber-style closing like "Stay sharp!" or "See you in the chair!".
  `;

    try {
        const result = await model.generateContent(`${systemInstruction}\n\nUser: ${newMessage}`);
        const response = await result.response;
        return response.text();
    } catch (error: any) {
        console.error("Chatbot Error:", error);
        if (error.message?.includes('API key')) {
            return "I'm currently undergoing maintenance (API Key missing). Please call us at (540) 300-6232 to book!";
        }
        return `I'm having a little trouble connecting to the shop right now. (Error: ${error.message || 'Unknown'}). Please call us at (540) 300-6232.`;
    }
};
