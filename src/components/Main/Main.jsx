import './Main.css';
import Promo from '../Promo/Promo';
import AboutTour from '../AboutTour/AboutTour';

export default function Main() {
    return (
        <main className='main'>
            <Promo />
            <AboutTour />
        </main>
    );
}