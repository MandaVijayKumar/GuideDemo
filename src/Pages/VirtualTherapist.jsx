import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { authContext } from '../Context';
import vimage from '../Asserts/images/virtualtherapist.jpg'

const ChatContainer = styled.div`
    max-width: 500px;
    margin: 30px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid #1A857F;
`;

const MessageContent = styled.div`
    display: flex;
    align-items: center;
    &.student {
        flex-direction: row-reverse;
    }
    &.therapist {
        flex-direction: row;
    }
`;

const Messages = styled.div`
    max-height: 300px;
    overflow-y: scroll;
    border: 1px solid #e0e0e0;
    padding: 10px;
    margin-bottom: 20px;
`;


const Message = styled.div`
    margin: 10px 0;
    padding: 8px 12px;
    border-radius: 15px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05); // subtle shadow for depth
    color: #333;  // general text color for good readability
    &.student {
        align-self: flex-start;
        background-color: #C8E6C9; // soft green
        color: #2E7D32;  // dark green text
    }
    &.therapist {
        align-self: flex-end;
        background-color: #E6E6FA;  // soft lavender
        color: #4B0082;  // deep purple text
    }
    
    .sender {
        font-weight: bold;
        margin-bottom: 5px;
    }
    .content {
        margin: 0;
    }
`;



const InputArea = styled.div`
    display: flex;
    gap: 10px;
`;

const Input = styled.input`
    flex-grow: 1;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
`;

const Button = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #1A857F;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #0056b3;
    }
`;

const VirtualTherapist = () => {
    const userData = useContext(authContext);
    const { user } = userData;
    console.log('sidebar', user);
    const [messages, setMessages] = useState([{ 
        sender: 'Therapist', 
        text: `Hello ${user.userName}, I am glad you reached out.` 
      },
      { 
        sender: 'Therapist', 
        text: 'As a student, it is essential to address mental health. How can I assist you today?' 
      }
      
      ]);
    const [input, setInput] = useState('');


    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = async () => {
        if (input.trim()) {
            setMessages(prev => [...prev, { sender: 'student', text: input.trim() }]);
            setInput('');

            try {
                const response = await axios.post('/api/get-response', { message: input.trim() });
                if (response.data && response.data.reply) {
                    setMessages(prev => [...prev,
                    { sender: 'therapist', text: response.data.reply }
                    ]);
                }
            } catch (error) {
                console.error("Error getting response:", error);
            }
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };


    return (
        <ChatContainer>
            <Messages>
                {messages.map((message, index) => (
                    <Message key={index} className={message.sender}>
                        <MessageContent className={message.sender}>
                            <ProfileImage
                                src={message.sender === "student" ? user.userPhoto : vimage}
                                alt={message.sender}
                            />
                            <div>
                                <div className="sender">
                                    {message.sender === "student" ? "Student" : "Therapist"}
                                </div>
                                <div className="content">
                                    {message.text}
                                </div>
                            </div>
                        </MessageContent>
                    </Message>
                ))}

                <div ref={messagesEndRef}></div>
            </Messages>

            <InputArea>
                <Input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                />

                <Button onClick={handleSend}>Send</Button>
            </InputArea>
        </ChatContainer>
    );
};

export default VirtualTherapist;

