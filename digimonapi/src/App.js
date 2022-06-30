import Characters from './pages/Characters';
import digimonLogo from './assets/imgs/DigimonLogo.png'
import style from './App.module.scss'
const App = () => {

  return (
    <main className={style.digimonMain}>
      <img className={style.digimonLogo}src={digimonLogo} alt="Digimon Logo" />
      <Characters/>;

    </main>
    
  )
  
}

export default App;
