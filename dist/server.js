!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=require("express-msteams-host")},function(e,t){e.exports=require("debug")},function(e,t){e.exports=require("botbuilder")},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=n(5),r=n(6),s=n(7),i=n(8),a=n(0),c=n(1)("msteams");c("Initializing Microsoft Teams Express hosted App..."),n(9).config();const u=n(10),f=o(),l=process.env.port||process.env.PORT||3007;f.use(o.json({verify:(e,t,n,o)=>{e.rawBody=n.toString()}})),f.use(o.urlencoded({extended:!0})),f.set("views",s.join(__dirname,"/")),f.use(i("tiny")),f.use("/scripts",o.static(s.join(__dirname,"web/scripts"))),f.use("/assets",o.static(s.join(__dirname,"web/assets"))),f.use(a.MsTeamsApiRouter(u)),f.use(a.MsTeamsPageRouter({root:s.join(__dirname,"web/"),components:u})),f.use("/",o.static(s.join(__dirname,"web/"),{index:"index.html"})),f.set("port",l),r.createServer(f).listen(l,()=>{c(`Server running on ${l}`)})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("dotenv")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.nonce={},function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(11))},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(i,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=n(0),i=n(1),a=n(12),c=n(2),u=n(13),f=n(14);i("msteams");let l=class{constructor(e){this.activityProc=new f.TeamsActivityProcessor,this._testNodejsMessageExtension=new u.default,this.conversationState=e,this.dialogState=e.createProperty("dialogState"),this.dialogs=new a.DialogSet(this.dialogState)}onTurn(e){return r(this,void 0,void 0,(function*(){yield this.activityProc.processIncomingActivity(e)}))}};o([s.MessageExtensionDeclaration("testNodejsMessageExtension")],l.prototype,"_testNodejsMessageExtension",void 0),l=o([s.BotDeclaration("/api/messages",new c.MemoryStorage,process.env.MICROSOFT_APP_ID,process.env.MICROSOFT_APP_PASSWORD)],l),t.TestNodejsMessageExtensionBot=l},function(e,t){e.exports=require("botbuilder-dialogs")},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,s=arguments.length,i=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i);return s>3&&i&&Object.defineProperty(t,n,i),i},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,s){function i(e){try{c(o.next(e))}catch(e){s(e)}}function a(e){try{c(o.throw(e))}catch(e){s(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(i,a)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const s=n(1),i=n(0),a=n(2);s("msteams");let c=class{onFetchTask(e,t){return r(this,void 0,void 0,(function*(){return Promise.resolve({type:"continue",value:{title:"Input form",url:`https://${process.env.HOSTNAME}/testNodejsMessageExtension/action.html`}})}))}onSubmitAction(e,t){return r(this,void 0,void 0,(function*(){const e=a.CardFactory.adaptiveCard({type:"AdaptiveCard",body:[{type:"TextBlock",size:"Large",text:t.data.email},{type:"Image",url:`https://randomuser.me/api/portraits/thumb/women/${Math.round(100*Math.random())}.jpg`}],$schema:"http://adaptivecards.io/schemas/adaptive-card.json",version:"1.0"});return Promise.resolve({type:"result",attachmentLayout:"list",attachments:[e]})}))}};c=o([i.PreventIframe("/testNodejsMessageExtension/config.html"),i.PreventIframe("/testNodejsMessageExtension/action.html")],c),t.default=c},function(e,t){e.exports=require("botbuilder-teams")}]);
//# sourceMappingURL=server.js.map