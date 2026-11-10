import { SelectField } from '@ui-rocket/rocket';

export function SelectFieldPage() {
  return (
    <div className="ui container select-field-page">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Select Field</h1>
            <p>Select fields provide a dropdown menu of options.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <SelectField
              label="Choose an option"
              options={['Apple', 'Banana', 'Cherry']}
              id="demo-select"
              name="demo-select"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
