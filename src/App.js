import './App.css';
import Coding from './Components/Coding'
import Calories from './Components/Calories'
import Exercise from './Components/Exercise'
import Expenses from './Components/Expenses'
import Piano from './Components/Piano'
import Reading from './Components/Reading'
import Screentime from './Components/Screentime'
import Sleep from './Components/Sleep'
import Studying from './Components/Studying'


function App() {
  return (
    <div className="App">
              <h1>Habit Tracker</h1>
      <Coding />
      <Exercise />
      <Sleep />
      <Calories />
      <Reading />
      < Expenses />
      <Piano />
      <Screentime />
      <Studying />
    </div>
  );
}

export default App;
