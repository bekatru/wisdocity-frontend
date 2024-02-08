import React, { useState } from "react";
// import { XIcon } from "@heroicons/react/20/solid";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput('');
    setTimeout(() => {
      setMessages([...messages, { text: 'This is a response from the chatbot', isUser: false }]);
    }, 1000);
  };

  return (
    <>
      <div className="h-48 overflow-y-scroll border border-gray-300 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.isUser ? 'text-right' : 'text-left'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input type="text" value={input} onChange={handleInputChange} className="flex-1 mr-2 px-4 py-2 border border-gray-300" />
        <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-500 text-white">Send</button>
      </div>
    </>
  );
};

export function AvatarTestModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="float-right">
        <button
          type="button"
          className="text-purple-800 bg-transparent font-semibold rounded-full px-10 py-2 border border-purple-800 mb-4 flex float-right"
          onClick={openModal}
        >
          Test avatar
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-2xl w-full mx-auto z-50 bg-white shadow p-6 mb-12">
            <div>
              <div className="text-center font-bold text-2xl text-gray-800 mb-6">
                Test Avatar
                <div
                  className="float-right w-6 h-6 mt-1 cursor-pointer"
                  onClick={closeModal}
                >
                  {/* <XIcon /> */}
                </div>
              </div>

              <div className="bot-outer">
                <ChatBot />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="bg-white text-purple-800 border border-purple-800 px-8 py-2 rounded-full hover:text-gray-700 w-1/2 mr-2"
                  onClick={closeModal}
                >
                  Save
                </button>
                <button
                  className="bg-purple-800 text-white border border-purple-800 px-8 py-2 rounded-full w-1/2 ml-2"
                  onClick={closeModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
