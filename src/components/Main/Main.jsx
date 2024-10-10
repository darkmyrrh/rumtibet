import './Main.css';
import Promo from '../Promo/Promo';
import AboutTour from '../AboutTour/AboutTour';
import Offer from '../Offer/Offer';
import Destinations from '../Destinations/Destinations';
import Blog from '../Blog/Blog';
import Gallery from '../Gallery/Gallery';
import Subscription from '../Subscription/Subscription';
import ImagePopup from '../ImagePopup/ImagePopup';

export default function Main({ onImageClick, onClose, images, image, isOpen }) {
    return (
        <main className='main'>
            <Promo />
            <AboutTour />
            <Offer />
            <Destinations />
            <Blog />
            <Gallery 
            images={images}
            image={image}
            onImageClick={onImageClick} />
            <ImagePopup isOpen={isOpen}
            image={image}
            onClose={onClose}/>
            <Subscription />
        </main>
    );
}