import{j as e,a,C as t}from"./index-D-GpQFda.js";import{C as c}from"./ComponentDoc-Br3daDi3.js";import"./DocsShell-D9_1O4On.js";const d=t.find(s=>s.id==="icon"),l=({d:s})=>e.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:s})}),i=[{name:"send",d:"M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"},{name:"shield",d:"M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"},{name:"code",d:"m8 6-6 6 6 6M16 6l6 6-6 6"}];function x({sidebarOpen:s,onCloseSidebar:r}){return e.jsx(c,{meta:d,sidebarOpen:s,onCloseSidebar:r,importName:"Icon",showPlayground:!0,controls:["color"],generateCode:o=>`import { Icon } from '@ui-rocket/rocket'

export default function Demo() {
  return (
    <div style={{ color: '${o.colorHex}', display: 'flex', gap: 16 }}>
      <Icon label="Send">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </Icon>
    </div>
  )
}`,preview:o=>e.jsx("div",{className:"row",style:{gap:16,color:o.colorHex},children:i.map(n=>e.jsx(a,{label:n.name,classes:"ico ico-lg",children:e.jsx(l,{d:n.d})},n.name))}),examples:e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Set"}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"canvas",style:{gap:18,color:"var(--accent-text)"},children:i.map(o=>e.jsx(a,{label:o.name,classes:"ico ico-lg",children:e.jsx(l,{d:o.d})},o.name))}),e.jsx("div",{className:"exbar",children:e.jsx("span",{children:"set.tsx"})})]})]}),props:[{name:"children",type:["ReactNode"],defaultValue:"—",description:"SVG glyph or icon markup."},{name:"label",type:["string"],defaultValue:"—",description:"Accessible name; omit for decorative icons."},{name:"iconClass",type:["string"],defaultValue:'""',description:"Legacy class on the inner <i> when no children."},{name:"classes",type:["string"],defaultValue:'""',description:"Wrapper class name."},{name:"click",type:["() => void"],defaultValue:"—",description:"Optional click handler."}]})}export{x as IconPage};
//# sourceMappingURL=IconPage-BwBRXL4-.js.map
