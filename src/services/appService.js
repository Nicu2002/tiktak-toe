import {resetTable, setDraw, setMove, setWin} from "../store/TableSlice";
import {doToggleTheme} from "../store/ThemeSlice";
import {doToggleSigns, setPlayers, setRound} from "../store/ScoreSlice";

export const onMove = (el, status, table, move, dispatch, {player1, player2}) => {
    if(status[0] === "process") {
        const cord = el.getAttribute("data-cord");
        if(table[cord] === null) {
            const newTable = {
                ...table,
                [cord]: move ? "X" : "O"
            }
            dispatch(setMove({table: newTable, move: !move, status: [status[0], status[1] + 1]}));
            const isFinished = checkStatus(newTable, status, dispatch);
            if (isFinished !== "process") {
                finishRound({player1, player2}, dispatch, isFinished);
            }
        }
    }
}

export const finishRound = ({player1, player2}, dispatch, winner) => {
    if (winner === player1.sign) {
        dispatch(setRound({player1: player1.score + 1, player2: player2.score}));
    } else {
        dispatch(setRound({player1: player1.score, player2: player2.score + 1}));
    }
}

export const onResetTable = (dispatch, player1) => {
    if(player1.sign === "O") {
        dispatch(doToggleSigns({player1: "X", player2: "O"}));
    }
    else {
        dispatch(doToggleSigns({player1: "O", player2: "X"}));
    }
    dispatch(resetTable())
}

export const checkStatus = (newTable, status, dispatch) => {
    for(let sign of ["X", "O"]) {
        switch (true) {
            case ["00", "01", "02"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "000102"}))
                return sign
            case ["10", "11", "12"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "101112"}))
                return sign
            case ["20", "21", "22"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "202122"}))
                return sign
            case ["00", "10", "20"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "001020"}))
                return sign
            case ["01", "11", "21"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "011121"}))
                return sign
            case ["02", "12", "22"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "021222"}))
                return sign
            case ["00", "11", "22"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "001122"}))
                return sign
            case ["02", "11", "20"].every(value => newTable[value] === sign):
                dispatch(setWin({sign: [sign], line: "021120"}))
                return sign
            default:
                if(status[1] === 8 && sign === "O") {
                    dispatch(setDraw())
                    return "draw"
                }
        }
    }
    return "process";
}

export const drawLine = (v, line) => {
    if(v === line) {
        switch (true) {
            case ["000102", "101112", "202122"].includes(line):
                return {transform: "translateX(25vmin) scaleX(50)"};
            case ["001020", "011121", "021222"].includes(line):
                return {transform: "translateY(25vmin) scaleY(50)"};
            case ["001122", "021120"].includes(line):
                return {transform: "translateX(32vmin) scaleX(65)"};
        }
    }
    return null;
}

export const toggleTheme = (theme, dispatch) => {
    if(theme.primeColor === "white") {
        dispatch(doToggleTheme({primeColor: "black", secColor: "white"}))
    }
    else {
        dispatch(doToggleTheme({primeColor: "white", secColor: "black"}))
    }
}

export const onStartGame = (player1, player2, setRestriction, dispatch, setIsOpen)=> {
    validateInput(player1, player2) ? savePlayers(player1, player2, dispatch, setIsOpen) : setRestriction(true);
}

export const validateInput = (input1, input2) => input1.length + input2.length >= 2 && input1 !== input2;

export const savePlayers = (player1, player2, dispatch, setIsOpen) => {
    dispatch(setPlayers({player1: {score: 0, name: player1, sign: "O"}, player2: {score: 0, name: player2, sign: "X"}}))
    setIsOpen(false);
}

export const getWinner = (status, {player1, player2}) => status[0] === player1.sign ?
    {name: player1.name, sign: player1.sign} :
    {name: player2.name, sign: player2.sign};

