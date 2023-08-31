import './Header.css'
import Link from './../link/Link'
import Logo from './../../assets/img/barbie-logo.png'

function Header(){
    return(
        <header>
            <div>
                <img src={Logo} className="header-logo" />
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