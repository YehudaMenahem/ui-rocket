import{j as e,C as p,r as i,G as x,K as f,P as b,E as g,Q as j}from"./index-D-GpQFda.js";import{C as y}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const C=p.find(a=>a.id==="form");function n({disabled:a,idPrefix:s="f"}){const[t,d]=i.useState(""),[l,c]=i.useState(!1),[m,r]=i.useState(!1),[u,o]=i.useState(!1);return e.jsxs("div",{style:{width:"100%",maxWidth:320},children:[e.jsxs(x,{title:"Pad clearance",classes:"form",submit:()=>{if(!t.trim()||!l){r(!0);return}r(!1),o(!0)},children:[e.jsx(f,{label:"Callsign",id:`${s}-callsign`,name:"callsign",value:t,change:d,required:!0,showError:m&&!t.trim(),error:"Callsign is required",disabled:a}),e.jsx(b,{id:`${s}-go`,name:"ready",label:"Ready",checked:l,change:h=>c(h.checked),disabled:a}),e.jsx(g,{label:"Submit",styleBtn:"solid",disabled:a})]}),e.jsx(j,{show:u,type:"success",position:"top-right",title:"Checklist submitted",runningText:`${t||"Crew"} is cleared for launch.`,closeToaster:()=>o(!1)})]})}function k({sidebarOpen:a,onCloseSidebar:s}){return e.jsx(y,{meta:C,sidebarOpen:a,onCloseSidebar:s,importName:"Form",showPlayground:!0,controls:["color","disabled"],generateCode:t=>`import { Form, InputField, Checkbox, Button } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Form title="Pad clearance" submit={(data) => console.log(data)}>
      <InputField label="Callsign" name="callsign" required disabled={${t.disabled}} />
      <Checkbox id="ready" name="ready" label="Ready" />
      <Button label="Submit" styleBtn="solid" disabled={${t.disabled}} />
    </Form>
  )
}`,preview:t=>e.jsx(n,{disabled:t.disabled,idPrefix:"pg"}),examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Checklist"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(n,{disabled:!1,idPrefix:"ex"})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"form.tsx"})})]})]}),props:[{name:"title",type:["string"],defaultValue:'""',description:"Form heading."},{name:"submit",type:["(data) => void"],defaultValue:"—",description:"Called with field values when valid."},{name:"children",type:["ReactNode"],defaultValue:"—",description:"Form fields and actions."},{name:"novalidate",type:["boolean"],defaultValue:"false",description:"Skip HTML5 validation attributes."}]})}export{k as FormPage};
//# sourceMappingURL=FormPage-vqr65_2X.js.map
