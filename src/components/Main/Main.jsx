import './Main.css';
import Promo from '../Promo/Promo';
import AboutTour from '../AboutTour/AboutTour';
import Offer from '../Offer/Offer';
import Destinations from '../Destinations/Destinations';
import Blog from '../Blog/Blog';

export default function Main() {
    return (
        <main className='main'>
            <Promo />
            <AboutTour />
            <Offer />
            <Destinations />
            <Blog />
        </main>
    );
}