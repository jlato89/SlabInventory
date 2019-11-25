import React from 'react'
import { Form, Field } from 'react-final-form'

import styles from './AddInvForm.module.css';

const AddInvForm = (props) => (
  <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.inputHeader}>Material</label>
          <Field
            name='material'
            component='input'
            type='text'
            placeholder='Blue Fire'
          />
        </div>
        <div>
          <label className={styles.inputHeader}>Material Type</label>
          <Field name='type' component='select'>
            <option value=''>Choose Type</option>
            <option value='marble'>Marble</option>
            <option value='granite'>Granite</option>
            <option value='quartz'>Quartz</option>
          </Field>
        </div>
        <div>
          <label className={styles.inputHeader}>Material Finish</label>
          <label className={styles.checkboxLabel}>
            <Field
              name="finish"
              component="input"
              type="checkbox"
              value="honed"
            />{' '}
            Honed
          </label>
          <label className={styles.checkboxLabel}>
            <Field
              name="finish"
              component="input"
              type="checkbox"
              value="polished"
            />{' '}
            Polished
          </label>
          <label className={styles.checkboxLabel}>
            <Field
              name="finish"
              component="input"
              type="checkbox"
              value="leathered"
            />{' '}
            Leathered
          </label>
        </div>
        <div>
          <label className={styles.inputHeader}>Material Size</label>
          <Field
            name='size'
            component='input'
            type='text'
            placeholder='170 x 85'
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
  />
)

export default AddInvForm;