import Table from "../Table";
import {useState} from "react";
import {toggleTheme} from "../../services/appService";
import "./styles.css";
import ScoreBoard from "../ScoreBoard";
import LoginModal from "../LoginModal";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div id="main" style={{backgroundColor: theme.primeColor}}>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Table/>
            <ScoreBoard setIsOpen={setIsOpen}/>
            <button
                id="switchTheme-btn"
                style={{backgroundColor: theme.secColor, color: theme.primeColor}}
                onClick={() => toggleTheme(theme, dispatch)}
            >
                Switch theme
            </button>
        </div>
    );
};

export default App;
