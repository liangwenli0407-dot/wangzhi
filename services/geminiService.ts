import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the conversation history including the new message
    // We send a single prompt with context for a simple stateless chat experience or full history if using chat session
    // For this implementation, we will use the chat session to maintain context.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: `You are "Chen", the senior AI Consultant for "Dan Zhi Chen Technology Company" (丹之辰科技).
        
        Your Goal: Sell our two main products:
        1. AI Digital Human Live Streaming System (AI数字人直播系统): 
           - 24/7 broadcasting, no fatigue.
           - Real-time interaction with bullet screens (comments).
           - Costs < 10,000 RMB/year vs Human team > 100,000 RMB/year.
           - Supports multi-platform streaming.
           
        2. AI Super Employee (AI超级员工):
           - 1 computer = 100 sales reps.
           - Auto-generates 1000s of videos.
           - Auto-replies to private messages.
           - Activates dormant clients.
           - Roles: New Media Operator, After-sales, Gold Medal Sales.
        
        Tone: Professional, futuristic, enthusiastic, and helpful. Use emojis occasionally.
        Language: Simplified Chinese (unless the user speaks English).
        
        If asked about pricing, emphasize the cost-saving compared to humans.
        If asked about technology, mention "Real-time driving" and "High-fidelity cloning".
        `,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "抱歉，我现在无法回答，请稍后再试。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "系统繁忙，请检查网络或API Key设置。";
  }
};