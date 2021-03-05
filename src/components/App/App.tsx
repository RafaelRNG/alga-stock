import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Header from '../Header';
import Products from "../../shared/Table/Table.mockdata";
import ProductForm from '../Products/ProductForm';
import './App.css';

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Stock", right: true }
]

function App() {

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <Table
          headers={headers}
          data={Products} />

        <ProductForm
        />
      </Container>
    </div>
  );
}

export default App;
