import { useContext } from 'react'
import { HeaderBlockContext } from '../../contexts/HeaderBlockContext'
import './Menu.css'

function Menu({ isActive, clickStatus }) {

    const { setBlockStatus, BlockStatus } = useContext(HeaderBlockContext)

    return (
        <div className={isActive ? 'menu menuActive' : 'menu'}>
            <ul>
                <li><p onClick={() => { setBlockStatus(!BlockStatus); clickStatus() }}>Example 1</p></li>
            </ul>
        </div>
    )
}

export default Menu