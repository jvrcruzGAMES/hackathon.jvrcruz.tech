import Header from "./Header";
import "./Chat.css";
import ChatMessage from "./ChatMessage";

const Chat = () => {
    return ( <div>
        <Header title="Chat"></Header>
        <main>
            <ChatMessage content={"Chat is unavailable at the moment, listen to some music while you wait"} userMessage={true}></ChatMessage>
            <audio src="/music.mp3" controls controlsList="nodownload"></audio>
        </main>
    </div> );
}
 
export default Chat;