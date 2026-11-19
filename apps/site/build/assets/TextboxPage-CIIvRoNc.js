import{j as r,J as o,C as l,r as i}from"./index-D-GpQFda.js";import{C as s}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const d=l.find(t=>t.id==="textbox");function n(t){const[a,e]=i.useState("T-00:42:10 — systems nominal");return r.jsx("div",{style:{width:"100%",maxWidth:360},children:r.jsx(o,{id:"demo-tb",label:"Mission log",value:a,change:e,disabled:t.disabled,required:t.required,showError:t.showError,error:"Log entry required",placeholder:t.placeholder,rows:t.rows,note:"Keep it under the character limit",maxlength:135})})}function p({sidebarOpen:t,onCloseSidebar:a}){return r.jsx(s,{meta:d,sidebarOpen:t,onCloseSidebar:a,importName:"Textbox",controls:["color","disabled","required","showError","placeholder","rows"],initialState:{rows:3,placeholder:"Write a note…"},preview:e=>r.jsx(n,{disabled:e.disabled,required:e.required,showError:e.showError,placeholder:e.placeholder,rows:e.rows}),generateCode:e=>`import { Textbox } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <Textbox
      label="Mission log"
      rows={${e.rows}}
      placeholder="${e.placeholder}"
      disabled={${e.disabled}}
      required={${e.required}}
      showError={${e.showError}}
    />
  )
}`,examples:r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:"Basic"}),r.jsxs("div",{className:"ex",children:[r.jsx("div",{className:"canvas",children:r.jsx(o,{id:"tb1",label:"Notes",placeholder:"Write a note…",value:"",change:()=>{},rows:3})}),r.jsx("div",{className:"exbar",children:r.jsx("span",{children:"basic.tsx"})})]})]}),props:[{name:"label",type:["string"],defaultValue:"—",description:"Field label."},{name:"value",type:["string"],defaultValue:"—",description:"Controlled value."},{name:"rows",type:["number"],defaultValue:"1",description:"Visible rows."},{name:"cols",type:["string"],defaultValue:'"100%"',description:"Width style for the textarea."},{name:"maxlength",type:["number"],defaultValue:"135",description:"Character limit."},{name:"placeholder",type:["string"],defaultValue:"—",description:"Placeholder text."},{name:"required",type:["boolean"],defaultValue:"false",description:"Required field."},{name:"disabled",type:["boolean"],defaultValue:"false",description:"Disables the field."},{name:"showError",type:["boolean"],defaultValue:"false",description:"Shows error text."},{name:"error",type:["string"],defaultValue:'"This is a required field"',description:"Error copy."},{name:"note",type:["string"],defaultValue:"—",description:"Helper text when not in error."},{name:"change",type:["(value: string) => void"],defaultValue:"—",description:"Change handler."}]})}export{p as TextboxPage};
//# sourceMappingURL=TextboxPage-CIIvRoNc.js.map
