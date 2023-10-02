import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Catalog from './components/Catalog'
import Info from './components/Info'

function App() {
  const WELCOME = 'welcome', CATALOG = 'catalog', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  const [selectedDog, setSelectedDog] = useState(null);

  const showDogInfo = (dog) => {
    setSelectedDog(dog);
    setCurrentScreen(INFO);
  }

  let content = null;

  const goBackToCatalogPage = () => {
    setCurrentScreen(CATALOG);
  }

  switch(currentScreen) {
    case WELCOME :
      content = <Welcome nextScreen={() => setCurrentScreen(CATALOG) }/>;
      break;
    case CATALOG :
      content = <Catalog backToWelcome={() => setCurrentScreen(WELCOME) } showInfo={showDogInfo} />;
      break;
    case INFO :
      content = <Info goBackToCatalogPage = {goBackToCatalogPage} dog={selectedDog}/>;
      break;
    default :
    content = <Welcome />
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default App
