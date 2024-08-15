import "./Stage.css";
import VideoStageFinish from "./VideoStageFinish";
import { Link } from "react-router-dom";
import { useState } from "react";

const Stage = ({ change, stage }) => {
    const setStage = change;
    var output = null;
    
    const [ videoEnded, setVideoEnded ] = useState(false);

    if (stage === 0) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    Welcome to support. How can we help you today?
                </p>
                <button onClick={() => setStage(1)}>Create support chat</button>
            </div>
        );
    } else if (stage === 1) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    Are you sure you want to create a support chat?
                </p>
                <button onClick={() => setStage(2)}>Yes</button>
            </div>
        );
    } else if (stage === 2) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You really want to create a support chat? You really have to be sure.
                </p>
                <button onClick={() => setStage(3)}>Yes</button>
            </div>
        );
    } else if (stage === 3) {
        output = (
            <div className="stage">
                <h2>DON'T Contact us</h2>
                <p>
                    Please, don't make we do this, we don't want to talk to you.
                </p>
                <button onClick={() => setStage(4)}>I need help</button>
            </div>
        );
    } else if (stage === 4) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You don't need help, why would you need help, you are a strong independent person.
                </p>
                <button onClick={() => setStage(5)}>I'm not</button>
            </div>
        );
    } else if (stage === 5) {
        output = (
            <div className="stage">
                <h2>PLEASE NO</h2>
                <pre>
                PLEASE NO PLEASE NO PLEASE NO PLEASE NO PLEASE NO PLEASE NO
                please don't contact us
                </pre>
                <button onClick={() => setStage(6)}>Create support chat</button>
            </div>
        );
    } else if (stage === 6) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    Please check if this video solves your problem.
                </p>
                <video src="/tutorial.mp4" controls onEnded={() => setVideoEnded(true)}></video>
                <VideoStageFinish setStage={setStage} videoEnded={videoEnded} />
            </div>
        );
    } else if (stage === 7) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    It 100% solves your problem, right? This video is so good.
                </p>
                <button onClick={() => setStage(8)}>No</button>
            </div>
        );
    } else if (stage === 8) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You are sure you want to contact us now?
                </p>
                <button onClick={() => setStage(9)}>Yes</button>
            </div>
        );
    } else if (stage === 9) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You are going to contact us now, right?
                </p>
                <button onClick={() => setStage(10)}>Yes</button>
            </div>
        );
    } else if (stage === 10) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You are really going to contact us now, right?
                </p>
                <button onClick={() => setStage(11)}>Yes</button>
            </div>
        );
    } else if (stage === 11) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    I hate you.
                </p>
                <button onClick={() => setStage(12)}>Why</button>
            </div>
        );
    } else if (stage === 12) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    What's your problem, you never give up, we will not help you.
                </p>
                <button onClick={() => setStage(13)}>Why</button>
            </div>
        );
    } else if (stage === 13) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    You are still here, why are you still here?
                </p>
                <button onClick={() => setStage(14)}>idk</button>
            </div>
        );
    } else if (stage === 14) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    I'm almost giving up on you.
                </p>
                <button onClick={() => setStage(15)}>Why</button>
            </div>
        );
    } else if (stage === 15) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    I'm giving up on you.
                </p>
                <button onClick={() => setStage(16)}>Why</button>
            </div>
        );
    } else if (stage === 16) {
        output = (
            <div className="stage">
                <h2>Contact us</h2>
                <p>
                    Here is your support chat. {">:("}
                </p>
                <Link to="/chat">Chat</Link>
            </div>
        );
    }

    return output;
}
 
export default Stage;