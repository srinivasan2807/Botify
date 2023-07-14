import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
type Props = {
  prompt: DocumentData;
};
function Message({ prompt }: Props) {
  const isBotify = prompt.user.name === "Botify";

  return (
    <div className={`py-5 text-white ${isBotify && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={prompt.user.avatar} alt="" className="w-8 h-8" />
        <p className="pt-3 text-sm">{prompt.text}</p>
      </div>
    </div>
  );
}

export default Message;
