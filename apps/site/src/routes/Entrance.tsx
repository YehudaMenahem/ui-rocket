import { Img } from '@ui-rocket/rocket';
import rocketDark from '../assets/images/rocket_BW_illustration_dark_mode.svg';
import rocketLight from '../assets/images/rocket_BW_illustration.svg';

interface EntranceProps {
  theme: boolean;
}

export function Entrance({ theme }: EntranceProps) {
  return (
    <div className="ui container entrace">
      <div className="grid">
        <div className="row mr-b-md">
          <div className="col">
            <h1 className="title">
              Hey There <br /> & Welcome{' '}
              <span role="img" className="wavemoji">
                <span className="hey-sign" role="img" aria-label="hey sign">
                  👋
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div className="row mr-b-md">
          <div className="col-2 mobile-col-1">
            <p className="line-break">
              {`Ui Rocket is a components library project made with React.
The components are functional components built with TypeScript.
Every page presents a component and gives a brief interactive demonstration,
props explanation and code snippet example.
Ui Rocket is browser friendly and mobile friendly, has a theme mode at
top which you can toggle by your preferences.

I really hope you'll enjoy my little project.
Happy coding & Have a great and successful day
Yehuda`}
            </p>
          </div>
        </div>
      </div>
      {theme ? (
        <Img src={rocketDark} classes="main-img" alt="Rocket Dark" />
      ) : (
        <Img src={rocketLight} classes="main-img" alt="Rocket Light" />
      )}
    </div>
  );
}
