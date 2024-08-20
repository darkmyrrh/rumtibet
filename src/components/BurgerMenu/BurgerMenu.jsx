import './BurgerMenu.css';

export default function BurgerMenu({ isOpen, onClick }) {
    return (
        <section className={`burger-menu ${isOpen && 'burger-menu_opened'}`}>
            <button className='burger-menu__close-button' onClick={onClick} />
            <nav>
                <ul className='burger-menu__nav'>
                    <li className='burger-menu__nav-item'>
                        <a href="#" className='burger-menu__nav-link'>Про гида</a>
                    </li>
                    <li className='burger-menu__nav-item'>
                        <a href="#" className='burger-menu__nav-link'>Программа тура</a>
                    </li>
                    <li className='burger-menu__nav-item'>
                        <a href="#" className='burger-menu__nav-link'>Стоимость</a>
                    </li>
                    <li className='burger-menu__nav-item'>
                        <a href="#" className='burger-menu__nav-link'>Блог</a>
                    </li>
                    <li className='burger-menu__nav-item'>
                        <a href="#" className='burger-menu__nav-link'>Контакты</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}