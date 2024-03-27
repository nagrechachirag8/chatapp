import React, { useRef, useState } from "react";
import Chat from "./Chat";
import { useDispatch } from "react-redux";
import { setRoomName } from '../Store/Slices/roomNameSlice'

const style = {
    formContainer: `items-center justify-center flex flex-col p-20 m-2 mt-[10%]`,
    room: `flex flex-col`,
    label: `text-left text-l pr-0 pt-1.5 text-solid`,
    input: `mt-1.5 mr-0 px-2.5 py-2.5 rounded-lg`,
    button: `border border-solid border-black px-2.5 py-2.5 rounded-lg mt-2.5`
}

function ChatRoom() {
    const [room, setRoom] = useState(null);
    const roomInputRef = useRef(null);

    const dispatch = useDispatch();
    dispatch(setRoomName(room));

    return(
        <div>
            {
                room ? (<Chat /> ) : (
                                        <div className={style.formContainer}>
                                            <div className={style.room}>
                                                <label className={style.label}>Enter room name</label>
                                                <input className={style.input} type="text" placeholder="room name" ref={roomInputRef} />
                                                <button className={style.button} onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
                                            </div>
                                        </div>
                                     )
            }
        </div>
    );
}

export default ChatRoom;