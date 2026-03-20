import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/useAuth";
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  serverTimestamp,
  Timestamp 
} from "firebase/firestore";

export interface Message {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  createdAt: Timestamp | null;
}

export function useChat() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setMessages([]);
      setLoading(false);
      return;
    }

    // Creating a unique chat room for the user vs nurse
    const chatRoomId = `chat_${user.uid}`;
    const q = query(
      collection(db, "chats", chatRoomId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = [];
      snapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() } as Message);
      });
      setMessages(msgs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const sendMessage = async (text: string) => {
    if (!user || !text.trim()) return;

    const chatRoomId = `chat_${user.uid}`;
    
    // Optimistic UI update could be handled in local state, 
    // but Firestore's onSnapshot listener runs immediately for local writes!
    await addDoc(collection(db, "chats", chatRoomId, "messages"), {
      text,
      senderId: user.uid,
      senderName: user.displayName || "Patient",
      createdAt: serverTimestamp(),
    });
  };

  return { messages, sendMessage, loading };
}
