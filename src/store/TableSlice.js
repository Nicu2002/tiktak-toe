import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    table: {
        "00": null,
        "01": null,
        "02": null,
        "10": null,
        "11": null,
        "12": null,
        "20": null,
        "21": null,
        "22": null
    },
    move: false,
    status: ["process", 0],
    line: ""
}

const TableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setMove(state, {payload: {table, move, status}}) {
            state.table = {...table};
            state.move = move;
            state.status = status
        },
        setWin(state, {payload: {sign, line}}) {
            state.status = sign;
            state.line = line;
        },
        setDraw(state) {
            state.status = ["draw", 9];
        },
        resetTable(state) {
            state.table = {...initialState.table}
            state.status = ["process", 0]
            state.move = false
            state.line = ""
        }
    }
})

export const {setMove, setWin, setDraw, resetTable} = TableSlice.actions
export default TableSlice.reducer;
