import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';


function App() {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  const handleBurgerButtonClick = () => setIsBurgerMenuOpened(true);  

  const handleBurgerCloseButtonClick = () => setIsBurgerMenuOpened(false);
  


  return (
    <div className='App'>
      <Header onClick={handleBurgerButtonClick}/>
      <Main />
      <Footer />
      <BurgerMenu 
      isOpen={isBurgerMenuOpened}
      onClick={handleBurgerCloseButtonClick}
      />
    </div>
  );
}

export default App;
