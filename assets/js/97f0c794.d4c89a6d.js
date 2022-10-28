"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[782],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,description:"Learn how to configure your Firebase project."},i="Firebase Setup",p={unversionedId:"project_configuration/firebase",id:"project_configuration/firebase",title:"Firebase Setup",description:"Learn how to configure your Firebase project.",source:"@site/docs/project_configuration/firebase.md",sourceDirName:"project_configuration",slug:"/project_configuration/firebase",permalink:"/news_toolkit/project_configuration/firebase",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/firebase.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to configure your Firebase project."},sidebar:"tutorialSidebar",previous:{title:"GitHub Setup",permalink:"/news_toolkit/project_configuration/github"},next:{title:"Social Authentication Setup",permalink:"/news_toolkit/project_configuration/social_authentication"}},l={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"firebase-setup"},"Firebase Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is recommended to define at least two application environments: development and production. Each environment defines a different configuration of deep links, ads and authentication along with a different entry point to the application (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"main_development.dart"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'When generating the template, choose "development production" as a list of desired application flavors. Choose "dev" as the application suffix for the development flavor.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Firebase, configure two separate Firebase projects for the development and production flavor. You may do this ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/u/0/"},"from the Firebase console")," or using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/firebase/firebase-tools"},"firebase-tools CLI tool")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase projects:create"),' command. In each Firebase project, create an Android and iOS app with appropriate package names. Make sure that development apps include the "dev" suffix. You may also do this using the ',(0,o.kt)("inlineCode",{parentName:"p"},"firebase apps:create")," command.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once configured, go to each Firebase project's settings and export the Google Services file for all apps. In the generated template, replace the content of all generated Google Services using exported configurations.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure the developer team has admin access.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Note the app IDs for your developer team."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that the app IDs can be specified when generating your codebase in mason."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Set-up Firebase authentication for supported sign-in platforms (Apple/Google/Email/Facebook/Twitter/etc.):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'For email login, enable the Email/password sign-in provider in the Firebase Console of your project. In the same section, enable Email link sign-in method. On the dynamic links page, set up a new dynamic link URL prefix (e.g. yourApplicationName.page.link) with a dynamic link URL of "/email_login".'),(0,o.kt)("li",{parentName:"ul"},"For Google login, enable the Google sign-in provider in the Firebase Console of your project. You might need to generate a SHA1 key for use with Android."),(0,o.kt)("li",{parentName:"ul"},"For Apple login, ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/ios/apple#configure-sign-in-with-apple"},"configure sign-in with Apple")," in the Apple's developer portal and ",(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth/ios/apple#enable-apple-as-a-sign-in-provider"},"enable the Apple sign-in provider")," in the Firebase Console of your project."),(0,o.kt)("li",{parentName:"ul"},"For Twitter login, register an app in the Twitter developer portal and enable the Twitter sign-in provider in the Firebase Console of your project."),(0,o.kt)("li",{parentName:"ul"},"For Facebook login, register an app in the Facebook developer portal and enable the Facebook sign-in provider in the Firebase Console of your project.")))))}u.isMDXComponent=!0}}]);