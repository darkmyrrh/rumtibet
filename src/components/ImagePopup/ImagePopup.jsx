import './ImagePopup.css';
import { usePopupClose } from '../../hooks/usePopupClose';

export default function ImagePopup({ isOpen, onClose, image }) {
    usePopupClose(isOpen, onClose);
    return (
        <section className={`image-popup ${isOpen ? "image-popup_opened" : ""}`}>
            <div className="image-popup__container">
                <button
                    type="button"
                    aria-label="Закрыть"
                    className="image-popup__close-button main__button"
                    onClick={onClose}
                ></button>
                <figure className="image-popup__figure">
                    <img src={image.src} alt={image.alt} className='image-popup__figure-image'/>
                    <figcaption className="image-popup__figure-caption">{image.alt}</figcaption>
                </figure>
            </div>
        </section>
    );
}
