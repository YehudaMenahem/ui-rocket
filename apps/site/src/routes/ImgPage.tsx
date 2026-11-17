import { Img } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';
import rocketArt from '../assets/images/rocket.svg';

const meta = COMPONENTS.find((c) => c.id === 'img')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function ImgPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Img"
      showPlayground
      controls={['color']}
      generateCode={() => `import { Img } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Img
      src="/rocket.svg"
      alt="Retro rocket illustration"
      width="180"
      height="180"
      classes="img-framed"
    />
  )
}`}
      preview={() => (
        <Img
          src={rocketArt}
          alt="Retro rocket illustration"
          width="180"
          height="180"
          classes="img-framed"
        />
      )}
      examples={
        <>
          <h3>Framed</h3>
          <div className="ex">
            <div className="canvas">
              <Img
                src={rocketArt}
                alt="Retro rocket illustration"
                width="160"
                height="160"
                classes="img-framed"
              />
            </div>
            <div className="exbar">
              <span>framed.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        { name: 'src', type: ['string'], defaultValue: '—', description: 'Image URL.' },
        { name: 'alt', type: ['string'], defaultValue: '—', description: 'Accessible description.' },
        { name: 'width', type: ['string'], defaultValue: '—', description: 'CSS width.' },
        { name: 'height', type: ['string'], defaultValue: '—', description: 'CSS height.' },
        { name: 'classes', type: ['string'], defaultValue: '—', description: 'CSS class.' },
      ]}
    />
  );
}
