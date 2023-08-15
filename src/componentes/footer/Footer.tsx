import './Footer.css'
import Link from './../link/Link'

export default function Footer(){
    return(
        <footer>
            <div className="footer-row1">
            <div className="left-content">
                <img src="src\assets\img\barbie-logo.png" className="footer-logo" />
                <p>Sou a Barbie girl, se você quiser ser meu namorado então fica ligado.</p>
                <div className="social-media">
                    <img src="src\assets\img\instagram.png" className="rede-social-img" />
                    <img src="src\assets\img\facebook.png" className="rede-social-img" />
                    <img src="src\assets\img\twitter.png" className="rede-social-img" />
                    <img src="src\assets\img\youtube.png" className="rede-social-img" />
                    <img src="src\assets\img\discord.png" className="rede-social-img" />
                </div>
            </div>
            <nav className="footer-menu">
            <ul className='ul-footer'>
                <h1 className='footer-ul-title'>Product</h1>
                    <li>
                        <Link texto='Mobile apps'/>
                    </li>
                    <li>
                        <Link texto='Database Designer'/>
                    </li>
                    <li>
                        <Link texto='Business Process Editor'/>
                    </li>
                    <li>
                        <Link texto='Web Apps Designer'/>
                    </li>
                    <li>
                        <Link texto='Integrations'/>
                    </li>
                    <li>
                        <Link texto='Solutions'/>
                    </li>
                    <li>
                        <Link texto='Industries'/>
                    </li>
                    <li>
                        <Link texto='Succes Stories'/>
                    </li>
                    <li>
                        <Link texto='Pricing'/>
                    </li>
                    <li>
                        <Link texto='Product Updates'/>
                    </li>
                    <li>
                        <Link texto='Security'/>
                    </li>
                </ul>
                <ul className="ul-footer">
                    <h1 className='footer-ul-title'>Company</h1> 
                    <li>
                        <Link texto='Careers'/>
                    </li>
                    <li>
                        <Link texto='Partner program'/>
                    </li>
                    <li>
                        <Link texto='Find a partner'/>
                    </li>
                    <li>
                        <Link texto='Contact us'/>
                    </li>
                    <li>
                        <Link texto='For Investors'/>
                    </li>
                    <li>
                        <Link texto='Professional Services'/>
                    </li>
                </ul>
                <ul className="ul-footer">
                    <h1 className='footer-ul-title'>Learn & Get help</h1>
                    <li>
                        <Link texto='AppMaster 101'/>
                    </li>
                    <li>
                        <Link texto='Blog'/>
                    </li>
                    <li>
                        <Link texto='Roi Calculator'/>
                    </li>
                    <li>
                        <Link texto='Help Center'/>
                    </li>
                    <li>
                        <Link texto='Roadmap'/>
                    </li>
                </ul>
                <ul className="ul-footer">
                    <h1 className='footer-ul-title'>Community</h1>
                    <li>
                    <Link texto='Discord Community'/>
                    </li>
                    <li>
                    <Link texto='Documentation'/>
                    </li>
                </ul>
            </nav>
            </div>
            <div className="terms">
                <p className="copyright">© 2019-2022 AppMaster</p>
                <Link texto='Terms of Service'/>
                <Link texto='Privacy Policy'/>
                <div className="language">
                    <img src="src\assets\img\globo.png" className="lan" />
                    <Link texto='English'/>
                </div>
            </div>
        </footer>
    )
}