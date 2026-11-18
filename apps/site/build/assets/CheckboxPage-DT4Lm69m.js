import{j as e,P as c,C as n}from"./index-D-GpQFda.js";import{C as s}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const o=n.find(d=>d.id==="checkbox");function m({sidebarOpen:d,onCloseSidebar:t}){return e.jsx(s,{meta:o,sidebarOpen:d,onCloseSidebar:t,importName:"Checkbox",controls:["color","checked","disabled","required","iconType"],initialState:{checked:!0},preview:(a,i)=>e.jsx(c,{id:"demo-check",label:"Systems nominal",checked:a.checked,disabled:a.disabled,required:a.required,iconType:a.iconType,change:l=>i(r=>({...r,checked:l.checked}))}),generateCode:a=>`import { Checkbox } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Checkbox
      label="Systems nominal"
      checked={${a.checked}}
      disabled={${a.disabled}}
      required={${a.required}}
      iconType="${a.iconType}"
    />
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"States"}),e.jsxs("div",{className:"ex",children:[e.jsxs("div",{className:"canvas",style:{flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(c,{id:"c1",label:"Propellant loaded",checked:!0,change:()=>{}}),e.jsx(c,{id:"c2",label:"Crew boarded",checked:!1,change:()=>{}}),e.jsx(c,{id:"c3",label:"Disabled",disabled:!0,checked:!1,change:()=>{}}),e.jsx(c,{id:"c4",label:"Favorite",iconType:"heart",checked:!0,change:()=>{}}),e.jsx(c,{id:"c5",label:"Starred",iconType:"star",checked:!0,change:()=>{}})]}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"states.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:"—",description:"Label text."},{name:"checked",type:["boolean"],defaultValue:"false",description:"Checked state."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the checkbox."},{name:"required",type:["boolean"],defaultValue:"false",description:"Required in forms."},{name:"iconType",type:['"default"','"heart"','"star"'],defaultValue:'"default"',description:"Glyph shown when checked."},{name:"change",type:["(target: HTMLInputElement) => void"],defaultValue:"—",description:"Change handler."}]})}export{m as CheckboxPage};
//# sourceMappingURL=CheckboxPage-DT4Lm69m.js.map
