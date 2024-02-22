
import React from 'react';

const ChatPage = () => {
  // This array is just for demonstration and will be replaced with your dynamic messages.
  const messages = [
    { id: 1, text: '오늘 저녁 시간 괜찮으신가요?', sender: 'other' },
    { id: 2, text: '네! 어떤 일로 물어보시나요?', sender: 'me' },
    // Add more messages here...
  ];

  return (
    <div className="flex flex-col h-[700px] bg-black w-full justify-end">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button>&lt;</button>
        <h1 className="text-white">채팅방</h1>
        <button>≡</button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'me' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={` px-4 py-2 text-white ${
                message.sender === 'me'
                  ? 'bg-pink-700  rounded-b-full rounded-tl-full rounded-tr-md'
                  : 'bg-gray-700 text-gray-900  rounded-t-full rounded-br-full rounded-bl-md'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4">
        <button className="text-white mr-4">+</button>
        <input
          type="text"
          placeholder="메시지 보내기"
          className="flex-1 p-2 rounded bg-gray-800 text-white placeholder-gray-500"
        />
        <button className="text-pink-500 ml-4">↩</button>
      </div>
    </div>
  );
};

export default ChatPage;
