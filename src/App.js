import React from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase/firebase-config";
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);

  React.useEffect(() => {
    document.title = 'Chat App';
  }, []);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {/* {user ? <Chat /> : null} */}
        { user ? <ChatRoom /> : null }
      </section>
    </div>
  );
}

export default App;
