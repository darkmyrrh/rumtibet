import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Насладись прогулкой в горах <br />с командой единомышленников
      </h1>
      <form className="promo__form">
        <select name="location" id="location" placeholder="Локация для тура" className="promo__form-input">
          <option value="Локация для тура">Локация для тура</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <label htmlFor="location" className="promo__form-label">выберите из списка</label>
      </form>
    </section>
  );
}
