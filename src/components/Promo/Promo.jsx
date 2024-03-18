import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Насладись прогулкой в горах <br />с командой единомышленников
      </h1>
      <form className="promo__form">
        <select
          name="location"
          id="location"
          className="promo__form-input"
        >
          <option value="Локация для тура" disabled selected>Локация для тура</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label htmlFor="location" className="promo__form-label">
          выберите из списка
        </label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Дата похода"
          className="promo__form-input"
        />
        <label htmlFor="date" className="promo__form-label">
          укажите диапазон
        </label>
        <select id="number" name="number" className="promo__form-input">
          <option value="0" placeholder="Участники" disabled selected>
            Участники
          </option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="Больше 10>">Больше 10</option>
        </select>
        <label htmlFor="number" className="promo__form-label">
          минимум 4 человека
        </label>
        <button type="submit" className="promo__form-submit">Найти программу</button>
      </form>
    </section>
  );
}
