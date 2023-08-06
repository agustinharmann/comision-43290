import { useContext, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";

import { CartContext } from "../../../context/CartContextContainer";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const FormFormik = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { cart, getTotalPrice } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (data) => {

      let order = {
        buyer: data,
        items: cart,
        total,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

      cart.forEach((elemento) => {
        updateDoc(doc(db, "products", elemento.id), {
          stock: elemento.stock - elemento.quantity,
        });
      });
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "Debe tener al menos 5 caracteres")
        .max(15),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div
      style={{
        minHeight: '80vh',
        padding: '0px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        !orderId ? <form
          style={{
            width: '100%',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit}

        >
          <TextField
            label="Nombre"
            variant="outlined"
            name="name"
            onChange={handleChange}
            error={errors.name ? true : false}
            helperText={errors.name}
          />

          <TextField
            sx={{
              margin: "10px 0px"
            }}
            type="text"
            label="Email"
            variant="outlined"
            name="email"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          <TextField
            type={showPassword ? "text" : "password"}
            label="Pass"
            variant="outlined"
            name="phone"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          <Button type="button" onClick={() => setShowPassword(!showPassword)}>
            Mostrar/ocultar
          </Button>

          <Button
            sx={{
              margin: "20px 0px"
            }}
            type="submit" variant="contained">
            Enviar
          </Button>

        </form> : <h1>la orden es {orderId}</h1>
      }
    </div>
  );
};

export { FormFormik };
