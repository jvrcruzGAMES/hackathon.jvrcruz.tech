const VideoStageFinish = ({ setStage, videoEnded }) => {
    if (!videoEnded) {
        return (
            <div>
                <h4>See the full video before continuing</h4>
            </div>
        );
    } else {
        return ( 
            <div>
                <button onClick={() => setStage(7)}>No</button>
                <button onClick={() => setStage(0)}>Yes</button>
            </div>
        );
    }
}
 
export default VideoStageFinish;