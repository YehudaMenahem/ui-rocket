import{j as e,O as t,C as s}from"./index-D-GpQFda.js";import{C as n}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const o=s.find(l=>l.id==="select"),d=["Falcon 9","Starship","SLS"];function u({sidebarOpen:l,onCloseSidebar:a}){return e.jsx(n,{meta:o,sidebarOpen:l,onCloseSidebar:a,importName:"SelectField",controls:["color","disabled","required"],preview:i=>e.jsx("div",{style:{width:"100%",maxWidth:280},children:e.jsx(t,{id:"demo-sel",label:"Vehicle",options:d,selectOption:"Falcon 9",disabled:i.disabled,required:i.required})}),generateCode:i=>`import { SelectField } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <SelectField
      label="Vehicle"
      options={['Falcon 9', 'Starship', 'SLS']}
      selectOption="Falcon 9"
      disabled={${i.disabled}}
      required={${i.required}}
    />
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Basic"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(t,{id:"s1",label:"Launch window",options:["Dawn","Noon","Dusk"]})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"basic.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:"—",description:"Field label."},{name:"options",type:["string[]"],defaultValue:"—",description:"Selectable options."},{name:"selectOption",type:["string"],defaultValue:"—",description:"Selected value."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the select."},{name:"required",type:["boolean"],defaultValue:"false",description:"Required in forms."},{name:"multiple",type:["boolean"],defaultValue:"false",description:"Native multiple select (progressive enhancement)."},{name:"isOpen",type:["boolean"],defaultValue:"false",description:"Initial open state."},{name:"change",type:["(value: string) => void"],defaultValue:"—",description:"Selection handler."}]})}export{u as SelectFieldPage};
//# sourceMappingURL=SelectFieldPage-Bu-EBHxJ.js.map
