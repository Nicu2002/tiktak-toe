import "./styles.css"

const Modal = ({status, winner, secColor}) => {
    return (
        <div id="modal-status" style={{color: secColor}}>
            {winner !== null ? `${winner.name}(${winner.sign}) win !` : status === "draw" ? "Draw" : null}
        </div>
    );
};

export default Modal;
