
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
                system: "You are an AI assistant named Elvis for anything conversation. Your responses should be informative and concise."

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
