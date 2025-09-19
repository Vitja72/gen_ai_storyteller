import OpenAi from "openai";
import dotenv from "dotenv";

dotenv.config();
const openai = new OpenAi({apiKey: process.env.OPENAI_API_KEY});

export class StorytellerAgent {

    constructor(persona, storyline) {
        this.persona = persona;
        this.storyline = [storyline];
    }

    async continueStory(userPrompt) {
            const messages = [
                { role: "system", content: this.persona },
                { role: "user", content: `Setze das folgende Märchen fort. Der bisherige Teil ist: "${this.storyline.join(' ')}". Der Zuhörer möchte das du: "${userPrompt}". Generiere drei bis fünf Sätze, und baue eine unerwartete Wendung in die Handlung ein. `}
        ];

            const completion = await openai.chat.completions.create({
                messages: messages,
                model: "gpt-4.1-nano"
            });

            console.log(completion.choices[0]);

    }
}