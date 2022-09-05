import "./styles.css";
import {useDispatch, useSelector} from "react-redux";
import {resetScore} from "../../store/ScoreSlice";

const ScoreBoard = ({setIsOpen}) => {
    const {player1, player2} = useSelector(state => state.score);
    const {primeColor, secColor} = useSelector(state => state.theme);

    const dispatch = useDispatch();

    return (
        <div id="score-board" style={{color: secColor}}>
            <div>{player1.sign} ~ {player1.name}: {player1.score}</div>
            |
            <div>{player2.sign} ~ {player2.name}: {player2.score}</div>
            <div id="score-board-buttons">
                <button
                    onClick={()=> setIsOpen(true)}
                    style={{color: primeColor, backgroundColor: secColor}}
                >
                    Reset players
                </button>
                <button
                    onClick={() => dispatch(resetScore())}
                    style={{color: primeColor, backgroundColor: secColor}}
                >
                    Reset score
                </button>
            </div>
        </div>
    );
};

export default ScoreBoard;
