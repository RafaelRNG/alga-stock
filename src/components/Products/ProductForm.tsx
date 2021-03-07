import { useState, ChangeEvent, FC, useEffect } from "react";
import Button from "../../shared/Button";
import Form from "../../shared/Form"
import Input from "../../shared/Input";
import { Product } from "../../shared/Table/Table.mockdata";

export interface ProductCreator {
  name: string;
  price: number;
  stock: number;
}

interface InitialFormStates {
  id?: number;
  name: string;
  price: string;
  stock: string;
}


interface ProductFormProps {
  form?: Product
  onSubmit?: (product: ProductCreator) => void;
  onUpdate?: (product: Product) => void;
  onDelete?: (product: Product) => void;
  onCancel?: () => void;
}

const ProductForm: FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormStates = props.form
    ? {
      id: props.form.id,
      name: props.form.name,
      price: String(props.form.price),
      stock: String(props.form.stock)
    }
    : {
      name: "",
      price: "",
      stock: ""
    }

  const [form, setForm] = useState<InitialFormStates>(initialFormState);

  useEffect(() => {
    setForm(initialFormState);
  }, [props.form])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const updateProduct = (product: InitialFormStates) => {
    const productDto = {
      id: Number(product.id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onUpdate && props.onUpdate(productDto);
  }

  const createProduct = (product: InitialFormStates) => {
    const productDto = {
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock)
    }

    props.onSubmit && props.onSubmit(productDto);
  }

  const handleFormSubmit = () => {
    form.id
      ? updateProduct(form)
      : createProduct(form)

    setForm(initialFormState);
  }

  return (
    <Form
      title="Product Form"
      onSubmit={handleFormSubmit}>

      <Input
        onChange={handleInputChange}
        name="name"
        label="Name"
        placeholder="E.g.: Cookie"
        required
        value={form.name} />

      <Input
        onChange={handleInputChange}
        name="price"
        label="Price"
        step="0.01"
        min="0"
        type="number"
        placeholder="E.g.: 1.25"
        required
        value={form.price} />

      <Input
        onChange={handleInputChange}
        name="stock"
        label="Stock"
        min="0"
        type="number"
        placeholder="E.g.: 15"
        required
        value={form.stock} />

      <Button> {form.id ? "Update" : "Submit"}</Button>
    </Form>
  )
}

export default ProductForm;