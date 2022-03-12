import './Menu.css'

function Menu(props) {

    const isActive = props.isActive

    return (
        <div className={isActive ? 'menu menuActive' : 'menu'}>
            <ul>
                <li><p>Example 1</p></li>
            </ul>
        </div>
    )
}

export default Menu