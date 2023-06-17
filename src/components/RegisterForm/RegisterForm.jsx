import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Input,
  FormOfRegister,
  RegisterLabel,
  Button,
  LogInLink,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const schema = Yup.object({
  name: Yup.string()
    .min(3, 'Name should contain 3 characters as min')
    .max(10, 'Name should contain 10 characters as max')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Register form</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log(values);
          dispatch(register(values));
          actions.resetForm();
        }}
      >
        <FormOfRegister autoComplete="off">
          <RegisterLabel>
            Username
            <Input name="name" placeholder="Name" required />
            <ErrorMessage name="name" component="p" />
          </RegisterLabel>
          <RegisterLabel>
            Email
            <Input
              type="email"
              name="email"
              placeholder="usermail@email.com"
              required
            />
            <ErrorMessage name="email" component="p" />
          </RegisterLabel>
          <RegisterLabel>
            Password
            <Input
              type="password"
              name="password"
              placeholder="********"
              required
            />
            <ErrorMessage name="password" component="p" />
          </RegisterLabel>
          <Button type="submit">Register</Button>
        </FormOfRegister>
      </Formik>

      <p>
        Already registered? <LogInLink to="/login">Log In!</LogInLink>
      </p>
    </div>
  );
};
