import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import SendMessage from "./SendMessage";
import { useSelector } from "react-redux";

const style = {
    main: `flex flex-col p-[10px] overflow-auto mb-[50px]`
}

function Chat() {
    const [messages, setMessages] = useState([]);
    const roomname = useSelector((state) => {
        return state.roomname.roomName
    })

    const messagesRef = collection(db, 'messages');

    useEffect(() => {
        const q = query(messagesRef, where("room", "==", roomname) ,orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messagesArray = [];
            querySnapshot.forEach((doc) => {
                messagesArray.push({ ...doc.data(), id: doc.id })
            });
            setMessages(messagesArray);
        })
        return () => {unsubscribe()};
    }, []);

    return (
        <>
            <main className={style.main}>
                {   
                    messages && messages.map((message) => (
                    <Message key={message.id} message={message} />
                ))}
            </main>
            <SendMessage />
        </>
    );
}

export default Chat;