import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Header from '../Header';
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { getAllProducts } from "../../services/Products.service";
import './App.css';

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Stock", right: true }
]

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const _products = await getAllProducts();
      setProducts(_products);
    }

    fetchData()
  }, []);

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

  const handleProductDetails = (product: Product) => {
    Swal.fire(
      "Product detail",
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      "info"
    )
  }

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product);
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}`
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div>
      <Header
        title="AlgaSotck" />

      <Container>
        <Table
          headers={headers}
          data={products}
          onDelete={handleProductDelete}
          onDetail={handleProductDetails}
          onEdit={handleProductEdit}
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
