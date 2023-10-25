"use strict";(self.webpackChunksmashgrade_docusaurus=self.webpackChunksmashgrade_docusaurus||[]).push([[9632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Deployment View"},l="Frontend",i={unversionedId:"SmashGrade/deployment-view",id:"SmashGrade/deployment-view",title:"Deployment View",description:"The Frontend React App is automatically deployed using GitHub Action Workflows.",source:"@site/docs/SmashGrade/deployment-view.md",sourceDirName:"SmashGrade",slug:"/SmashGrade/deployment-view",permalink:"/docs/SmashGrade/deployment-view",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SmashGrade/deployment-view.md",tags:[],version:"current",frontMatter:{title:"Deployment View"},sidebar:"tutorialSidebar",previous:{title:"Crosscutting Concepts",permalink:"/docs/SmashGrade/crosscutting-concepts"},next:{title:"Examples",permalink:"/docs/SmashGrade/examples"}},u={},s=[{value:"Workflow Flow Chart",id:"workflow-flow-chart",level:2},{value:"Example workflow run in GitHub",id:"example-workflow-run-in-github",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend"},"Frontend"),(0,o.kt)("p",null,"The Frontend React App is automatically deployed using GitHub Action Workflows."),(0,o.kt)("h2",{id:"workflow-flow-chart"},"Workflow Flow Chart"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mermaid"},"flowchart TD\n  Push[Push to Pull Request] --\x3e CheckPullRequestStatus{Pull Requst Status == };\n  CheckPullRequestStatus --\x3e|opened| CreateComment;\n  CheckPullRequestStatus --\x3e|synchronized| UpdateCommentRunning;\n  CheckPullRequestStatus --\x3e|closed| DeleteAzureSLot;\n\n  UpdateCommentRunning[Update PR Comment: 'Deployment Running'] --\x3e RunBuild\n  CreateComment[Create PR Comment: 'Creating Deployment'] --\x3e CreateAzureSlot\n  RunBuild[Run react build] --\x3e DownloadBuildArtifact\n  CreateAzureSlot[Create Azure Deployment Slot] --\x3e RunBuild;\n  DeleteAzureSLot[Delete Azure Deployment Slot] --\x3e UpdateCommentDeleted;\n  DownloadBuildArtifact[Download build artifact form build job] --\x3e DeployToAzureAppService\n  DeployToAzureAppService[Deploy build artifact to Azure App Service] --\x3e UpdateCommentDone\n  UpdateCommentDone[Update PR Comment: 'Deployment Finished'] --\x3e Finish;\n  UpdateCommentDeleted[Update PR Comment: 'Deployment Deleted'] --\x3e Finish;\n  Finish[Finish]\n\n")),(0,o.kt)("h2",{id:"example-workflow-run-in-github"},"Example workflow run in GitHub"),(0,o.kt)("p",null,"Opened Workflow:\n",(0,o.kt)("img",{alt:"GitHhub Opened Workflow",src:n(6656).Z,width:"1000",height:"488"}),"\nClosed Workflow:\n",(0,o.kt)("img",{alt:"GitHub Closed Workflow",src:n(8889).Z,width:"984",height:"531"})))}d.isMDXComponent=!0},6656:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-1-dd8fdd77d783086bd00320053ba0944c.png"},8889:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-fb5bf5d795cdba14cf5f47ea0e32493f.png"}}]);