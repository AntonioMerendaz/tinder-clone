import React from 'react';
import './Chats.css';
import Chat from "./Chat"

function Chats() {
    return <div className="chats">
        <Chat
            name="Annie"
            message="Hey! how are you 😀"
            timestamp="35 minutes ago"
            profilePic="https://i.pinimg.com/736x/f6/32/36/f6323640b884465eb63683fb592d6d2a.jpg"
        />
        <Chat
            name="Stevie"
            message="Yo whats up!"
            timestamp="4 days ago"
            profilePic="https://www.morrisonhotelgallery.com/images/big/StevieNew_1Dec15LoRes.jpg"
        />
        <Chat
            name="Paul"
            message="Hello, bloke"
            timestamp="40 seconds ago"
            profilePic="https://vignette.wikia.nocookie.net/beatles/images/d/d9/853de2b8224c681079a3a66111bd97ec.jpg"
        />
        <Chat
            name="Miles"
            message="Cool"
            timestamp="1 week ago"
            profilePic="http://www.realizedsound.net/dac/wp-content/uploads/2010/02/miles.jpg"
        />
    </div>
}

export default Chats
