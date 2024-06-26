import React, { useState } from "react";
import { auth, db } from "../firebase/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`
}

function SendMessage() {
    const [input, setInput] = useState('');
    const roomname = useSelector((state) => {
        return state.roomname.roomName
    })

    const sendMessage = async (e) => {
        e.preventDefault();

        if(input === ''){
            alert('Please enter a valid message')
            return
        }

        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp(),
            room: roomname
        })

        setInput('');
    }

    return(
        <form onSubmit={sendMessage} className={style.form}>
            <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={style.input} 
                type="text" 
                placeholder="Type your message here..."
            />
            <button className={style.button} type="submit">Send</button>
        </form>
    );
}

export default SendMessage;