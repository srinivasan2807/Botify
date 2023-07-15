import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
type Props = {
  prompt: DocumentData;
};
function Message({ prompt }: Props) {
  const isBotify = prompt.user.name === "Botify";

  return (
    <div className={`py-5 text-white ${isBotify && "bg-[#434654]"} justify-start items-start`}>
      <div className="flex space-x-5 px-10 max-w-2xl">
        <Image src={prompt.user.avatar} alt="" width={32} height={32} />
        <p className="pt-3 sm:text-sm text-md">{prompt.text}</p>
      </div>
    </div>
  );
}

export default Message;
