import './Offer.css';
import guide from '../../images/offer-guide.png';
import safety from '../../images/offer-safety.png';
import prices from '../../images/offer-prices.png';
import img1 from '../../images/offer-gallery-1.jpg';
import img2 from '../../images/offer-gallery-2.jpg';
import img3 from '../../images/offer-gallery-3.jpg';
import img4 from '../../images/offer-gallery-4.jpg';

export default function Offer() {
    return (
        <section className='offer'>
            <div className='offer__container'>
                <div className='offer__info'>
                    <h2 className='main__title'>наше предложение</h2>
                    <h3 className='main__subtitle'>Лучшие программы для тебя</h3>
                    <p className='main__paragraph'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
                    <ul className='offer__items'>
                        <li><article className='offer__item'>
                            <img src={guide} alt='Опытный гид' className='offer__item-image' />
                            <h3 className='offer__item-title'>Опытный гид</h3>
                            <p className='offer__item-paragraph'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                        </article>
                        </li>
                        <li><article className='offer__item'>
                            <img src={safety} alt='Безопасный поход' className='offer__item-image' />
                            <h3 className='offer__item-title'>Безопасный поход</h3>
                            <p className='offer__item-paragraph'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                        </article>
                        </li>
                        <li><article className='offer__item'>
                            <img src={prices} alt='Лояльные цены' className='offer__item-image' />
                            <h3 className='offer__item-title'>Лояльные цены</h3>
                            <p className='offer__item-paragraph'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                        </article>
                        </li>
                    </ul>
                    <button type='button' aria-label='Стоимость' className='main__button'>Стоимость программ</button>
                </div>
                <div className='offer__images'>
                    <img src={img1} alt='Горное озеро' className='offer__image offer__image_left' />
                    <img src={img2} alt='В горах' className='offer__image offer__image_right' />
                    <img src={img3} alt='Прогулка на снегоходе' className='offer__image offer__image_right' />
                    <img src={img4} alt='Горный пейзаж' className='offer__image offer__image_left' />
                </div>
            </div>
        </section>
    );
}