
import { GoogleGenAI, Modality } from "@google/genai";

// Initialize the Google GenAI client with the API key from environment variables.
// Always use the process.env.API_KEY directly as per SDK requirements.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a response from the AI tutor based on the user message and current slide context.
 * Uses gemini-3-flash-preview for fast and intelligent text generation.
 */
export const generateTutorResponse = async (userMessage: string, context: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Context: ${context}\n\nStudent: ${userMessage}`,
            config: {
                systemInstruction: "You are Captain AI, a friendly and professional naval English tutor. Your mission is to help students understand irregular verbs and past tense grammar. Keep your answers brief, encouraging, and in a professional naval tone.",
            },
        });

        // The response.text property directly returns the generated string output.
        return response.text || "I apologize, Cadet. I am unable to process that request at this moment.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Communication link unstable. Please try again later.";
    }
};

/**
 * Encodes Uint8Array to base64 string.
 */
function encode(bytes: Uint8Array): string {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Decodes base64 string to Uint8Array.
 */
function decode(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Decodes raw PCM audio data into an AudioBuffer.
 * As per guidelines, raw PCM data doesn't have headers and requires manual decoding.
 */
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Transforms text into audio using the gemini-2.5-flash-preview-tts model.
 * Returns an AudioBuffer for browser playback.
 */
export const generateSpeech = async (text: string): Promise<AudioBuffer | null> => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: [Modality.AUDIO],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) return null;

        const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioData = decode(base64Audio);
        
        return await decodeAudioData(audioData, outputAudioContext, 24000, 1);
    } catch (error) {
        console.error("Gemini TTS Error:", error);
        return null;
    }
};
