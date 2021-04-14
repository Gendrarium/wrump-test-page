import logo from '../../images/header-logo.svg';
import buttonCatalogIcon from '../../images/header-button-fat-burger.svg';
import './Header.css'

function Header() {
  return (
    <header className="header page__header">
      <div  className="header__full-container">
        <div className="header__container header__container_location_up">
            <nav className="header__nav">
              <a href="#" className="header__link">Доставка</a>
              <a href="#" className="header__link">Оплата</a>
              <a href="#" className="header__link">Возврат</a>
              <a href="#" className="header__link">Магазин</a>
            </nav>
            <p className="header__number">+7 495 744-00-50</p>
        </div>
        <div className="header__container header__container_location_bottom">
          <img className="header__logo" src={logo}/>
          <button className="header__catalog"><img className="header__buttonIcon" src={buttonCatalogIcon}/>Каталог</button>
          <input
            name="search"
            className="header__input"
            placeholder="Поиск по OEM, производителю, модели и категории"
            type="text"
          />
          <button type="button" className="header__button header__button_type_profile"/>
          <button type="button" className="header__button header__button_type_cart">
            <div className="header__counter-container">
              <p className="header__counter">3</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
