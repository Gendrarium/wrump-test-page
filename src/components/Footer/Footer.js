import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__full-container">
        <h2 className="footer__title">Консультация</h2>
        <p className="footer__subtitle">Заполните&nbsp;форму&nbsp;ниже&nbsp;и&nbsp;наш&nbsp;мастер свяжется&nbsp;с&nbsp;вами,&nbsp;чтобы&nbsp;ответить&nbsp;на&nbsp;ваши&nbsp;вопросы</p>
        <form className="footer__form">
        <div className="footer__form-container">
          <input name="name" className="footer__input" placeholder="Имя"/>
          <input name="contact" className="footer__input" placeholder="Телефон или e-mail"/>
        </div>
        <button className="footer__button">Получить консультацию</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
