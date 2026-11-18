import{j as e,C as t,r as n,E as r,U as i}from"./index-D-GpQFda.js";import{C as d}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const c=t.find(o=>o.id==="modal");function l({heroImage:o=!1}){const[s,a]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(r,{label:o?"Open hero modal":"Open modal",styleBtn:"solid",click:()=>a(!0)}),e.jsx(i,{show:s,closeModal:()=>a(!1),modalTitle:"Hold launch?",heroImage:o,children:e.jsx("p",{children:"Confirm abort sequence. Backdrop click, Escape, and the footer Close button all dismiss this dialog."})})]})}function u({sidebarOpen:o,onCloseSidebar:s}){return e.jsx(d,{meta:c,sidebarOpen:o,onCloseSidebar:s,importName:"Modal",controls:["color","heroImage"],preview:a=>e.jsx(l,{heroImage:a.heroImage},String(a.heroImage)),generateCode:a=>`import { Modal, Button } from '@ui-rocket/rocket'

export default function Demo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open" click={() => setOpen(true)} />
      <Modal
        show={open}
        closeModal={() => setOpen(false)}
        modalTitle="Hold launch?"
        heroImage={${a.heroImage}}
      >
        <p>Confirm abort sequence.</p>
      </Modal>
    </>
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Dialog"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(l,{})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"dialog.tsx"})})]}),e.jsx("h3",{children:"Hero image"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(l,{heroImage:!0})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"hero.tsx"})})]})]}),props:[{name:"show",type:["boolean"],defaultValue:"false",description:"Controls visibility."},{name:"closeModal",type:["() => void"],defaultValue:"—",description:"Close handler."},{name:"modalTitle",type:["string"],defaultValue:"—",description:"Header title."},{name:"heroImage",type:["boolean"],defaultValue:"false",description:"Shows the illustrated hero header instead of a text title."},{name:"classes",type:["string"],defaultValue:'""',description:"Extra class names."},{name:"children",type:["ReactNode"],defaultValue:"—",description:"Dialog body content."}]})}export{u as ModalPage};
//# sourceMappingURL=ModalPage-BHYoAA9H.js.map
