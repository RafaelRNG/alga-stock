import { ProductCreator } from "../components/Products/ProductForm";
import { Product } from "../shared/Table/Table.mockdata";
import http from "../utils/http";

export const getAllProducts = () => {
  return http
    .get<Product[]>("http://localhost:3024/products")
    .then(res => res.data)
}

export const createSingleProduct = (product: ProductCreator) => {
  return http
    .post<ProductCreator>("http://localhost:3024/products", product)
}

export const updateSingleProduct = ({ _id, name, price, stock }: Product) => {
  return http
    .patch<ProductCreator>(`http://localhost:3024/products/${_id}`, {
      ...(name && { name }),
      ...(price && { price }),
      ...(stock && { stock }),
    })
}

export const deleteSingleProduct = (id: string) => {
  return http.delete(`http://localhost:3024/products/${id}`)
}