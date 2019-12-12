import React from 'react'
import { Form, Field } from 'react-final-form'
import styles from './AddInv.module.css';

const AddInv = (props) => {
  const onSubmit = ({ material, math }) => {
    console.log('[AddInv]', material);
    if (math.size1 || math.size2) {
      const total = math.size1 * math.size2 / 144;
      material.sqfeet = total;
      material.dimension = `${math.size1} x ${math.size2}`;
    }
    window.alert(JSON.stringify(material, 0, 2))
  };

  const required = value => (value ? undefined : 'Required');

  return (
    <section className={styles.wrapper}>
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name='material.name' placeholder='Blue Fire' validate={required}>
              {({ input, meta, placeholder }) => (
                <div className={styles.formFields}>
                  <label className={styles.inputHeader}>Slab Name</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
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
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name='material.finish' validate={required}>
              {({ input, meta }) => (
                <div className={styles.formFields}>
                  <label className={styles.inputHeader}>Slab Finish</label>
                  <select {...input}>
                    <option value=''>Choose Finish</option>
                    <option value='honed'>Honed</option>
                    <option value='polished'>Polished</option>
                    <option value='leathered'>Leather</option>
                  </select>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label className={styles.inputHeader}>Slab Price</label>
              <Field
                name='material.price'
                component='input'
                type='text'
                size='5'
                placeholder='sq/f  $'
              />
            </div>
            <div>
              <label className={styles.inputHeader}>Slab Dimensions</label>
              <Field
                name='math.size1'
                component='input'
                type='text'
                size='4'
              />
              <span><strong> X </strong></span>
              <Field
                name='math.size2'
                component='input'
                type='text'
                size='4'
              />
            </div>
            <div>
              <label className={styles.inputHeader}>Slab Details</label>
              <Field
                name='material.blk'
                component='input'
                type='text'
                size='6'
                placeholder='Blk #'
              />
              <span><strong> - </strong></span>
              <Field
                name='material.slabNum'
                component='input'
                type='text'
                size='3'
                placeholder='Slab #'
              />
            </div>
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

export default AddInv;