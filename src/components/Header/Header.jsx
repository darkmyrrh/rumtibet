import './Header.css'
import logo from '../../images/logo.svg'

export default function Header() {
    return (
        <header className='header'>
            <img src={logo} alt='РумТибет' className='header__logo' />
            <button type='button' className='header__burger-menu' aria-label='Меню' />
            <nav>
                <ul className='header__nav'>
                    <li><a href='#' className='header__link'>Главная</a></li>
                    <li><a href='#' className='header__link'>Про гида</a></li>
                    <li><a href='#' className='header__link'>Программа тура</a></li>
                    <li><a href='#' className='header__link'>Стоимость</a></li>
                    <li><a href='#' className='header__link'>Блог</a></li>
                    <li><a href='#' className='header__link'>Контакты</a></li>
                </ul>
            </nav>
            <button type='button' aria-label='Консультация' className='header__button'>Консультация</button>
        </header>
    )
}