import './AboutTour.css'
import playButton from '../../images/video-icon.svg';

export default function AboutTour() {
    return (
        <section className='about-tour'>
            <div className='about-tour__video-container'>
            <picture className='about-tour__video about-tour__video_front'><button type='button' className='about-tour__play-button' /></picture>
            <picture href="#" className='about-tour__video about-tour__video_back'><button type='button' className='about-tour__play-button' /></picture>
            </div>
            <div className='about-tour__info'>
            <h2 className='main__title'>о нашем походе</h2>
            <h3 className='main__subtitle'>Исследуйте все горные массивы мира вместе с нами</h3>
            <p className='main__paragraph'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в классической латинской литературе.</p>
            <button className='main__button'>Программа тура</button>
            </div>
        </section>
    );
}