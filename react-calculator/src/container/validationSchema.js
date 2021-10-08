import * as Yup from "yup";
const reg = new RegExp(/^[0-9]+[-+/*][0-9]+$/);

export const validationSchema = Yup.object().shape({
    calcValue: Yup.string()
    .matches(reg, "введите только цифры и символы")
    .trim()
    .required('обязательное поле')
});
