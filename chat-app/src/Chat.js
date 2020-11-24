import React, {useEffect, useState} from 'react'
import db, {auth} from './firebase';
import groupIcon from './assets/group.png'
import firebase from 'firebase'
import './Chat.css'

function Chat({user}) {
    console.log(user);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([])
    const logout = () => {
        auth.signOut()
    }

    useEffect(() => {
        if(user!=null ){
            db.collection('general').orderBy("timestamp", "desc").onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            });
        }
    },[user])

    const sendMsg = (event) => {
        event.preventDefault();
        if(input.trim !== ''){
            db.collection('general').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            });
        }
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__window">
                <div className="chat__window__header">
                    <img src={groupIcon} />
                    <h5>#general</h5>
                    <p>{user.name}</p>
                    <button onClick={logout}>Logout</button>
                </div>
                <div className="chat__window__body">
                    {messages.map((message) => (
                        <div className={message.user.uid === user.uid ? 'chat__window__message__user': 'chat__window__message__others' }>
                            <p>{message.message}</p>
                            <small>sent by: {message.user.name}</small>
                        </div>
                    ))}
                </div>
                <div className="chat__window__footer">
                    <form onSubmit={sendMsg}>
                        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
                        <button type="submit">Send</button>
                    </form>                    
                </div>
            </div>
        </div>
    )
}

export default Chat;
