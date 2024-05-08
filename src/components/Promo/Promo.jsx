import './Promo.css';

export default function Promo() {

  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Насладись прогулкой в горах <br />с командой единомышленников
      </h1>
      <form className='promo__form'>
        <select
          name='location'
          id='location'
          className='promo__form-input promo__form-input_type_select'
        >
          <option className='promo__form-option' value='Локация для тура' disabled selected>Локация для тура</option>
          <option className='promo__form-option' value='2'>2</option>
          <option className='promo__form-option' value='3'>3</option>
        </select>
        <label htmlFor='location' className='promo__form-label'>
          выберите из списка
        </label>
        <input
          id='date'
          name='date'
          type='text'
          placeholder='Дата похода'
          className='promo__form-input promo__form-input_type_date'
        />
        <label htmlFor='date' className='promo__form-label'>
          укажите диапазон
        </label>
        <select id='number' name='number' className='promo__form-input promo__form-input_type_select'>
          <option className='promo__form-option' value='0' placeholder='Участники' disabled selected>
            Участники
          </option>
          <option className='promo__form-option' value='4'>4</option>
          <option className='promo__form-option' value='5'>5</option>
          <option className='promo__form-option' value='6'>6</option>
          <option className='promo__form-option' value='7'>7</option>
          <option className='promo__form-option' value='8'>8</option>
          <option className='promo__form-option' value='9'>9</option>
          <option className='promo__form-option' value='10'>10</option>
          <option className='promo__form-option' value='Больше 10>'>Больше 10</option>
        </select>
        <label htmlFor='number' className='promo__form-label'>
          минимум 4 человека
        </label>
        <button type='submit' aria-label='Найти программу' className='promo__form-submit'>Найти программу</button>
      </form>
      <button type='submit' aria-label='Найти программу' className='promo__form-submit promo__form-submit_mobile'>Найти программу</button>
    </section>
  );
}
