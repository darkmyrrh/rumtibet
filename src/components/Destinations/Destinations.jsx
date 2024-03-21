import './Destinations.css';
import star from '../../images/ic_round-star.svg'
import card1 from '../../images/destinations-1.jpg';
import card2 from '../../images/destinations-2.jpg';
import card3 from '../../images/destinations-3.jpg'

export default function Destinations() {
    return (
        <section className='destinations'>
            <h2 className='main__title'>по версии отдыхающих</h2>
            <h3 className='main__subtitle'>Популярные направления</h3>
            <ul className='destinations__cards'>
                <li>
                    <article className='desinations__card'>
                        <img src={card1} alt="Озеро возле гор" className='destinations__card-image' />
                        <figure className='destinations__rating'>
                            <img src={star} alt="Рейтинг" className='destinations__rating-image' />
                            <figcaption className='destinations__rating-score'>4.9</figcaption>
                        </figure>
                        <div className='destinations__info'>
                            <h3 className='destinations__title'>Озеро возле гор</h3>
                            <p className='destinations__description'>романтическое приключение</p>
                            <p className='destinations__price'>480 $</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className='desinations__card'>
                        <img src={card2} alt="Ночь в горах" className='destinations__card-image' />
                        <figure className='destinations__rating'>
                            <img src={star} alt="Рейтинг" className='destinations__rating-image' />
                            <figcaption className='destinations__rating-score'>4.5</figcaption>
                        </figure>
                        <div className='destinations__info'>
                            <h3 className='destinations__title'>Ночь в горах</h3>
                            <p className='destinations__description'>в компании друзей</p>
                            <p className='destinations__price'>500 $</p>
                        </div>
                    </article>
                </li>
                <li>
                    <article className='desinations__card'>
                        <img src={card3} alt="Йога в горах" className='destinations__card-image' />
                        <figure className='destinations__rating'>
                            <img src={star} alt="Рейтинг" className='destinations__rating-image' />
                            <figcaption className='destinations__rating-score'>5.0</figcaption>
                        </figure>
                        <div className='destinations__info'>
                            <h3 className='destinations__title'>Йога в горах</h3>
                            <p className='destinations__description'>для тех, кто забоится о себе</p>
                            <p className='destinations__price'>230 $</p>
                        </div>
                    </article>
                </li>
            </ul>
            <button type='button' className='main__button'>Рейтинг направлений</button>
        </section>
    );
}