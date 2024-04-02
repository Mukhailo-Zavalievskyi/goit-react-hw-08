import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Username</label>
        <Field className={css.input} type="text" name="name"></Field>
        <label className={css.label}>Email</label>
        <Field className={css.input} type="email" name="email"></Field>
        <label className={css.label}>Password</label>
        <Field className={css.input} type="password" name="password"></Field>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
