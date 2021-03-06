import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import MyCamera from '../../../components/MyCamera/MyCamera';
import MyCam from '../../../components/MyCamera/MyCamera2';
import styles from './SlabForm.module.css';

const SlabForm = (props) => {
  const [cameraActive, toggleCamera] = useState(false);

  const toggleCameraHandler = () => {
    toggleCamera(!cameraActive)
  }

  const matFinishes = [
    { value: 'honed', label: 'Honed' },
    { value: 'polished', label: 'Polished' },
    { value: 'leathered', label: 'Leathered' }
  ]

  const required = value => (
    value ? undefined : <span className={styles.required}>Required</span>);

  return (
    <section className={styles.wrapper}>
      <Form onSubmit={props.onSubmit}>
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name='material.name' placeholder='Blue Fire' validate={required}>
              {({ input, meta, placeholder }) => (
                <div className={styles.formFields}>
                  <label className={styles.inputHeader}>Slab Name</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && meta.error}
                </div>
              )}
            </Field>
            <Field name='material.type' validate={required}>
              {({ input, meta }) => (
                <div className={styles.formFields}>
                  <label className={styles.inputHeader}>Slab Type</label>
                  <select {...input}>
                    <option value=''>Choose Type</option>
                    <option value='marble'>Marble</option>
                    <option value='granite'>Granite</option>
                    <option value='quartz'>Quartz</option>
                  </select>
                  {meta.error && meta.touched && meta.error}
                </div>
              )}
            </Field>
            <div className={styles.formFields}>
              <label className={styles.inputHeader}>Slab Finish</label>
              {matFinishes.map(field => (
                <label key={field.value} className={styles.checkboxLabel}>
                  <Field
                    name='material.finish'
                    component='input'
                    type='checkbox'
                    value={field.value}
                  />
                  {field.label}
                </label>
              ))}
            </div>
            <Field name='material.size' placeholder='170 x 85' validate={required}>
              {({ input, meta, placeholder }) => (
                <div className={styles.formFields}>
                  <label className={styles.inputHeader}>Slab Size</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && meta.error}
                </div>
              )}
            </Field>
            <button type='button' onClick={toggleCameraHandler}>Start/Stop Camera</button>
            <Field name='files'>
              {props => (
                <div className={styles.formFields}>
                  <MyCamera
                    {...props.input}
                    material={values.material}
                    cameraActive={cameraActive}
                  />
                </div>
              )}
            </Field>

            <Field name='photos'>
              {props => (
                <div className={styles.formFields}>
                  <MyCam
                    {...props.input}
                  />
                </div>
              )}
            </Field>

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
        )}
      </Form>
    </section>
  )
}

export default SlabForm;