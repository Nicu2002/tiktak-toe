import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    player1: {score: 0, name: "player1", sign: "O"},
    player2: {score: 0, name: "player2", sign: "X"}
}

const ScoreSlice = createSlice({
    name: "score",
    initialState,
    reducers: {
        setPlayers(state, {payload: {player1, player2}}) {
            state.player1 = player1
            state.player2 = player2
        },
        setRound(state, {payload: {player1, player2}}) {
            state.player1 = {...state.player1, score: player1}
            state.player2 = {...state.player2, score: player2}
        },
        doToggleSigns(state, {payload: {player1, player2}}) {
            state.player1 = {...state.player1, sign: player1}
            state.player2 = {...state.player2, sign: player2}
        },
        resetScore(state) {
            state.player1 = {...state.player1, sign: "O", score: 0}
            state.player2 = {...state.player2, sign: "X", score: 0}
        }
    }
})

export const {setPlayers, setRound, resetScore, doToggleSigns} = ScoreSlice.actions
export default ScoreSlice.reducer;
