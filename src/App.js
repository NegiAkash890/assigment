import NavBar from './components/NavBar';
import {Button} from 'reactstrap'
import InfoBoard from './InfoBoard';
import StatusBoard from './StatusBoard';

function App() {
  return (
    <div className="App">
            <NavBar/>
            <InfoBoard/>
            <StatusBoard/>
    </div>
  );
}

export default App;
