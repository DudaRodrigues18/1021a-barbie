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
                        <Link url="/" texto='Home'/>
                    </li>
                    <li>
                        <Link url="/noticias" texto='Notícias'/>
                    </li>
                    <li>
                        <Link url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <Link url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header