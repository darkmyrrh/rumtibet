import './Footer.css';
import telegram from '../../images/ic_baseline-telegram.svg';
import vk from '../../images/entypo-social_vk-with-circle.svg';
import pinterest from '../../images/mdi_pinterest.svg';
import skype from '../../images/mdi_skype.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <article className='footer__company-info'>
                    <h2 className='footer__title'>Компания «РумТибет»</h2>
                    <p className='footer__paragraph'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.</p>
                    <address className='footer__contacts'>
                        <a href='mailto:info@domain.com' className='footer__link'>info@domain.com</a>
                        <a href="tel:+71234567890" className='footer__link'>+7 (123) 456-78-90</a>
                    </address>
                    <ul className='footer__social-links'>
                        <li>
                            <a href="#" className='footer__social-link'><img src={telegram} alt="Телеграм" className='footer__social-icon' /></a>
                        </li>
                        <li>
                            <a href="#" className='footer__social-link'><img src={vk} alt="ВК" className='footer__social-icon' /></a>
                        </li>
                        <li>
                            <a href="#" className='footer__social-link'><img src={pinterest} alt="Pinterest" className='footer__social-icon' /></a>
                        </li>
                        <li>
                            <a href="#" className='footer__social-link'><img src={skype} alt="Skype" className='footer__social-icon' /></a>
                        </li>
                    </ul>
                </article>
                <nav className='footer__nav'>
                    <h2 className='footer__title'>Наши услуги</h2>
                    <ul className='footer__nav-links'>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Прогулки в горы летом</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Зимние походы в горы</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Посещение храмов в горах</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Экстремальные виды туризма</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Походы в джунглях Амазонии</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Поездка в Африку</a>
                        </li>
                    </ul>
                </nav>
                <nav className='footer__nav'>
                    <h2 className='footer__title'>Важно для путешествий</h2>
                    <ul className='footer__nav-links'>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Как собрать в долгий поход?</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Жизненно важные предметы для похода</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Медицинская страховка, гарантии безопасности</a>
                        </li>
                        <li className='footer__nav-item'>
                            <a href="#" className='footer__link footer__nav-link'>Если вы врач - загляните сюда</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}