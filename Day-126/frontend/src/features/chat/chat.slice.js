import { createSlice, current } from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        chats: {},
        currentChatId: null,
        isLoading: false,
        error: null
    },
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload
        },
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const { setChats, setCurrentChatId, setLoading, setError } = chatSlice.actions
export default chatSlice.reducer

chats = {
    "docker and AWS": {
        messages: [
            {
                role: "user",
                content: "What is the difference between docker and AWS?"
            },
            {
                role: "ai",
                content: "Docker is a platform for creating, deploying, and managing containerized applications, while AWS is a cloud computing platform that provides a wide range of services for building and running applications in the cloud."
            }
        ],
        id: "docker and AWS",
        lastUpdated: "2024-06-01T12:00:00Z"
    }
}