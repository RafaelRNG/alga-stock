import { ProductCreator } from "../../components/Products/ProductForm"
import {
  createSingleProduct,
  deleteSingleProduct,
  getAllProducts,
  updateSingleProduct
} from "../../services/Products.service"
import { Thunk } from "..";
import { Product } from "../../shared/Table/Table.mockdata";

export const updateProduct =
  (newProduct: Product): Thunk =>
    async (dispatch) => {
      await updateSingleProduct(newProduct);
      dispatch(getProducts())
    }

export const getProducts =
  (): Thunk<Product[]> =>
    async (dispatch) => {
      const products = await getAllProducts()
      dispatch({
        type: "FETCH_PRODUCTS",
        payload: products
      })
    }

export const insertNewProduct = (product: ProductCreator): Thunk =>
  async (dispatch) => {
    await createSingleProduct(product)
    dispatch(getProducts())
  }

export const deleteProduct = (productId: string): Thunk =>
  async (dispatch, getState) => {
    await deleteSingleProduct(productId)
    dispatch(getProducts())
  }