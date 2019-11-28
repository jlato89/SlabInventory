import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import MyCamera from '../../../components/MyCamera/MyCamera';
// import MyCamera from '../../../components/MyCamera/CreateImgFile/CreateImgFile';

import styles from './AddInvForm.module.css';

const AddInvForm = (props) => {
  const [cameraActive, toggleCamera] = useState(false);
  const [files, setFiles] = useState([])

  const toggleCameraHandler = () => {
    toggleCamera(!cameraActive)
  }
  const imagesHandler = (blob) => {
    console.log('[AddInvForm]', blob);
    setFiles(blob);
  }

  const required = value => (value ? undefined : 'Required');

  return (
    <Form onSubmit={props.onSubmit} initialValues={{}}>
      {({ handleSubmit, form, submitting, pristine, values }) => (
        <>
          <form onSubmit={handleSubmit}>
            <Field name='material.name' placeholder='Blue Fire' validate={required}>
              {({ input, meta, placeholder }) => (
                <div>
                  <label className={styles.inputHeader}>Material</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='material.type' validate={required}>
              {({ input, meta }) => (
                <div>
                  <label className={styles.inputHeader}>Material Type</label>
                  <select {...input}>
                    <option value=''>Choose Type</option>
                    <option value='marble'>Marble</option>
                    <option value='granite'>Granite</option>
                    <option value='quartz'>Quartz</option>
                  </select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label className={styles.inputHeader}>Material Finish</label>
              {[{ value: 'honed', label: 'Honed' },
              { value: 'polished', label: 'Polished' },
              { value: 'leathered', label: 'Leathered' }].map(field => (
                <label key={field.value} className={styles.checkboxLabel}>
                  <Field
                    name="material.finish"
                    component="input"
                    type="checkbox"
                    value={field.value}
                  />{' '}
                  {field.label}
                </label>
              ))}
            </div>
            <Field name='material.size' placeholder='170 x 85' validate={required}>
              {({ input, meta, placeholder }) => (
                <div>
                  <label className={styles.inputHeader}>Material Size</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <MyCamera
              material={values.material}
              cameraActive={cameraActive}
              images={(blobArr) => { setFiles(blobArr) }}
            />

            <div className='buttons'>
              <button type='submit' disabled={submitting || pristine}>
                Submit
              </button>
              <button type='button' onClick={form.reset} disabled={submitting || pristine}>
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>

          <button onClick={toggleCameraHandler}>Toggle Camera</button>
        </>
      )}
    </Form>
  )
}

export default AddInvForm;