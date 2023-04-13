import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Rickandmarties from "./components/rickandmarties/Rickandmarties";

function App() {
  // 1. Описати всю сім'ю сімпсонів (5 персонажів)
  // 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
  //https://rickandmortyapi.com/
  //https://rickandmortyapi.com/api/character
  //Створити 6 персонажів
  let titleSimpsons = 'Simpsons';
  let titleRickyMarties = 'Ricky and Marty';
  return (
      <div>
        <h1>{titleSimpsons}</h1>
        <Simpsons/>
        <h1>{titleRickyMarties}</h1>
        <Rickandmarties/>
      </div>
  );
}

export default App;

