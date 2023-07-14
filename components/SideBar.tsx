"use client";
import React from "react";
import NewChat from "./NewChat";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div
          onClick={() => signOut()}
          className="flex px-14 justify-center items-center text-white"
        >
          <Image
            src={session.user?.image!}
            alt="user-avatar"
            width={48}
            height={48}
            className="rounded-full cursor-pointer mx-auto mb-2"
          />
          <span className="font-bold mb-2">{session.user?.name!}</span>
        </div>
      )}
    </div>
  );
}

export default SideBar;
