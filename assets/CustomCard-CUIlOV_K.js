import{j as e,L as n}from"./index-DSmySHd4.js";import{I as d}from"./index-COZ-6Yzi.js";const m=({articles:a,articleId:o})=>{const r=a.find(s=>s.id===o);if(!r)return e.jsx("div",{className:"flex justify-center items-center p-4 mx-auto max-w-7xl h-full",children:e.jsx("div",{className:"inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-Orange border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:e.jsx("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})});const i=(s,l)=>{const t=s.split(" ");return t.length>l?t.slice(0,l).join(" ")+"...":s};return e.jsxs("div",{className:"bg-black bg-opacity-40 text-white border border-orange-600 rounded-lg overflow-hidden shadow-lg flex flex-col h-full",children:[r.imageUrl&&e.jsx("img",{src:r.imageUrl,alt:r.title,className:"h-48 w-full object-cover"}),e.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[e.jsx("h2",{className:"text-xl font-bold mb-2",children:r.title}),e.jsxs("p",{className:"text-sm text-gray-400 mb-2",children:[e.jsx("strong",{children:"Published on:"})," ",r.date]}),e.jsx("div",{className:"text-gray-300 mb-4 flex-grow",children:e.jsx(d,{content:i(r.excerpt,20)})}),e.jsx("div",{className:"mt-auto",children:e.jsx(n,{to:`/articles/${r.id}`,className:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",children:"Read More"})})]})]})};export{m as C};