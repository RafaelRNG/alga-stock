import { useState, ChangeEvent } from "react";
import Button from "../../shared/Button"
import Form from "../../shared/Form";
import Input from "../../shared/Input"

const LoginForm = () => {

   const [form, setForm] = useState({
      user: "",
      pass: ""
   });

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setForm({
         ...form,
         [name]: value
      })
   }

   const handleLogin = () => {
      console.table(form)
   }

   return <Form title="Login - AlgaStock" onSubmit={handleLogin}>
      <Input
         label="User"
         name="user"
         value={form.user}
         onChange={handleInputChange}
         placeholder="E.g.: your_user_name" />
      <Input
         label="password"
         type="password"
         value={form.pass}
         onChange={handleInputChange}
         name="pass" />

      <Button>Login</Button>
   </Form>
}

export default LoginForm;