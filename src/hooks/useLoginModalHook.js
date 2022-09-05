import {useDispatch} from "react-redux";
import {useRef, useState} from "react";
import {onStartGame} from "../services/appService";

const useLoginModalHook = (setIsOpen) => {
    const dispatch = useDispatch();
    const [restriction, setRestriction] = useState(false);
    const player1Ref = useRef();
    const player2Ref = useRef();

    const startGame = (player1, player2) => onStartGame(player1, player2, setRestriction, dispatch, setIsOpen);


    return {startGame, player1Ref, player2Ref, restriction}
}

export default useLoginModalHook;
