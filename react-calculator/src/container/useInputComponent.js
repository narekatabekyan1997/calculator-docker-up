import { useState } from "react";
import axios from "axios";
import { initialValues } from "./constants";

export const useInputComponent = () => {
  const [resault, setResault] = useState("");

  const baseURL = "http://localhost:3001/calculate";

  const handleSubmit = (values, { resetForm }) => {
    axios.post(baseURL, { exp: values.calcValue }).then((res) => {
      setResault(res.data.result);
      resetForm({
        values: "",
      });
    });
  };

  return { handleSubmit, initialValues, resault };
};
