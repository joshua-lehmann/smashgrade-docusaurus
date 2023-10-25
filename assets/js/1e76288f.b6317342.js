"use strict";(self.webpackChunksmashgrade_docusaurus=self.webpackChunksmashgrade_docusaurus||[]).push([[2597],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),s=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(o.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||c;return t?n.createElement(g,u(u({ref:r},l),{},{components:t})):n.createElement(g,u({ref:r},l))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,u=new Array(c);u[0]=d;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[m]="string"==typeof e?e:a,u[1]=i;for(var s=2;s<c;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6904:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const c={title:"Crosscutting Concepts"},u="Data Fetching",i={unversionedId:"SmashGrade/crosscutting-concepts",id:"SmashGrade/crosscutting-concepts",title:"Crosscutting Concepts",description:"For Data fetching use a REST API provided by the Backend.",source:"@site/docs/SmashGrade/crosscutting-concepts.md",sourceDirName:"SmashGrade",slug:"/SmashGrade/crosscutting-concepts",permalink:"/docs/SmashGrade/crosscutting-concepts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SmashGrade/crosscutting-concepts.md",tags:[],version:"current",frontMatter:{title:"Crosscutting Concepts"},sidebar:"tutorialSidebar",previous:{title:"Building Block View",permalink:"/docs/SmashGrade/building-block-view"},next:{title:"Deployment View",permalink:"/docs/SmashGrade/deployment-view"}},o={},s=[{value:"Frontend Data Fetching",id:"frontend-data-fetching",level:2},{value:"Example",id:"example",level:3}],l={toc:s},m="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-fetching"},"Data Fetching"),(0,a.kt)("p",null,"For Data fetching use a REST API provided by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/SmashGrade/building-block-view"},"Backend"),"."),(0,a.kt)("h2",{id:"frontend-data-fetching"},"Frontend Data Fetching"),(0,a.kt)("p",null,"In the frontend we use a library called ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/latest"},"Tanstack Query")," which simplifies the common data fetching tasks a lot."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function getCurriculums(): Promise<Curriculum[]> {\n    const { data } = await axios.get<CurriculumResponse[]>(`${import.meta.env.VITE_BACKEND_API_URL}/curriculums`); \n    return data.map((curriculum) => ({ value: curriculum.title, label: curriculum.title, year: curriculum.year }));\n}\n\nconst {\n    isLoading: curriculumsLoading,\n    error: curriculumsError,\n    data: curriculumsData,\n} = useQuery({\n    queryKey: ['curriculums'], // (1)\n    queryFn: getCurriculums,\n});\n\nif (yearsLoading || curriculumsLoading) {\n        return <h2>Loading</h2>;\n    }\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Key which is used for caching")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"async function getCurriculums() {\n    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/curriculums`); \n    return data.map((curriculum) => ({ value: curriculum.title, label: curriculum.title, year: curriculum.year }));\n}\n\n    const {\n        isLoading: curriculumsLoading,\n        error: curriculumsError,\n        data: curriculumsData,\n    } = useQuery({\n        queryKey: ['curriculums'], // (1)\n        queryFn: getCurriculums,\n    });\n\n    if (yearsLoading || curriculumsLoading) {\n            return <h2>Loading</h2>;\n        }\n    ```\n    \n    2.  Key which is used for caching\n")))}p.isMDXComponent=!0}}]);