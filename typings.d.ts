interface Message {
  text: string;
  createdAt: admin.firestore.TimeStamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

interface BotifyResponse {
	answer: string | null | undefined;
}