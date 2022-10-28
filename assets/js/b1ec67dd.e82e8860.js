"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[15],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7,description:"Learn how to configure push notifications in your Flutter news application."},r="Push Notifications",l={unversionedId:"flutter_development/push_notifications",id:"flutter_development/push_notifications",title:"Push Notifications",description:"Learn how to configure push notifications in your Flutter news application.",source:"@site/docs/flutter_development/push_notifications.md",sourceDirName:"flutter_development",slug:"/flutter_development/push_notifications",permalink:"/news_toolkit/flutter_development/push_notifications",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/flutter_development/push_notifications.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Learn how to configure push notifications in your Flutter news application."},sidebar:"tutorialSidebar",previous:{title:"Ads",permalink:"/news_toolkit/flutter_development/ads"},next:{title:"In-App Purchases",permalink:"/news_toolkit/flutter_development/in_app_purchases"}},s={},p=[{value:"Firebase Cloud Messaging (FCM)",id:"firebase-cloud-messaging-fcm",level:2},{value:"Triggering a Notification \ud83d\udcec",id:"triggering-a-notification-",level:3},{value:"OneSignal",id:"onesignal",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"push-notifications"},"Push Notifications"),(0,o.kt)("h2",{id:"firebase-cloud-messaging-fcm"},"Firebase Cloud Messaging (FCM)"),(0,o.kt)("p",null,"This template comes with ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/cloud-messaging"},"Firebase Cloud Messaging")," pre-configured. ",(0,o.kt)("a",{parentName:"p",href:"/project_configuration/notifications#onesignal"},"Instructions are provided below for using OneSignal")," in lieu of Firebase Cloud Messaging."),(0,o.kt)("p",null,"Out of the box, the application subscribes to supported topics corresponding to supported news categories such as ",(0,o.kt)("inlineCode",{parentName:"p"},"health"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"science"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"sports"),", etc."),(0,o.kt)("h3",{id:"triggering-a-notification-"},"Triggering a Notification \ud83d\udcec"),(0,o.kt)("p",null,"A notification can be triggered via the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/reference/fcm/rest"},"Firebase Cloud Messaging REST API"),"."),(0,o.kt)("p",null,"All you need is an access token which can be generated via the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/oauthplayground/"},"Google OAuth 2.0 Playground"),"."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://www.googleapis.com/auth/firebase.messaging"),' scope under Firebase Cloud Messaging API v1 and click "Authorize APIs".'),(0,o.kt)("p",null,'Then, sign in with the Google Account that has access to the respective Firebase project and click "Exchange authorization code for tokens".'),(0,o.kt)("p",null,"Now you can send a message to a topic by using the following cURL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Authorization: Bearer <ACCESS_TOKEN>" -H "Content-Type: application/json" -d \'{\n  "message": {\n    "topic" : "<TOPIC-NAME>",\n    "notification": {\n      "body": "This is a Firebase Cloud Messaging Topic Test Message!",\n      "title": "Test Notification"\n    }\n  }\n}\' https://fcm.googleapis.com/v1/projects/<PROJECT-ID>/messages:send HTTP/1.1\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<ACCESS_TOKEN>")," with the access token generated from the Google OAuth 2.0 Playground, ",(0,o.kt)("inlineCode",{parentName:"p"},"<TOPIC-NAME>")," with the desired topic name, and ",(0,o.kt)("inlineCode",{parentName:"p"},"<PROJECT-ID>")," with the corresponding Firebase project ID."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Ensure you are running the application on a physical device in order to receive FCM messages.")),(0,o.kt)("h2",{id:"onesignal"},"OneSignal"),(0,o.kt)("p",null,"Follow OneSignal's guide for ",(0,o.kt)("a",{parentName:"p",href:"https://documentation.onesignal.com/docs/flutter-sdk-setup"},"setting up the OneSignal Flutter SDK"),". Make sure to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure all requirements for integration listed in the OneSignal documentation are met."),(0,o.kt)("li",{parentName:"ul"},"Add the OneSignal Flutter SDK dependency."),(0,o.kt)("li",{parentName:"ul"},"Add an iOS service extension in Xcode."),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("inlineCode",{parentName:"li"},"push capability")," in Xcode."),(0,o.kt)("li",{parentName:"ul"},"Setup OneSignal for Android in the codebase."),(0,o.kt)("li",{parentName:"ul"},"Initialize OneSignal in the notifications client package."),(0,o.kt)("li",{parentName:"ul"},"Replace FCM references in the codebase with the corresponding OneSignal infrastructure:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"lib/main/bootstap/bootstrap.dart")," replace ",(0,o.kt)("inlineCode",{parentName:"li"},"FirebaseMessaging")," with ",(0,o.kt)("inlineCode",{parentName:"li"},"OneSignal")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"FireBaseMessaging.instance")," with a ",(0,o.kt)("inlineCode",{parentName:"li"},"OneSignal.shared")," instance."),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"main.dart")," file for each of your flavors, assign ",(0,o.kt)("inlineCode",{parentName:"li"},"notificationsClient")," to an instance of ",(0,o.kt)("inlineCode",{parentName:"li"},"OneSignalNotificationsClient")))),(0,o.kt)("li",{parentName:"ul"},"Run the app and send test notifications through OneSignal.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Note: iOS push notifications only work if tested on a physical device"),".")))))}u.isMDXComponent=!0}}]);