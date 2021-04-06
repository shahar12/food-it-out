import stylesNev from '../styles/Nav.module.css'   
import Link from 'next/Link'

const Nav = () => {
    return (
        <div className={stylesNev.nav}>
            <ul>
                <li>
                    <Link href='/' Name="Home">home </Link>
                </li>
                <li>
                    <Link href='/login' Name="Login">login </Link>
                </li>
                <li>
                    <Link href='/form' Name="">register </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;