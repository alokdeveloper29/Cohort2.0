import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useChat } from '../hooks/useChat'

const Dashboard = () => {
    const chat = useChat()
    const { user } = useSelector(state => state.auth)

    useEffect(() => {
        chat.initializeSocketConnection()
    }, [chat])

    return (
        <main className="min-h-screen bg-neutral-950 text-slate-100">
            <div className="mx-auto flex min-h-screen max-w-[1440px] gap-6 px-4 py-6 lg:px-8">
                <aside className="flex w-full max-w-[320px] flex-col gap-6 rounded-[32px] border border-white/10 bg-neutral-900/80 p-5 shadow-[0_0_60px_rgba(15,23,42,0.35)]">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Perplexity</p>
                        <h1 className="mt-3 text-2xl font-semibold text-white">AI Chat</h1>
                        <p className="mt-2 text-sm text-slate-400">Select a conversation or start a new one.</p>
                    </div>

                    <div className="space-y-3">
                        {['Chat title', 'Chat title', 'Chat title', 'Chat title', 'Chat title', 'Chat title'].map((title, index) => (
                            <button
                                key={index}
                                type="button"
                                className="w-full rounded-2xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-neutral-900"
                            >
                                {title}
                            </button>
                        ))}
                    </div>

                    <button className="mt-auto rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                        + New Chat
                    </button>
                </aside>

                <section className="flex flex-1 flex-col gap-6">
                    <div className="rounded-[32px] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_0_60px_rgba(15,23,42,0.25)]">
                        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Conversation</p>
                                <h2 className="mt-2 text-3xl font-semibold text-white">{user?.name ?? 'Your Chat'}</h2>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 text-sm text-slate-300">
                                Active
                            </div>
                        </div>

                        <div className="min-h-[420px] rounded-[28px] border border-white/10 bg-neutral-950/80 p-5">
                            <div className="flex h-full flex-col justify-between gap-5">
                                <div className="space-y-5 overflow-y-auto pr-1">
                                    <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-5 text-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">AI message</p>
                                        <p className="mt-3 leading-7 text-slate-200">
                                            Welcome to the chat. Type a message below to begin your conversation with the AI assistant.
                                        </p>
                                    </div>
                                    <div className="rounded-[24px] border border-white/10 bg-neutral-900/80 p-5 text-slate-200">
                                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">User message</p>
                                        <p className="mt-3 leading-7 text-slate-200">
                                            Hi there! This is a preview of your current conversation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 rounded-[28px] border border-white/10 bg-neutral-950/80 p-4">
                            <label htmlFor="chat-input" className="sr-only">Chat input</label>
                            <textarea
                                id="chat-input"
                                rows="3"
                                className="w-full resize-none rounded-3xl border border-white/10 bg-neutral-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                                placeholder="Enter your message..."
                            />
                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-slate-500">Press Enter to send your message.</p>
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Dashboard
