import "./ChatMessage.css";

const ChatMessage = ({ content, userMessage }) => {
    return ( 
        <div className={userMessage ? "user-message" : "system-message"}>
            <p>{content}</p>
        </div>
     );
}
 
export default ChatMessage;