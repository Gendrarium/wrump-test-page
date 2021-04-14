import React from 'react';
import './Footer.css';

function Footer() {
  const [values, setValues] = React.useState({});

  function handleShowHint(e) {
    const input = e.target;
    const { value, name} = input;
    setValues({ ...values, [name]: value});
  }
  return (
    <footer className="footer">
      <div className="footer__full-container">
        <h2 className="footer__title">Консультация</h2>
        <p className="footer__subtitle">Заполните&nbsp;форму&nbsp;ниже&nbsp;и&nbsp;наш&nbsp;мастер свяжется&nbsp;с&nbsp;вами,&nbsp;чтобы&nbsp;ответить&nbsp;на&nbsp;ваши&nbsp;вопросы</p>
        <form className="footer__form">
          <div className="footer__form-container">
            <span className="footer__hint">{values.name ? 'Имя' : ''}</span>
            <span className="footer__hint">{values.contact ? 'Телефон или e-mail' : ''}</span>
            <input
              name="name"
              className="footer__input"
              placeholder="Имя"
              type="text"
              value={values.name}
              onChange={handleShowHint}
              required
            />
            <input
              name="contact"
              className="footer__input"
              placeholder="Телефон или e-mail"
              type="text"
              value={values.contact}
              onChange={handleShowHint}
              required
            />
          </div>
          <button type="submit" className="footer__button">Получить консультацию</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
