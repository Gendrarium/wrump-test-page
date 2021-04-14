import './Card.css';

function Card({
  name,
  image,
  price,
  discount,
  inStock,
}) {
  return (
    <div className="card">
        <img className="card__img" src={image}/>
        <div className="card__info">
          <h3 className="card__title">{name}</h3>
          <p className="card__price">{price} {discount ? (<span className="card__discount">{discount}</span>) : ''}</p>
          <p className="card__presence">{inStock ? 'В наличии' : 'Нет в наличии'}</p>
        </div>
        <div className="card__control">
          <button type="button"  className="card__delete"/>
          <div className="card__counter-container">
            <button type="button" className="card__counter-button card__counter-button_type_add"/>
              <p className="card__counter">1</p>
            <button type="button" className="card__counter-button card__counter-button_type_remove"/>
          </div>
        </div>
      </div>
  );
}

export default Card;
