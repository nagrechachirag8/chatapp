import React, { useEffect, useRef } from "react";
import { auth } from "../firebase/firebase-config";

const style={
    messageContainer: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    user: `absolute whitespace-nowrap mt-[-4rem] text-gray-600 text-[11px]`,
    sent: `relative bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `relative bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

function Message({ message }) {
    const messageClass = message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return(
        <div ref={ref}>
            <div className={`${style.messageContainer} ${messageClass}`}>
                <span className={style.user}>
                    {message.name}
                </span>
                <span>
                    {message.text}
                </span>
            </div>
        </div>
    );
}

export default Message;