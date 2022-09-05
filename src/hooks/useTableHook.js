import {drawLine, getWinner, onMove, onResetTable} from "../services/appService";
import {useDispatch, useSelector} from "react-redux";


const useTableHook = ()=> {
    const {table, move, status, line} = useSelector(state => state.table);
    const {primeColor, secColor} = useSelector(state => state.theme);
    const {player1, player2} = useSelector(state => state.score)
    const dispatch = useDispatch();

    const doMove = (el) => onMove(el, status, table, move, dispatch, {player1, player2});
    const doDrawLine = (v) => drawLine(v, line);
    const doReset = () => onResetTable(dispatch, player1);
    const winner = status[0] !== "process" && status[0] !== "draw" ? getWinner(status, {player1, player2}) : null;

    return {table, status:status[0], doMove, doDrawLine, doReset, primeColor, secColor, winner};
}

export default useTableHook;
