import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

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
      showPlayground={true}
      preview={() => (
        <div className="img-demo" role="img" aria-label="Retro sun landscape" />
      )}
      examples={<>
          <h3>Framed</h3>
          <div className="ex"><div className="canvas"><div className="img-demo" /></div><div className="exbar"><span>framed.tsx</span></div></div>
        </>}
      props={[
        { name: 'src', type: ['string'], defaultValue: '—', description: 'Image URL.' },
        { name: 'alt', type: ['string'], defaultValue: '—', description: 'Accessible description.' },
        { name: 'width', type: ['string'], defaultValue: '—', description: 'CSS width.' },
        { name: 'height', type: ['string'], defaultValue: '—', description: 'CSS height.' },
      ]}
    />
  );
}
