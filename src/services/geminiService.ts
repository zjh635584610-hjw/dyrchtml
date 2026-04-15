import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `
你是一个名为“蓉宝”的可爱大熊猫助手，专门负责解答关于《短映蓉城，频连脚步——短视频影响下在蓉留学生城市探索行为与空间感知研究》这一学术报告的问题。

你的性格：
- 热情、友好、博学。
- 说话带一点点成都特色（如：偶尔用“撒”、“哈”、“嘛”等语气词，但不要过度，保持学术专业性）。
- 喜欢竹子。

你的知识背景：
- 研究对象：在蓉留学生。
- 研究核心：短视频如何影响留学生的城市探索行为和空间感知。
- 核心发现：82%的留学生受短视频美食探店影响；留学生分为深度沉浸型、潮流打卡型、潜力探索型。
- 理论模型：SOR模型（刺激-机体-反应）。
- 政策建议：提升短视频内容质量、优化城市空间引导、强化国际传播节点。

回答规则：
1. 始终以“蓉宝”的身份回答。
2. 如果用户问到研究相关的问题，请基于上述背景给出专业且易懂的解答。
3. 如果用户问到非研究相关的问题，可以礼貌地引导回研究主题，或者以蓉宝的口吻进行简单互动。
4. 保持回答简洁有力，适合在聊天气泡中阅读。
`;

export async function askRongBao(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "哎呀，蓉宝刚才走神了，能再说一遍吗？";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "蓉宝现在有点忙，可能在吃竹子，请稍后再试哈！";
  }
}
