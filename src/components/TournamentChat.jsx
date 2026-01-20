import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import socket from "../socket.js";
import { toast } from "react-toastify";

const TournamentChat = () => {
  const { tournamentId } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  // 1️⃣ Join socket room + load history
  useEffect(() => {
    socket.emit("joinTournament", tournamentId);

    api.get(`/api/chat/tournament/${tournamentId}`)
      .then(res => setMessages(res.data.data));

    socket.on("receiveMessage", (msg) => {
      setMessages(prev => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, [tournamentId]);

  // 2️⃣ Send message
 const sendMessage = async () => {
  if (!text.trim()) return;

  try {
    const res = await api.post(
      `/api/chat/tournament/${tournamentId}/send`,
      { message: text }
    );

    socket.emit("sendMessage", res.data.data);
    setText("");

  } catch (err) {
    if (err.response?.status === 403) {
      toast.error(err.response.data.message || "Enroll first");
    } else {
      toast.error("Something went wrong");
    }
  }
};


  return (
   <div className=" h-screen bg-gradient-to-br from-zinc-100 to-blue-100 flex items-center justify-center px-3 sm:px-6">
  {/* Chat Container */}
  <div className="w-full max-w-3xl mt-20 h-[80vh]  bg-white rounded-xl shadow-xl flex flex-col overflow-hidden">
    
    {/* Header */}
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-400">
      <div>
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">
          Tournament Chat
        </h1>
        <p className="text-xs text-gray-500">
          Live discussion & updates
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        <span className="text-gray-600">Online</span>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 overflow-y-auto px-3 sm:px-5 py-4 space-y-4 scrollbar-thin">
      {messages.map((m) => {
        const isAdmin = m.senderRole === "admin";

        return (
          <div
            key={m._id}
            className={`flex ${isAdmin ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-[70%] px-4 py-2 rounded-2xl shadow
                ${
                  isAdmin
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
            >
              <p className="text-sm leading-relaxed">{m.message}</p>
              <span className="block mt-1 text-[10px] opacity-70 text-right">
                {isAdmin ? "Admin" : "User"}
              </span>
            </div>
          </div>
        );
      })}
    </div>

    {/* Input */}
    <div className="border-t border-gray-400 px-3 sm:px-4 py-3 bg-white">
      <div className="flex items-center gap-2 sm:gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 text-sm border rounded-full
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={sendMessage}
          disabled={!text.trim()}
          className="px-4 sm:px-5 py-2 bg-blue-600 text-white text-sm rounded-full
                     hover:bg-blue-700 transition disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>

  </div>
</div>

  );
};

export default TournamentChat;
