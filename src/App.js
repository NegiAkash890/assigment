import NavBar from './components/NavBar';
import InfoBoard from './InfoBoard';
import StatusBoard from './StatusBoard';
import { Container, Row } from 'react-bootstrap';
import './App.css'

function App() {
  return (
    <div className="App">

      <NavBar />
      <Container className="mt-4">
        <StatusBoard />
        <InfoBoard />
      </Container>

    </div>
  );
}

export default App;
