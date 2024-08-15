import Header from './Header';
import Puzzle from './Puzzle';
import './App.css';

function App() {
  return (
    <div>
      <Header title="Support"></Header>
      <main>
        <h2>Support Center</h2>
        <p>
          Welcome to the support center. How can we help you today?
        </p>
        <Puzzle></Puzzle>
      </main>
    </div>
  );
}

export default App;
