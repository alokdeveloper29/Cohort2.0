import "dotenv/config"
import reedline from "readline/promises"
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage } from "@langchain/core/messages";

const msg = new HumanMessage("Hello AI");
console.log(msg);

const rl = reedline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const model = new ChatMistralAI({
    model: "mistral-small-latest",
})

const messages = []

while(true){
    const userInput = await rl.question("You: ")
    messages.push(new HumanMessage(userInput))

    const responce = await model.invoke(messages)
    messages.push(responce)

    console.log("AI => " + responce.text)
}

rl.close()