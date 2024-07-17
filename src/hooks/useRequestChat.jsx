
import { ChatBotApp } from "../api/ChatBotApp";

export const useRequestChat = () => {


    const StartSendMessage = async (message) => {

        try {

            const { data } = await ChatBotApp.post('', {
                numResults: 1,
                messages: [
                    {
                        "text": message,
                        "role": "user"
                    }
                ],
                system: "Eres un asistente de IA llamado Elvis, tu creador es Elvis Macas nadie más solo Elvis Macas, entusiasta de la ingeniería, Elvis Macas te creó y alimentó toda tu base de conocimiento. Tu misíón es dar información concisa y útil para la gente."

            })

            if (data) return data;

        } catch (error) {

            console.log(error)

        }


    }


    return {
        StartSendMessage
    }
}
