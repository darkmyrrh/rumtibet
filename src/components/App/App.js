import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';

import { images } from '../../utils/images';


function App() {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)

  const handleBurgerButtonClick = () => setIsBurgerMenuOpened(true);

  const handleBurgerCloseButtonClick = () => setIsBurgerMenuOpened(false);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImagePopupOpen(true);
  }

  const handleImagePopupClose = () => setIsImagePopupOpen(false);


  return (
    <div className='App'>
      <Header onClick={handleBurgerButtonClick} />
      <BurgerMenu
        isOpen={isBurgerMenuOpened}
        onClick={handleBurgerCloseButtonClick}
      />
      <Main
        images={images}
        image={selectedImage}
        onImageClick={handleImageClick}
        isOpen={isImagePopupOpen}
        onClose={handleImagePopupClose}
      />
      <Footer />
    </div>
  );
}

export default App;
