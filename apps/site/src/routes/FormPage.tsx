import { InputField, Button, Checkbox } from '@ui-rocket/rocket';
import { ComponentDoc } from '../components/ComponentDoc';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'form')!;

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function FormPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Form"
      showPlayground={true}
      preview={() => (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <InputField label="Callsign" id="f1" value="" change={() => {}} />
          <Button label="Submit" styleBtn="solid" />
        </form>
      )}
      examples={<>
          <h3>Checklist</h3>
          <div className="ex"><div className="canvas"><form className="form" onSubmit={(e)=>e.preventDefault()}><InputField label="Mission" id="f2" value="Artemis" change={()=>{}} /><Checkbox id="f3" label="Go for launch" /><Button label="Send" styleBtn="solid" /></form></div><div className="exbar"><span>form.tsx</span></div></div>
        </>}
      props={[
        { name: 'children', type: ['ReactNode'], defaultValue: '—', description: 'Form fields and actions.' },
      ]}
    />
  );
}
