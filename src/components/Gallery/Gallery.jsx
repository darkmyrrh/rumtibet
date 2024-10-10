import './Gallery.css';

export default function Gallery({ onImageClick, images, image }) {

    const imageClassName = `gallery__image ${images[0] ? 'gallery__image_big' : ''}`;

    const galleryImages = images.map((image) => {
        return (
            <li className='gallery__image-container'>
                <img src={image.link} alt={image.name} className={imageClassName} />
                <button type='button' aria-label='Увеличить' className='gallery__zoom-button' 
                onClick={handleImageClick}
                 /></li>)
    });


    function handleImageClick(e) {
        image = e.target.previousSibling;
        onImageClick(image);
    }

    return (
        <section className='gallery'>
            <h2 className='main__title'>фото-отчет</h2>
            <h3 className='main__subtitle'>Делимся впечатлениями</h3>
            <ul className='gallery__container'>
                {galleryImages}
            </ul>
            <button type='button' aria-label='Pinterest' className='main__button'>Наш pinterest</button>
        </section>
    )
}