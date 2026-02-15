
import { GoogleGenAI, Type } from "@google/genai";

export const getStyleConsultation = async (prompt: string, imageBase64?: string) => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("Gemini API Key is missing");
    return {
      styleName: "Configuration Error",
      description: "Please check your API key configuration.",
      maintenanceLevel: "N/A",
      suitability: "N/A"
    };
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = 'gemini-1.5-flash'; // Updated model name as well

  const systemInstruction = `You are an expert master barber at "VA Chop Shop" in Columbus, Ohio. 
  Your goal is to provide personalized haircut and grooming recommendations that are modern, sharp, and confident.
  Be professional, straightforward, and stylistically savvy.
  If an image is provided, analyze the face shape and hair texture for a "VA Chop Shop" style cut.
  If only text is provided, give the best advice based on the description.
  Recommend styles like fades, tapers, traditional pompadours, or clean beard sculpting.`;

  const contents: any[] = [{ text: prompt }];
  if (imageBase64) {
    contents.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: imageBase64.split(',')[1] || imageBase64
      }
    });
  }

  try {
    const response = await ai.models.generateContent({
      model,
      contents: { parts: contents },
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            styleName: { type: Type.STRING },
            description: { type: Type.STRING },
            maintenanceLevel: { type: Type.STRING },
            suitability: { type: Type.STRING }
          },
          required: ["styleName", "description", "maintenanceLevel", "suitability"]
        }
      }
    });

    return JSON.parse(response.text() || '{}');
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
