import './Header.css'


function Header() {

    return (
        <div className="Header">
            <div className="Logo">
                <p>Title</p>
            </div>
            <ul className='HeaderLista'>
                <li><a href='#About'>About</a></li>
                <li><a href='#Catalog'>Catalog</a></li>
                <li><a href='#Links'>Links</a></li>
            </ul>
        </div>
    )

}

export default Header