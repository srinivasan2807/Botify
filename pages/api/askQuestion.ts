import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryapi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).send({ answer: "Please provide a prompt" });
    return;
  }
  if (!chatId) {
    res.status(400).send({ answer: "please provide a valid chat ID!" });
    return;
  }
  const response = await query(prompt, chatId, model);

  const promptMessage: Message = {
    text: response || "Sorry! iam unable to give answer for Question!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "Botify",
      name: "Botify",
      avatar: "/botifylogo.png",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(promptMessage);
  res.status(200).json({ answer: promptMessage.text });
}
