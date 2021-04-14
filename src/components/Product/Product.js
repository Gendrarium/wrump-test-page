import productImage from '../../images/product-helix.png'
import './Product.css'

function Product() {
  return (
    <section className="product main__product">
    <ul className="product__path">
      <li className="product__path-cell">
        <a className="product__path-link" href="#">Каталог</a> /
      </li>
      <li className="product__path-cell">
        <a className="product__path-link" href="#">Запчасти</a> /
      </li>
      <li className="product__path-cell">
        <a className="product__path-link" href="#">Двигатель</a> /
      </li>
      <li className="product__path-cell">
        <a className="product__path-link" href="#">Винты гребные</a> /
      </li>
      <li className="product__path-cell product__path-cell_selected">Гребной винт 3x7.3x5, Solas, 4011-073-05S</li>
    </ul>
    <h1 className="product__title">Гребной винт 3x7.3x5, Solas, 4011-073-05S</h1>
    <p className="product__subtitle">Артикул: 401107305S</p>
    <div className="product__container product__container_up">
      <img className="product__img" src={productImage}/>
      <div className="product__buy">
        <h2 className="product__buy-title">Модель: 3 лопасти</h2>
        <button className="product__button">3 лопасти</button>
        <button className="product__button">4 лопасти</button>
        <dl className="product__grid-description">
          <dt className="product__grid-description-term">OEM</dt>
          <dd className="product__grid-description-definition">3411-135-13</dd>
          <dt className="product__grid-description-term">Производитель&nbsp;техники</dt>
          <dd className="product__grid-description-definition">Yamaha</dd>
          <dt className="product__grid-description-term">Бренд</dt>
          <dd className="product__grid-description-definition">Skipper</dd>
          <dt className="product__grid-description-term">Материал</dt>
          <dd className="product__grid-description-definition">Алюминий</dd>
        </dl>
        <div className="product__price">
          <span className="product__price-now">3&nbsp;940&nbsp;&#8381;</span>
          <span className="product__price-old">1&nbsp;970&nbsp;&#8381;</span>
        </div>
        <button className="product__buy-button">В корзину</button>
      </div>
    </div>
    <div className="product__container product__container_bottom">
      <h2 className="product__container-title">Характеристики</h2>
      <div className="product__flex-description">
        <dl className="product__grid-description product__grid-description_two-columns">
          <dt className="product__grid-description-term">OEM</dt>
          <dd className="product__grid-description-definition">3411-135-13</dd>
          <dt className="product__grid-description-term">Производитель&nbsp;техники</dt>
          <dd className="product__grid-description-definition">Yamaha</dd>
          <dt className="product__grid-description-term">Бренд</dt>
          <dd className="product__grid-description-definition">Skipper</dd>
          <dt className="product__grid-description-term">Количество&nbsp;лопастей</dt>
          <dd className="product__grid-description-definition">3&nbsp;лопасти</dd>
          <dt className="product__grid-description-term">Материал</dt>
          <dd className="product__grid-description-definition">Алюминий</dd>
        </dl>
        <dl className="product__grid-description product__grid-description_two-columns">
          <dt className="product__grid-description-term">Диаметр,&nbsp;дюйм</dt>
          <dd className="product__grid-description-definition">Шлицевая</dd>
          <dt className="product__grid-description-term">Мощность,&nbsp;л.с.</dt>
          <dd className="product__grid-description-definition">От&nbsp;9.9&nbsp;до&nbsp;15</dd>
          <dt className="product__grid-description-term">Шаг,&nbsp;дюйм</dt>
          <dd className="product__grid-description-definition">11</dd>
          <dt className="product__grid-description-term">Тип&nbsp;лодочного&nbsp;мотора</dt>
          <dd className="product__grid-description-definition">ПЛМ</dd>
          <dt className="product__grid-description-term">Посадка&nbsp;на&nbsp;вал</dt>
          <dd className="product__grid-description-definition">Шлицевая</dd>
        </dl>
      </div>
      <h2 className="product__use-title">Применение</h2>
      <dl className="product__grid-description product__grid-description_use">
          <dt className="product__grid-description-term product__grid-description-term_use">4-тактные&nbsp;моторы&nbsp;Suzuki</dt>
          <dd className="product__grid-description-definition product__grid-description-definition_use">
            <a className="product__description-link" href="#">DF9.9B;</a>
            <a className="product__description-link" href="#">DF8A;</a>
            <a className="product__description-link" href="#">DF10A</a>
          </dd>
          <dt className="product__grid-description-term product__grid-description-term_use">2-тактные&nbsp;моторы&nbsp;Suzuki</dt>
          <dd className="product__grid-description-definition product__grid-description-definition_use">
          <a className="product__description-link" href="#">DT9.9A;</a>
          </dd>
      </dl>
    </div>
  </section>
  );
}

export default Product;
