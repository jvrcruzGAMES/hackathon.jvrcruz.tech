import { useState } from "react";
import "./Puzzle.css";

import Stage from "./Stage";

const Puzzle = () => {
    const [stage, setStage] = useState(0);
    return ( 
        <div className="support-puzzle">
            <Stage stage={stage} change={(toSet) => setStage(toSet)}></Stage>
        </div>
     );
}
 
export default Puzzle;