import './Blog.css';
import blogImage1 from '../../images/blog-image-1.jpg';
import blogImage2 from '../../images/blog-image-2.jpg';
import blogImage3 from '../../images/blog-image-3.jpg';
import blogImage4 from '../../images/blog-image-4.jpg';

export default function Blog () {
    return (
        <section className='blog'>
            <h2 className='main__title'>делимся впечатлениями</h2>
            <h3 className='main__subtitle'>Блог о путешествиях</h3>
            <div className='blog__container'>
                <ul className='blog__articles'>
                    <li>
                        <article className='blog__article'>
                            <img src={blogImage1} alt='Итальянский город на горе' className='blog__article-image' />
                            <h3 className='blog__article-title'>Красивая Италия, какая она в реальности?</h3>
                            <p className='blog__article-text'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            <p className='blog__article-date'>01/04/2023</p>
                            <a href='' className='blog__article-link'>читать статью</a>
                        </article>
                    </li>
                    <li>
                        <article className='blog__article'>
                            <img src={blogImage2} alt='Крыло самолета на фоне восхода' className='blog__article-image' />
                            <h3 className='blog__article-title'>Долой сомнения! Весь мир открыт для вас!</h3>
                            <p className='blog__article-text'>Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...</p>
                            <p className='blog__article-date'>01/04/2023</p>
                            <a href='' className='blog__article-link'>читать статью</a>
                        </article>
                    </li>
                    <li>
                        <article className='blog__article'>
                            <img src={blogImage3} alt='Путешественница идет меж домов' className='blog__article-image' />
                            <h3 className='blog__article-title'>Как подготовиться к путешествию в одиночку?</h3>
                            <p className='blog__article-text'>Для современного мира базовый вектор развития предполагает.</p>
                            <p className='blog__article-date'>01/04/2023</p>
                            <a href='' className='blog__article-link'>читать статью</a>
                        </article>
                    </li>
                    <li>
                        <article className='blog__article'>
                            <img src={blogImage4} alt='Тадж-Махал на рассвете' className='blog__article-image' />
                            <h3 className='blog__article-title'>Индия ... летим?</h3>
                            <p className='blog__article-text'>Для современного мира базовый.</p>
                            <p className='blog__article-date'>01/04/2023</p>
                            <a href='' className='blog__article-link'>читать статью</a>
                        </article>
                    </li>
                </ul>
            </div>
            <button type='button' aria-label='Другие материалы' className='main__button'>Другие материалы</button>
        </section>
    )
}