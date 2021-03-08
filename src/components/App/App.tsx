import Container from '../../shared/Container';
import Header from '../Header';
import ProductsCRUD from '../Products/ProductsCRUD';

import './App.css';

function App() {

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <ProductsCRUD />
      </Container>
    </div>
  );
}

export default App;
