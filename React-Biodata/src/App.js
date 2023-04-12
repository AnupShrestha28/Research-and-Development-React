import './App.css';
import Name from './Name';
import Description from './Description';
import Table from './Table';

function App() {
  // JSX
  return(
    <div className='App'>
        <header className='App-header'>
            <Name/>
            <Description/>
            <Table/>
        </header>
    </div>
  );
}

export default App;
