import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormTask = ({addTask}) => {

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, 'Must be 5 characters')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      addTask(values.title);
      formik.resetForm();
    },
  });

  return (
    <div style={{ marginBottom: "20px" }}>
      <h1>Add New Task!</h1>
      <form onSubmit={formik.handleSubmit} style={{maxWidth:"200px", display:"flex", flexDirection:"column"}}>
        <label htmlFor="title">Task</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          style={{marginBottom:"10px"}}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default FormTask