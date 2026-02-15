
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStyleConsultation = async (prompt: string, imageBase64?: string) => {
  const model = 'gemini-3-flash-preview';
  
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

  return JSON.parse(response.text || '{}');
};
