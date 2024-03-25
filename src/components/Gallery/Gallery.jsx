import './Gallery.css';
import galleryImg1 from '../../images/photo-gallery-1.jpg';
import galleryImg2 from '../../images/photo-gallery-2.jpg';
import galleryImg3 from '../../images/photo-gallery-3.jpg';
import galleryImg4 from '../../images/photo-gallery-4.jpg';
import galleryImg5 from '../../images/photo-gallery-5.jpg';
import galleryImg6 from '../../images/photo-gallery-6.jpg';

export default function Gallery() {
    return (
        <section className='gallery'>
            <h2 className='main__title'>фото-отчет</h2>
            <h3 className='main__subtitle'>Делимся впечатлениями</h3>
            <ul className='gallery__container'>
                <li>
                    <img src={galleryImg1} alt="" className='gallery__image gallery__image_big' />
                </li>
                <li>
                    <img src={galleryImg2} alt="" className='gallery__image' />
                </li>
                <li>
                    <img src={galleryImg3} alt="" className='gallery__image' />
                </li>
                <li>
                    <img src={galleryImg4} alt="" className='gallery__image' />
                </li>
                <li>
                    <img src={galleryImg5} alt="" className='gallery__image gallery__image_big' />
                </li>
                <li>
                    <img src={galleryImg6} alt="" className='gallery__image' />
                </li>
            </ul>
            <button type='button' aria-label='Pinterest' className='main__button'>Наш pinterest</button>
        </section>
    )
}