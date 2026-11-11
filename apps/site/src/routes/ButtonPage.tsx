import { useState } from 'react';
import {
  Button,
  Icon,
  Tabs,
  InputField,
  RadioButton,
  Checkbox,
  ToggleButton,
  SelectField,
} from '@ui-rocket/rocket';
import { ShowcaseCard } from '../components/ShowcaseCard';

export function ButtonPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonSize, setButtonSize] = useState<'small' | 'medium' | 'large'>(
    'small'
  );
  const [buttonIcon, setButtonIcon] = useState(false);
  const [buttonStyle, setButtonStyle] = useState<'solid' | 'outline' | 'text'>(
    'solid'
  );
  const [buttonDisable, setButtonDisable] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Le bouton');
  const [buttonBackToTopPosition, setButtonBackToTopPosition] = useState<
    string | undefined
  >();

  const buttonBackToTopOptions = [
    'default',
    'bottom-right',
    'bottom-center',
    'bottom-left',
  ];

  const renderView = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className="grid">
            <div className="row mr-b-xl">
              <div className="col-1 mobile-col-1 btn-backTop">
                <Button
                  label="Rocket To Top"
                  styleBtn="solid"
                  size={buttonSize}
                  scrollToTop={true}
                  position={buttonBackToTopPosition}
                />
              </div>
            </div>
            <div className="settings pd-l-xl">
              <h3>
                <Icon iconClass="setting" />
                Customization
              </h3>
              <ul className="mr-b-xl">
                <li>
                  <SelectField
                    label="button position"
                    options={buttonBackToTopOptions}
                    id="button-positions"
                    name="button-positions"
                    change={setButtonBackToTopPosition}
                  />
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return (
          <div className="grid">
            <div className="row mr-b-xl">
              <div className="col-1 btn">
                <Button
                  styleBtn={buttonStyle}
                  size={buttonSize}
                  label={buttonLabel}
                  classes="specific-cssclass"
                  disabled={buttonDisable}
                  loading={loading}
                >
                  {buttonIcon && <Icon iconClass="user" />}
                </Button>
              </div>
            </div>
            <div className="settings pd-l-xl" style={{ minWidth: '250px' }}>
              <h3>
                <Icon iconClass="setting" />
                Customization
              </h3>
              <ul className="mr-b-xl">
                <li>
                  <InputField
                    type="text"
                    label="Button Label"
                    value={buttonLabel}
                    change={setButtonLabel}
                    maxlength={15}
                  />
                </li>
              </ul>
              <ul className="mr-b-lr horizontal-list">
                <span className="mr-r-sm">Size:</span>
                <li>
                  <RadioButton
                    name="size"
                    val="small"
                    label="small"
                    id="small"
                    isSelected={buttonSize === 'small'}
                    change={() => setButtonSize('small')}
                  />
                </li>
                <li>
                  <RadioButton
                    name="size"
                    val="medium"
                    label="medium"
                    id="medium"
                    isSelected={buttonSize === 'medium'}
                    change={() => setButtonSize('medium')}
                  />
                </li>
                <li>
                  <RadioButton
                    name="size"
                    val="large"
                    label="large"
                    id="large"
                    isSelected={buttonSize === 'large'}
                    change={() => setButtonSize('large')}
                  />
                </li>
              </ul>
              <ul className="mr-b-xl horizontal-list">
                <span className="mr-r-sm">Type:</span>
                <li>
                  <RadioButton
                    name="button-type"
                    val="solid"
                    label="solid"
                    id="solid"
                    isSelected={buttonStyle === 'solid'}
                    change={() => setButtonStyle('solid')}
                  />
                </li>
                <li>
                  <RadioButton
                    name="button-type"
                    val="ghost"
                    label="ghost"
                    id="ghost"
                    isSelected={buttonStyle === 'outline'}
                    change={() => setButtonStyle('outline')}
                  />
                </li>
                <li>
                  <RadioButton
                    name="button-type"
                    val="text"
                    label="text"
                    id="text"
                    isSelected={buttonStyle === 'text'}
                    change={() => setButtonStyle('text')}
                  />
                </li>
              </ul>
              <ul className="mr-b-lr">
                <li>
                  <Checkbox
                    label="Add Icon"
                    name="add-icon"
                    id="addIcon"
                    checked={buttonIcon}
                    change={() => setButtonIcon(!buttonIcon)}
                  />
                </li>
              </ul>
              <ul className="mr-b-xl">
                <li>
                  <Checkbox
                    label="Disabled Mode"
                    name="disabled-mode"
                    id="disabledMode"
                    checked={buttonDisable}
                    change={() => setButtonDisable(!buttonDisable)}
                  />
                </li>
              </ul>
              <ul className="mr-b-xl">
                <li>
                  <ToggleButton
                    label="Loading state"
                    name="Loading"
                    id="Loading"
                    isChecked={loading}
                    change={setLoading}
                  />
                </li>
              </ul>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="ui container button-page">
      <ShowcaseCard title="Buttons">
        <div className="grid">
          <div className="row section">
            <div className="col-1">
              <p>Buttons allow users to take action with a single tap.</p>
            </div>
          </div>

        <div className="row section">
          <div className="col-1 mr-b-lr">
            <h2>Demo</h2>
          </div>
          <div className="col-1">
            <div className="container">
              <Tabs
                tabs={['Btn', 'Back To Top Btn']}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="content">{renderView()}</div>
            </div>
          </div>
        </div>

        <div className="row section">
          <div className="col-1 props-keys">
            <h2>Component props</h2>
            <p>
              <span className="bold prop">label:</span> The text inside the
              button | string
            </p>
            <p>
              <span className="bold prop">styleBtn:</span> Button style: solid /
              outline / text | string
            </p>
            <p>
              <span className="bold prop">size:</span> Button size: small /
              medium / large | string
            </p>
            <p>
              <span className="bold prop">loading:</span> Show loading state |
              boolean
            </p>
            <p>
              <span className="bold prop">disabled:</span> Disable the button |
              boolean
            </p>
          </div>
        </div>
        </div>
      </ShowcaseCard>
    </div>
  );
}
