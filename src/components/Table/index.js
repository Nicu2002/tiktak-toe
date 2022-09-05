import Modal from "../Modal";
import useTableHook from "../../hooks/useTableHook";
import "./styles.css";

const Table = () => {
    const {table, status, doMove, doDrawLine, doReset, primeColor, secColor, winner} = useTableHook();

    return (
        <>
            <Modal status={status} winner={winner} secColor={secColor}/>
            <div id="table">
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="00"
                    onClick={(e) => doMove(e.target)}
                >
                    <div
                        id="line-000102"
                        style={doDrawLine("000102")}
                    >
                    </div>
                    <div
                        id="line-001020"
                        style={doDrawLine("001020")}
                    >
                    </div>
                    <div
                        id="line-001122"
                        style={doDrawLine("001122")}
                    >
                    </div>
                    {table["00"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="01"
                    onClick={(e) => doMove(e.target)}
                >
                    <div
                        id="line-011121"
                        style={doDrawLine("011121")}
                    >
                    </div>
                    {table["01"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="02"
                    onClick={(e) => doMove(e.target)}
                >
                    <div
                        id="line-021222"
                        style={doDrawLine("021222")}
                    >
                    </div>
                    {table["02"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="10"
                    onClick={(e) => doMove(e.target)}
                >
                    <div
                        id="line-101112"
                        style={doDrawLine("101112")}
                    >
                    </div>
                    {table["10"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="11"
                    onClick={(e) => doMove(e.target)}
                >
                    {table["11"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="12"
                    onClick={(e) => doMove(e.target)}
                >
                    {table["12"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="20"
                    onClick={(e) => doMove(e.target)}
                >
                    <div
                        id="line-202122"
                        style={doDrawLine("202122")}
                    >
                    </div>
                    <div
                        id="line-021120"
                        style={doDrawLine("021120")}
                    >
                    </div>
                    {table["20"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="21"
                    onClick={(e) => doMove(e.target)}
                >
                    {table["21"]}
                </div>
                <div
                    style={{borderColor: secColor, color: secColor}}
                    data-cord="22"
                    onClick={(e) => doMove(e.target)}
                >
                    {table["22"]}
                </div>
            </div>
            <button
                style={{backgroundColor: secColor, color: primeColor}}
                id="reset-btn"
                onClick={doReset}
            >
                Reset
            </button>
        </>
    );
};

export default Table;
