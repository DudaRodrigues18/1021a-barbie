import './Header.css'
import Link from './../link/Link'

function Header(){
    return(
        <header>
            <div>
                <img src="src\assets\img\barbie-logo.png" className="header-logo" />
            </div>
            <nav className='menu-header'>
                <ul>
                    <li>
                        <Link texto='Home'/>
                    </li>
                    <li>
                        <Link texto='Notícia'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header