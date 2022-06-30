import CharactersRookie from "./pages/Characters/_2_characters_rookie";
import CharactersInTraining from "./pages/Characters/_1_characters_inTraining";
import CharactersFresh from "./pages/Characters/_3_characters_fresh";
import CharactersChampion from "./pages/Characters/_4_characters_champion";
import CharactersMega from "./pages/Characters/_5_characters_mega";
import CharactersArmor from "./pages/Characters/_6_characters_armor";
import CharactersUltimate from "./pages/Characters/_7_characters_ultimate";


import digimonLogo from "./assets/imgs/DigimonLogo.png";
import style from "./App.module.scss";

const App = () => {
  return (
    <main className={style.digimonMain}>
      <img className={style.digimonLogo} src={digimonLogo} alt="Digimon Logo" />

      <CharactersInTraining/>
      <CharactersRookie />
      <CharactersFresh />
      <CharactersChampion />
      <CharactersMega />
      <CharactersArmor/>
      <CharactersUltimate/>

    </main>
  );
};

export default App;
