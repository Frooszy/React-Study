import './Header.css'
import Menu from '../MenuHeader/Menu'
import { useState } from 'react'

function Header() {

    const [active, setActive] = useState(false)

    return (
        <div className="Header">
            <div className="Logo">
                <p>Title</p>
            </div>
            <ul className='HeaderLista'>
                <li><p href='#About'>About</p></li>
                <li><p href='#Catalog'>Catalog</p></li>
                <li><p onClick={() => setActive(!active)}>Links</p></li>
            </ul>
            {active && <Menu />}
        </div>
    )

}

export default Header