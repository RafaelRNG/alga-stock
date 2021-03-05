import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Header from '../Header';
import Products from "../../shared/Table/Table.mockdata";
import './App.css';
import Form from '../../shared/Form';
import Input from '../../shared/Input';
import Button from '../../shared/Button';

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

        <Form
          title="Product Form"
          onSubmit={console.log}>
          <Input
            label="Name"
            placeholder="E.g.: Cookie" />
          <Input
            label="Price"
            placeholder="E.g.: 1.25"
            step="0.01"
            min="0"
            type="number" />
          <Input
            label="Stock"
            placeholder="E.g.: 15"
            min="0"
            type="number" />

          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
