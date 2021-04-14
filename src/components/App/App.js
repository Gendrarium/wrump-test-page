import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup'
import './App.css';
import React from 'react';

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  return (
    <>
      <Header/>
      <Main isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
      <Footer/>
      <Popup
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </>
  );
}

export default App;
