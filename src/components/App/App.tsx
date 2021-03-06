import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Header from '../Header';
import Products, { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import './App.css';
import { useState } from 'react';

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Stock", right: true }
]

function App() {

  const [products, setProducts] = useState(Products);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0]);

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product
      }
    ])
  }

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => product.id === newProduct.id ? newProduct : product))

    setUpdatingProduct(undefined);
  }

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <Table
          headers={headers}
          data={products}
          onDelete={console.log}
          onDetail={console.log}
          onEdit={console.log}
          enableActions />

        <ProductForm
          form={updatingProduct}
          onSubmit={handleProductSubmit}
          onUpdate={handleProductUpdate} />
      </Container>
    </div>
  );
}

export default App;
