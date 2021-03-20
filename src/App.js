import NavBar from './components/NavBar';
import { Button } from 'reactstrap'
import InfoBoard from './InfoBoard';
import StatusBoard from './StatusBoard';
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Container fluid='md' className="mt-4">
        <StatusBoard />
        <InfoBoard />
      </Container>

    </div>
  );
}

export default App;
