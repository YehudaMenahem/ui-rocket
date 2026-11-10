import { Checkbox } from '@ui-rocket/rocket';

export function CheckboxPage() {
  return (
    <div className="ui container checkbox-page">
      <div className="grid">
        <div className="row section">
          <div className="col-1">
            <h1>Checkbox</h1>
            <p>Checkboxes allow selection of multiple options.</p>
          </div>
        </div>
        <div className="row section">
          <div className="col-1">
            <Checkbox label="Option 1" name="opt1" id="opt1" />
            <Checkbox
              label="Option 2"
              name="opt2"
              id="opt2"
              iconType="heart"
            />
            <Checkbox label="Option 3" name="opt3" id="opt3" iconType="star" />
          </div>
        </div>
      </div>
    </div>
  );
}
