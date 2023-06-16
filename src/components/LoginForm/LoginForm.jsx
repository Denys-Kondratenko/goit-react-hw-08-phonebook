import { ErrorMessage, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, FormOfLogIn, Input, Label } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const schema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must contain 8 characters as min')
    .matches(/[a-zA-Z]/, 'Password must contain at least one Latin letter')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Log In form</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          dispatch(logIn(values));
          actions.resetForm();
        }}
      >
        <FormOfLogIn autoComplete="off">
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="usermail@email.com"
              required
            />
            <ErrorMessage name="email" component="p" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="********"
              required
            />
            <ErrorMessage name="password" component="p" />
          </Label>
          <Button type="submit">Log In</Button>
        </FormOfLogIn>
      </Formik>

      <p>
        Don't have an account yet? Please,
        <Link to="/register">Register!</Link>
      </p>
    </div>
  );
};
