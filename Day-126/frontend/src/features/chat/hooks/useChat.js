import { initializeSocketConnection } from "../service/chat.socket";
import { sendMessage, getChats, getMessages, deleteChat } from "../service/chat.api";
import { setChats, setCurrentChatId, setError, setLoading} from "../chat.slice";
import { useDispatch } from "react-redux";

export const useChat = () => {
    const dispatch = useDispatch();

    async function handleSendMessageToChat({chatId, message}) {
        dispatch(setLoading(true));
        const data = await sendMessage({ chatId, message });
        const { chat, aiMessage } = data;
        dispatch(setChats((prev) => {
            return {
                ...prev,
                [ chat.title ]: {
                    ...chat,
                    messages: [ { content: message, role: "user" }, aiMessage]
                },
            }
        }))
        dispatch(setCurrentChatId(chat._id));
    }

    return {
        initializeSocketConnection,
        handleSendMessage,
    } 
}