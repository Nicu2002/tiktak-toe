import "./styles.css";
import useLoginModalHook from "../../hooks/useLoginModalHook";

const LoginModal = ({isOpen, setIsOpen}) => {
    const {startGame, player1Ref, player2Ref, restriction} = useLoginModalHook(setIsOpen);

    return (
        <div id="login-modal" style={{display: isOpen ? "flex" : "none"}}>
            <div>
                <button className="close-btn" onClick={()=> setIsOpen(false)}>x</button>
                <input type="text" placeholder="player 1" ref={player1Ref} autoFocus/>
                <input type="text" placeholder="player 2" ref={player2Ref}/>
                <button id="start-btn" onClick={() => startGame(player1Ref.current.value, player2Ref.current.value)}>Start</button>
                <p className="restriction-modal" style={{display: restriction ? "block" : "none"}}>
                    * Not valid input ( length at least one symbol and not same inputs )
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
