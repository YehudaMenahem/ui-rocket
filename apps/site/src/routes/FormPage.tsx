import { useState } from 'react';
import {
  Form,
  InputField,
  Textbox,
  SelectField,
  RadioButton,
  Button,
} from '@ui-rocket/rocket';

export function FormPage() {
  const [inputVal, setInputVal] = useState('');
  const [textboxVal, setTextboxVal] = useState('');
  const [selectedOption, setSelectedOption] = useState('good');

  const handleSubmit = (values: Record<string, unknown>) => {
    console.log('Form submitted:', values);
    alert('Form submitted successfully! Check console for values.');
  };

  return (
    <div className="ui container form-page">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Form</h1>
            <p>Form collects user inputs.</p>
          </div>
        </div>

        <div className="row section">
          <div className="col-1">
            <Form
              submit={handleSubmit}
              id="demo-form"
              title="Demo Form"
              novalidate={true}
            >
              <p className="form-child">
                This is a demo form showing the Form component in action.
              </p>
              <div className="form-child">
                <InputField
                  label="Name"
                  type="text"
                  name="name"
                  value={inputVal}
                  change={setInputVal}
                  required
                />
              </div>
              <div className="form-child">
                <SelectField
                  label="Choose an option"
                  options={['Option A', 'Option B', 'Option C']}
                  id="options"
                  name="options"
                />
              </div>
              <h5 className="press-btn-label">Rating:</h5>
              <div className="mobile-col-1 press-buttons form-child">
                <RadioButton
                  name="rating"
                  val="good"
                  label="Good"
                  id="good"
                  isSelected={selectedOption === 'good'}
                  change={() => setSelectedOption('good')}
                />
                <RadioButton
                  name="rating"
                  val="great"
                  label="Great"
                  id="great"
                  isSelected={selectedOption === 'great'}
                  change={() => setSelectedOption('great')}
                />
              </div>
              <div className="form-child textbox">
                <Textbox
                  label="Comments"
                  rows={5}
                  name="comments"
                  value={textboxVal}
                  change={setTextboxVal}
                />
              </div>
              <div className="btn-wrapper">
                <Button
                  styleBtn="solid"
                  label="Submit"
                  classes="full-width"
                />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
