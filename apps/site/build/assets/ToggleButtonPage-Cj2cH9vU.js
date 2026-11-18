import{j as e,X as t,C as n}from"./index-D-GpQFda.js";import{C as d}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const c=n.find(a=>a.id==="toggle");function f({sidebarOpen:a,onCloseSidebar:i}){return e.jsx(d,{meta:c,sidebarOpen:a,onCloseSidebar:i,importName:"ToggleButton",controls:["color","checked","disabled","required","labelPosition"],initialState:{checked:!0,labelPosition:"label-from-left"},preview:(l,o)=>e.jsx(t,{id:"demo-tog",label:"Thrusters",isChecked:l.checked,disabled:l.disabled,required:l.required,labelPosition:l.labelPosition,change:s=>o(r=>({...r,checked:s}))}),generateCode:l=>`import { ToggleButton } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <ToggleButton
      label="Thrusters"
      isChecked={${l.checked}}
      labelPosition="${l.labelPosition}"
      disabled={${l.disabled}}
    />
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"States"}),e.jsxs("div",{className:"ex",children:[e.jsxs("div",{className:"canvas",style:{flexDirection:"column",alignItems:"flex-start",gap:12},children:[e.jsx(t,{id:"t1",label:"Armed",isChecked:!0}),e.jsx(t,{id:"t2",label:"Standby"}),e.jsx(t,{id:"t3",label:"Label on right",isChecked:!0,labelPosition:"label-from-right"})]}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"states.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:"—",description:"Adjacent label."},{name:"isChecked",type:["boolean"],defaultValue:"false",description:"On/off state."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the switch."},{name:"required",type:["boolean"],defaultValue:"false",description:"Required in forms."},{name:"labelPosition",type:['"label-from-left"','"label-from-right"'],defaultValue:'"label-from-left"',description:"Places the label before or after the switch."},{name:"change",type:["(checked: boolean) => void"],defaultValue:"—",description:"Change handler."}]})}export{f as ToggleButtonPage};
//# sourceMappingURL=ToggleButtonPage-Cj2cH9vU.js.map
