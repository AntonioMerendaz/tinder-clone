import React from 'react'
import { useState } from 'react'
import './ChatScreen.css'
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Annie",
            image: "https://img.discogs.com/TNhRCkA0KBWRaL1FgvyjXvPiRyI=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-23825-1494576480-7697.jpeg.jpg",
            message: "Hey! how are you 😀"
        },
        {
            name: "Annie",
            image: "https://img.discogs.com/TNhRCkA0KBWRaL1FgvyjXvPiRyI=/600x600/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-23825-1494576480-7697.jpeg.jpg",
            message: "How is it going?"
        },
        {
            message: "I'm good!"
        }

    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ANNIE ON 10/09/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image"
                            alt={message.name}
                            src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            )
            )}
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}
export default ChatScreen