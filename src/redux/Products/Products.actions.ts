import { Product } from "../../shared/Table/Table.mockdata"
import { Action } from "./Products.reducer"

export const insertNewProduct = (): Action<Product> => {
  return {
    type: "INSERT_NEW_PRODUCT",
    payload: {
      _id: "338423984",
      name: "Cookie",
      price: 0.35,
      stock: 700
    }
  }
}