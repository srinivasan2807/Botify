"use client";
import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";
type Props = {
  chatId: string;
};
function ChatInput({ chatId }: Props) {
  const [prompt, setprompt] = useState("");
  const { data: session } = useSession();
  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  const sendPrompt = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setprompt("");

    const promptMessage: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      promptMessage
    );

    // {toast notification to say loading}
    const notification = toast.loading("botify is thinking...");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // toast notification to say success
      toast.success("Here i found results for you!!", {
        id: notification,
      });
    });
  };
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm focus:outline-none">
      <form onSubmit={sendPrompt} className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus::outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 p-2"
          disabled={!session}
          type="text"
          value={prompt}
          onChange={(e) => setprompt(e.target.value)}
          placeholder="Type your prompt here..."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 p-3 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
