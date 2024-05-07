import './Subscription.css'

export default function Subscription() {
    return (
        <section className='subscription'>
            <h2 className='main__title subscription__title'>актуально</h2>
            <h3 className='main__subtitle subscription__subtitle'>Получайте полезные 
            {/* рассылки о путешествиях */}
            </h3>
            <form className='subscription__form'>
                <label htmlFor='email' className='subscription__form-label'>Введите e-mail адрес</label>
                <input type='email' name='email' id='email' placeholder='name@domain.com' className='subscription__form-input' />

                <button type='submit' aria-label='Подписаться' className='main__button subscription__form-submit'>Подписаться на новости</button>
                <p className='subscription__form-text'>подписываясь на новости, вы автоматически соглашаетесь с <a href="#" className='subscription__form-link'>условиями обработки персональных данных</a> и <a href="#" className='subscription__form-link'>правилами рекламных рассылок</a></p>
            </form>
        </section>
    )
} 