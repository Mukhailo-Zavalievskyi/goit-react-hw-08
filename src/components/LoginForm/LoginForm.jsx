import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>Email</label>
        <Field className={css.input} type="email" name="email"></Field>
        <label className={css.label}>Password</label>
        <Field className={css.input} type="password" name="password"></Field>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}
