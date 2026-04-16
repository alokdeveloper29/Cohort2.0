import "dotenv/config"
import reedline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai"
import { createAgent, tool, HumanMessage } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod"

const emailTool = tool(
    sendEmail,
    {
        name: "emailTool",
        description: "Use this tool to send an email",
        schema: z.object({
            to: z.string().describe("The recipient's email address"),
            html: z.string().describe("The HTML content of the email"),
            subject: z.string().describe("The subject of the email")
        })
    }
)

const rl = reedline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const model = new ChatMistralAI({
    model: "mistral-small-latest",
})

const agent = createAgent({
    model,
    tools: [ emailTool ]
})

const messages = []

while(true){
    const userInput = await rl.question("You: ")
    messages.push(new HumanMessage(userInput))

    const responce = await agent.invoke({
        messages
    })
    messages.push(responce.messages[ responce.messages.length - 1 ])

    console.log(responce)
}

