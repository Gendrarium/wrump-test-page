import Card from '../Card/Card';
import productImageHelix from '../../images/product-helix.png'
import productImageFilter from '../../images/product-filter.png'
import './Popup.css';

function Popup({isPopupOpen, setIsPopupOpen}) {

  function handleCloseOverlay (e) {
    if (e.target.className === 'popup popup_display_visible') {
      setIsPopupOpen(false);
    }
  }

  return (
    <div className={`popup ${isPopupOpen ? 'popup_display_visible' : ''}`} onClick={handleCloseOverlay}>
      <div className="popup__container">
        <h2 className="popup__title">Корзина:<span className="popup__total-price">2&nbsp;420&nbsp;&#8381;</span></h2>
        <Card
        name='Гребной винт 3x7.3x5, Solas, 4011-073-05S'
        image={productImageHelix}
        price='1&nbsp;970&nbsp;&#8381;'
        discount='3&nbsp;940&nbsp;&#8381;'
        inStock={true}
        />
        <Card
        name='Фильтр топливный Fleetguard'
        image={productImageFilter}
        price='450&nbsp;&#8381;'
        inStock={true}
        />
        <button type="button" className="popup__button">Перейти в корзину</button>
      </div>
    </div>
  );
}

export default Popup;
