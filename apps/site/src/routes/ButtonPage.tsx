import { Button } from '@ui-rocket/rocket';
import { ComponentDoc, PlaygroundState } from '../components/ComponentDoc';
import { Icon } from '../components/Icons';
import { COMPONENTS } from '../data/components';

const meta = COMPONENTS.find((c) => c.id === 'button')!;

const sizeMap: Record<PlaygroundState['size'], 'xs' | 'small' | 'medium' | 'large' | 'xl'> = {
  xs: 'xs',
  sm: 'small',
  md: 'medium',
  lg: 'large',
  xl: 'xl',
};

const colorMap: Record<string, 'brand' | 'olive' | 'navy' | 'mustard' | 'powder'> = {
  rust: 'brand',
  olive: 'olive',
  navy: 'navy',
  mustard: 'mustard',
  powder: 'powder',
};

interface PageProps {
  sidebarOpen: boolean;
  onCloseSidebar: () => void;
}

export function ButtonPage({ sidebarOpen, onCloseSidebar }: PageProps) {
  return (
    <ComponentDoc
      meta={meta}
      sidebarOpen={sidebarOpen}
      onCloseSidebar={onCloseSidebar}
      importName="Button"
      controls={['variant', 'color', 'size', 'radius', 'loading', 'disabled']}
      generateCode={(s) => {
        const color = colorMap[s.color] || 'brand';
        return `import { Button } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Button
      label="Launch"
      styleBtn="${s.variant === 'ghost' ? 'ghost' : s.variant}"
      size="${sizeMap[s.size]}"
      radius="${s.radius}"
      color="${color}"${s.loading ? '\n      loading' : ''}${s.disabled ? '\n      disabled' : ''}
    />
  )
}`;
      }}
      preview={(s) => (
        <Button
          label="Launch"
          styleBtn={s.variant}
          size={sizeMap[s.size]}
          radius={s.radius}
          color={colorMap[s.color] || 'brand'}
          loading={s.loading}
          disabled={s.disabled}
          classes="btn-primary"
        >
          {!s.loading ? <Icon name="send" /> : null}
        </Button>
      )}
      examples={
        <>
          <h3 id="variants">Variants</h3>
          <p className="txt">
            Four variants map to emphasis: solid for the main action, ghost for the least.
          </p>
          <div className="ex">
            <div className="canvas">
              <Button label="Solid" styleBtn="solid" />
              <Button label="Soft" styleBtn="soft" />
              <Button label="Outline" styleBtn="outline" />
              <Button label="Ghost" styleBtn="ghost" />
            </div>
            <div className="exbar">
              <span>variants.tsx</span>
            </div>
          </div>

          <h3 id="sizes">Sizes</h3>
          <div className="ex">
            <div className="canvas">
              <Button label="Extra small" styleBtn="solid" size="xs" />
              <Button label="Small" styleBtn="solid" size="small" />
              <Button label="Medium" styleBtn="solid" size="medium" />
              <Button label="Large" styleBtn="solid" size="large" />
            </div>
            <div className="exbar">
              <span>sizes.tsx</span>
            </div>
          </div>

          <h3 id="icons">Icons & loading</h3>
          <div className="ex">
            <div className="canvas">
              <Button label="Launch" styleBtn="solid">
                <Icon name="send" />
              </Button>
              <Button label="Next stage" styleBtn="outline" classes="btn-secondary">
                <Icon name="arrow" />
              </Button>
              <Button label="Fueling…" styleBtn="solid" loading />
              <Button label="Disabled" styleBtn="outline" disabled classes="btn-secondary" />
            </div>
            <div className="exbar">
              <span>icons.tsx</span>
            </div>
          </div>
        </>
      }
      props={[
        {
          name: 'styleBtn',
          type: ['"solid"', '"soft"', '"outline"', '"ghost"', '"text"'],
          defaultValue: '"solid"',
          description: 'Visual style of the button.',
        },
        {
          name: 'color',
          type: ['"brand"', '"olive"', '"navy"', '"mustard"', '"powder"'],
          defaultValue: '"brand"',
          description: 'Color role from the theme tokens (override via --accent CSS var).',
        },
        {
          name: 'size',
          type: ['"xs"', '"small"', '"medium"', '"large"', '"xl"'],
          defaultValue: '"small"',
          description: 'Height, padding and font size.',
        },
        {
          name: 'radius',
          type: ['"none"', '"sm"', '"md"', '"full"'],
          defaultValue: '—',
          description: 'Corner radius token.',
        },
        {
          name: 'loading',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Shows a centered spinner and sets aria-busy.',
        },
        {
          name: 'label',
          type: ['string'],
          defaultValue: '—',
          description: 'Button label text.',
        },
        {
          name: 'disabled',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Disables interaction.',
        },
        {
          name: 'rounded',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Legacy alias for pill radius.',
        },
        {
          name: 'shadow',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Adds an explicit shadow class.',
        },
        {
          name: 'scrollToTop',
          type: ['boolean'],
          defaultValue: 'false',
          description: 'Scrolls window to top on click.',
        },
      ]}
    />
  );
}
