import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required'),
  });

  const handleAdd = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleAdd}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" style={{ color: 'red' }} />
        </div>
        <div className={css.field}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: 'red' }}
          />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
