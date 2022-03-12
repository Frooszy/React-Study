import { useContext } from "react";
import { HeaderBlockContext } from "../../contexts/HeaderBlockContext";

function HeaderBlockMenu(props) {

    function setBlockFalse() {
        setBlockStatus(false)
    }

    const { BlockStatus, setBlockStatus } = useContext(HeaderBlockContext)

    return (
        <div onClick={setBlockFalse} className={BlockStatus ? 'BlockMenu BlockMenuOpen' : 'BlockMenu'}>
            <h1>Teste</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
        </div>
    );

}

export default HeaderBlockMenu