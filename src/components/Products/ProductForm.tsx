import { useState, ChangeEvent } from "react";
import Button from "../../shared/Button";
import Form from "../../shared/Form"
import Input from "../../shared/Input";

interface InitialState {
  name: string;
  price: string;
  stock: string;
}

const ProductForm = () => {

  const [form, setForm] = useState<InitialState>({
    name: "",
    price: "",
    stock: ""
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Form
      title="Product Form"
      onSubmit={() => console.log(form)}>

      <Input
        onChange={handleInputChange}
        name="name"
        label="Name"
        placeholder="E.g.: Cookie"
        required />

      <Input
        onChange={handleInputChange}
        name="price"
        label="Price"
        placeholder="E.g.: 1.25"
        step="0.01"
        min="0"
        type="number"
        required />

      <Input
        onChange={handleInputChange}
        name="stock"
        label="Stock"
        placeholder="E.g.: 15"
        min="0"
        type="number"
        required />

      <Button>Submit</Button>
    </Form>
  )
}

export default ProductForm;