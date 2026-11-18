import{j as e,W as l,C as d}from"./index-D-GpQFda.js";import{C as r}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const s=d.find(t=>t.id==="radio");function p({sidebarOpen:t,onCloseSidebar:o}){return e.jsx(r,{meta:s,sidebarOpen:t,onCloseSidebar:o,importName:"RadioButton",controls:["color","disabled"],initialState:{checked:!0},preview:(a,n)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(l,{id:"d1",name:"demo-orbit",label:"Low orbit",val:"low",isSelected:a.checked,disabled:a.disabled,change:()=>n(i=>({...i,checked:!0}))}),e.jsx(l,{id:"d2",name:"demo-orbit",label:"Lunar",val:"lunar",isSelected:!a.checked,disabled:a.disabled,change:()=>n(i=>({...i,checked:!1}))})]}),generateCode:()=>`import { RadioButton } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <>
      <RadioButton name="orbit" label="Low orbit" val="low" isSelected />
      <RadioButton name="orbit" label="Lunar" val="lunar" />
    </>
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Group"}),e.jsxs("div",{className:"ex",children:[e.jsxs("div",{className:"canvas",style:{flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(l,{id:"g1",name:"g",label:"Pad 39A",isSelected:!0,val:"a",change:()=>{}}),e.jsx(l,{id:"g2",name:"g",label:"Pad 39B",val:"b",change:()=>{}})]}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"group.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:"—",description:"Option label."},{name:"name",type:["string"],defaultValue:"—",description:"Radio group name."},{name:"val",type:["string"],defaultValue:"—",description:"Option value."},{name:"isSelected",type:["boolean"],defaultValue:"false",description:"Selected state."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the option."},{name:"change",type:["(event: ChangeEvent) => void"],defaultValue:"—",description:"Change handler."}]})}export{p as RadioPage};
//# sourceMappingURL=RadioPage-NWLfveiv.js.map
