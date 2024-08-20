import './Header.css'
import logo from '../../images/logo.svg'

export default function Header({ onClick }) {
    return (
        <header className='header'>
            <img src={logo} alt='РумТибет' className='header__logo' />
            <button type='button' className='header__burger-menu' aria-label='Меню' onClick={onClick} />
            <nav className='header__nav'>
                <ul className='header__links'>
                    <li><a href='#' className='header__link'>Главная</a></li>
                    <li><a href='#' className='header__link'>Про гида</a></li>
                    <li><a href='#' className='header__link'>Программа тура</a></li>
                    <li><a href='#' className='header__link'>Стоимость</a></li>
                    <li><a href='#' className='header__link'>Блог</a></li>
                    <li><a href='#' className='header__link'>Контакты</a></li>
                </ul>
                <button type='button' aria-label='Консультация' className='header__button'>Консультация</button>
            </nav>

        </header>
    )
}