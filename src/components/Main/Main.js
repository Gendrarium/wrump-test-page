import Product from '../Product/Product'
import './Main.css'

function Main({isPopupOpen, setIsPopupOpen}) {
  return (
    <main className="main">
      <Product
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </main>
  );
}

export default Main;
