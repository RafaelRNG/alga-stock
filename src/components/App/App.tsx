import Container from '../../shared/Container';
import Table from '../../shared/Table';
import Header from '../Header';
import './App.css';

function App() {

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
