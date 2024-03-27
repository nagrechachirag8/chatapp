import React from "react";
import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import { useSelector } from "react-redux";

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-2xl`
}
function Navbar() {
    const roomname = useSelector((state) => {
        return state.roomname.roomName
    });

    const [user] = useAuthState(auth);
    return(
            <div className={style.nav}>
                <h1 className={style.heading}>
                    {roomname ? roomname : 'Chat App'}
                </h1>
                { user ? <LogOut /> : <SignIn /> }
            </div>
    );
}

export default Navbar;