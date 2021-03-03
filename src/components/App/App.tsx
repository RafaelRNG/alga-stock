import Container from '../../shared/Container';
import Input from '../../shared/Input';
import Header from '../Header';
import './App.css';

function App() {

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <Input
          label="Street" />
      </Container>
    </div>
  );
}

export default App;
