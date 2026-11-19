import{j as e,K as l,C as o,r as c}from"./index-D-GpQFda.js";import{C as u}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const p=o.find(a=>a.id==="input");function h({disabled:a,required:i,showError:r,placeholder:s,colorHex:t}){const[n,d]=c.useState("Artemis IV");return e.jsx("div",{style:{width:"100%",maxWidth:320,"--accent":t},children:e.jsx(l,{label:"Mission name",id:"demo-input",value:n,change:d,maxlength:40,disabled:a,required:i,showError:r,error:"Mission name is required",placeholder:s,note:"Displayed on the pad board"})})}function b({sidebarOpen:a,onCloseSidebar:i}){return e.jsx(u,{meta:p,sidebarOpen:a,onCloseSidebar:i,importName:"InputField",controls:["color","disabled","required","showError","placeholder"],preview:r=>e.jsx(h,{disabled:r.disabled,required:r.required,showError:r.showError,placeholder:r.placeholder,colorHex:r.colorHex}),generateCode:r=>`import { InputField } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <InputField
      label="Mission name"
      value="Artemis IV"
      placeholder="${r.placeholder}"
      disabled={${r.disabled}}
      required={${r.required}}
      showError={${r.showError}}
    />
  )
}`,examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Basic"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(l,{label:"Callsign",id:"ex1",placeholder:"callsign@nasa.gov",value:"",change:()=>{}})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"basic.tsx"})})]}),e.jsx("h3",{children:"Required"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",children:e.jsx(l,{label:"Pad",id:"ex2",required:!0,showError:!0,error:"Required",value:"",change:()=>{}})}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"required.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:'""',description:"Visible label above the field."},{name:"value",type:["string"],defaultValue:"—",description:"Controlled value."},{name:"maxlength",type:["number"],defaultValue:"30",description:"Character limit."},{name:"required",type:["boolean"],defaultValue:"false",description:"Marks the field required."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the input."},{name:"placeholder",type:["string"],defaultValue:"—",description:"Placeholder text."},{name:"showError",type:["boolean"],defaultValue:"false",description:"Shows the error message."},{name:"error",type:["string"],defaultValue:'"This field is required"',description:"Error copy."},{name:"note",type:["string"],defaultValue:"—",description:"Helper text when not in error."},{name:"change",type:["(value: string) => void"],defaultValue:"—",description:"Change handler."}]})}export{b as InputFieldPage};
//# sourceMappingURL=InputFieldPage-CkQDtPBh.js.map
