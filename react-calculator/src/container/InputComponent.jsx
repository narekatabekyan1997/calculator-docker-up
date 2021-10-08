import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues } from "./constants";
import { validationSchema } from "./validationSchema";
import { useInputComponent } from "./useInputComponent";

import "./InputComponent.scss";

const InputComponent = () => {
  const { handleSubmit, resault } = useInputComponent();
  return (
    <div className="InputComponent">
      <span>Калькулятор</span>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <Field
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.calcValue}
                type="text"
                name="calcValue"
                placeholder="вычисление"
                className="input"
              />
              <ErrorMessage
                name="calcValue"
                component="div"
                className="errText"
              />
            </div>
            <button className="btn" type="submit">
            отправить
            </button>
          </Form>
        )}
      </Formik>
      {resault && <h1>{`результат:  ${resault}`}</h1> }
    </div>
  );
};

export default InputComponent;
