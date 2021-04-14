import './Popup.css';

function Popup() {
  return (
    <div className="popup popup_display_flex">
      <h2>Корзина: <span>2420</span></h2>
      <div className="card">
        <img className="card__img"/>
        <div className="card__info">
          <h3 className="card__title"></h3>
          <p className="card__price"></p>
          <p className="card__presence"></p>
        </div>
        <div className="card__control">
          <button className="card__delete"/>
          <div className="card__counter-container">
            <button className="card__counter-button"/>
              <p className="card__counter">1</p>
            <button className="card__counter-button"/>
          </div>
        </div>
      </div>
      <button className="card__go-cart-button"/>
    </div>
  );
}

export default Popup;
