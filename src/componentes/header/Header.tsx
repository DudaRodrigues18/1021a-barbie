import './Header.css'
import LinkNav from '../linknav/LinkNav'
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
                        <LinkNav url="/" texto='Home'/>
                    </li>
                    <li>
                        <LinkNav url="/noticias" texto='Notícias'/>
                    </li>
                    <li>
                        <LinkNav url="/sobre" texto='Sobre'/>
                    </li>
                    <li>
                        <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header