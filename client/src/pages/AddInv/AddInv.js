import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import styles from './AddInv.module.css';

const AddInv = (props) => {
  let endResult = {};
  const required = value => (
    value ? undefined : <span className={styles.required}>Required</span>);

  const onSubmit = ({ material, math }) => {
    console.log('[AddInv]', material);
    if (math && math.size) {
      const total = math.size.num1 * math.size.num2 / 144;
      material.sqfeet = total.toFixed(2);
      material.dimension = `${math.size.num1}X${math.size.num2}`;
    }
    // if (math.blk || math.slabNum) {
    //   const slabId = `${math.blk}-${math.slabNum}`;
    //   material.slabId = slabId;
    // }
    endResult = material
    // window.alert(JSON.stringify(material, 0, 2))
  };

  return (
    <section className={styles.wrapper}>
      <Form onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {({ handleSubmit, form, submitting, pristine, values,
          form: { mutators: { push, pop } } }) => (
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
                    {meta.error && meta.touched && meta.error}
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
                  name='math.size.num1'
                  component='input'
                  type='text'
                  size='4'
                />
                <span><strong> X </strong></span>
                <Field
                  name='math.size.num2'
                  component='input'
                  type='text'
                  size='4'
                />
              </div>
              <div>
                <label className={styles.inputHeader}>Slab Details</label>
                <button
                  type='button'
                  onClick={() => push('math.slabInfo', undefined)}
                >
                  Add Slab
                </button>
                <button type="button" onClick={() => pop('math.slabInfo')}>
                  Remove Slab
                </button>
                <FieldArray name='math.slabInfo'>
                  {({ fields }) =>
                    fields.map((name, index) => (
                      <div key={name}>
                        {/* <label>Cust. #{index + 1}</label> */}
                        <Field
                          name={`${name}.blk`}
                          component='input'
                          placeholder='Blk #'
                          size='6'
                        />
                        <span><strong> - </strong></span>
                        <Field
                          name={`${name}.slabNum`}
                          component='input'
                          placeholder='Slab #'
                          size='3'
                        />
                        <span
                          onClick={() => fields.remove(index)}
                          style={{ cursor: 'pointer' }}
                          role='img'
                          aria-label='remove'
                        >
                          ❌
                        </span>
                      </div>
                    ))
                  }
                </FieldArray>
                {/* <Field
                name='math.blk'
                component='input'
                type='text'
                size='6'
                placeholder='Blk #'
              />
              <span><strong> - </strong></span>
              <Field
                name='math.slabNum'
                component='input'
                type='text'
                size='3'
                placeholder='Slab #'
              /> */}
              </div>
              <div className='buttons'>
                <button type='submit' disabled={submitting || pristine}>
                  Submit
              </button>
                <button type='button' onClick={form.reset} disabled={submitting || pristine}>
                  Reset
              </button>
              </div>
              <strong><pre>{JSON.stringify(endResult, 0, 2)}</pre></strong>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
      </Form>
    </section>
  )
}

export default AddInv;