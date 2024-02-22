
import React, { useState, useEffect } from 'react';
import sb from '@/utils/sendbird';
import ChatMessage from './ChatMessage';

function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        // Connect to Sendbird with a user ID and access token
        sb.connect('test_user_123', 'f93b05ff359245af400aa805bafd2a091a173064', (user, error) => {
            if (error) {
                console.error(error);
                return;
            }

            
            sb.OpenChannel.getChannel('sendbird_open_channel_14092_bf4075fbb8f12dc0df3ccc5c653f027186ac9211', (channel, error) => {
                if (error) {
                    console.error(error);
                    return;
                }

                channel.enter((response, error) => {
                    if (error) {
                        console.error(error);
                        return;
                    }

                    setChannel(channel);
                });
            });
        });
    }, []);

    const sendMessage = () => {
        if (channel && input.trim()) {
            channel.sendUserMessage(input, (message, error) => {
                if (error) {
                    console.error(error);
                    return;
                }

                setMessages([...messages, message]);
                setInput('');
            });
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatRoom;
