import { FC, useState } from "react";
import Swal from "sweetalert2";
import Table, { TableHeader } from "../../shared/Table";
import { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "../Products/ProductForm";
import {
  updateSingleProduct,
  deleteSingleProduct
} from "../../services/Products.service";
import { connect, useDispatch } from "react-redux";
import { insertNewProduct } from "../../redux/Products/Products.actions";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Stock", right: true }
]

interface ProductsCRUDProps {
  products: Product[]
}

const ProductsCRUD: FC<ProductsCRUDProps> = (props) => {
  const dispatch = useDispatch();
  //const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(undefined);


  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      dispatch(insertNewProduct(product))
    } catch (err) {
      Swal.fire(
        "Oops!",
        err.message,
        "error"
      )
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct)
      setUpdatingProduct(undefined);
    } catch (err) {
      Swal.fire(
        "Oops!",
        err.message,
        "error"
      )
    }
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

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id);
    } catch (err) {
      Swal.fire(
        "Oops!",
        err.message,
        "error"
      )
    }
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
        deleteProduct(product._id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  /*
    useEffect(() => {
     // async function fetchData() {
     //   const _products = await getAllProducts();
     //   setProducts(_products);
      }
  
      //fetchData()
    }, [products]);
  */
  return <>
    <Table
      headers={headers}
      data={props.products}
      onDelete={handleProductDelete}
      onDetail={handleProductDetails}
      onEdit={handleProductEdit}
      enableActions />

    <ProductForm
      form={updatingProduct}
      onSubmit={handleProductSubmit}
      onUpdate={handleProductUpdate} />
  </>
}

const mapStateToProps = (state: any) => ({
  products: state.products
})

export default connect(mapStateToProps)(ProductsCRUD);