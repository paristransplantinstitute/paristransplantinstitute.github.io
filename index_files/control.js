var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=175)}({175:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(176);window.EmbedController=n.a},176:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=i(177),r=i(178),s=i.n(r),d=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),a=void 0,c=void 0,l=void 0,u=void 0,h=function(t){(window.opener||window.parent).postMessage(JSON.stringify(t),"*")},p={load:function(){return h({t:"u",d:window.name})},apiReady:function(){return h({t:"d",d:window.name})},notify:function(t,e){return h({t:"ce",id:window.name,d:e,e:t.type||t})},replyPublicApiCall:function(t,e,i){return h({t:"pr",id:t,err:e,d:i})}},f=function(t,e){return{id:"c-0",widget_id:t.id,width:t.width,height:t.height,skin_id:t.skins[0].id,content:e?t.content[0].content.map(function(t,e){return t.id=e,t.composition_id="c-0",t._isDemoContent=!0,t}):[],metadata:{client:(window.location.search.match(/client_id=([^\&$]+)/)||[])[1]}}},w=function(){function t(e,i){var o=i.loader,r=i.widget,s=i.user,d=i.composition,a=i.skin,c=i.js,l=i.css,u=i.data,h=i.demo,p=void 0===h||h,f=i.bootstrapped,w=void 0!==f&&f;if(n(this,t),this.el=e,this.loader=o,this.bootstrapped=w,!r&&!u)throw new Error("You must supply either `widget` or `data`");this.widget=r,this.dataURL=u,this.user=s,this.composition=d,this.skin=a,this.loadDemo=p,this.js="https://web.archive.org/web/20200213032403/https://widgetic.com"+c,this.css="https://web.archive.org/web/20200213032403/https://widgetic.com"+l,this.dataLoaded=Widgetic.Aye.defer(),this.dataLoaded.promise.then(this._showBranding.bind(this)),this._init(),this._initEditorApi()}return d(t,[{key:"_init",value:function(){var t=this,e=function(){};this.bootstrapped?(this._loadModels(),this._loadData(),this._loadWidget()):s.a("https://web.archive.org/web/20200213032403/https://files.widgetic.com/file/widgetic-uploads/assets/js/core-js.shim.min.js","https://web.archive.org/web/20200213032403/https://widgetic.com/bundles/blogvioapp/js/editor/core.vendor.js","https://web.archive.org/web/20200213032403/https://widgetic.com/bundles/blogvioapp/js/require.js","https://web.archive.org/web/20200213032403/https://widgetic.com/bundles/blogvioapp/css/embed.css",this.css,e,"https://web.archive.org/web/20200213032403/https://widgetic.com/bundles/blogvioapp/js/spine.js",e,"https://web.archive.org/web/20200213032403/https://widgetic.com/bundles/blogvioapp/js/editor/core.js",this._loadModels.bind(this),this._loadData.bind(this),this.js,function(){return t.dataLoaded.promise.then(t._loadWidget.bind(t)).fail(function(t){return console.error(t)})})}},{key:"_loadModels",value:function(){a=window.require("core/models/widget"),c=window.require("core/models/composition"),l=window.require("core/models/content"),u=window.require("core/models/skin")}},{key:"_loadData",value:function(){var t=this;if(!this.dataURL)return this._hydrateModels();Widgetic.uxhr(this.dataURL,null,{success:function(e){var i=void 0;try{i=JSON.parse(e)}catch(t){return console.error("Could not parse response",e)}t.skin=i.skin,t.composition=i.composition,t.widget=i.widget,t.user=i.user,t._hydrateModels()},error:function(t){return console.error("The widget data could not be loaded",t)}})}},{key:"_hydrateModels",value:function(){this.composition=this.composition||f(this.widget,this.loadDemo),a.refresh(this.widget),c.refresh(this.composition),u.refresh(this.skin||this.widget.skins),this._skin=u.first(),l.refresh(this.composition.content),this.dataLoaded.resolve(),this._initApi()}},{key:"_initApi",value:function(){var t=new o.a;Widgetic.Event.on(window,"message",t.receiver),t.skinSet.listen(this._onSkinSet.bind(this)),t.contentCleared.listen(this._onContentCleared.bind(this)),t.contentAdded.listen(this._onContentAdded.bind(this)),t.publicApiCalled.listen(this._onPublicApiCalled.bind(this)),p.apiReady()}},{key:"_initEditorApi",value:function(){var t=this;window.getPreview=function(){return{widget:function(){return t.widgetController},window:window}},window.getData=function(){return{widget:t.widget,composition:$.extend({},t.composition,{widget_id:t.widget.id,width:(t.composition||t.widget).width,height:(t.composition||t.widget).height,content:t.composition.content,skin_id:t.composition.skin_id}),skin:t.skin||t.widget.skins[0],user:t.user}},window.getCurrentData=function(){return{widget:t.widgetController}};var e=(window.location.search.match(/access_token=([^\&$]+)/)||[])[1];e&&Widgetic.auth.token(e)}},{key:"_loadWidget",value:function(){var t=this,e=Widgetic.parse(window.location.href),i=void 0!==e.queryKey.edit_mode?Widgetic.UI.Composition.EDIT_MODE:Widgetic.UI.Composition.EMBED_MODE,n={mode:i,embedOptions:{resize:e.queryKey.resize,autoscale:e.queryKey.autoscale,adaptive:e.queryKey.adaptive},widget:this.widget,composition:{id:this.composition.id},referrer:document.referrer},o=window.require(this.widget.module);this.widgetController=new o({metadata:n},this._skin,l.all()),this.loader&&this.loader.parentNode.removeChild(this.loader);var r=$('<div class="widget-container" style="width:1px; min-width: 100%; height: 100%">');$(this.el).append(r),r.append(this.widgetController.el),this.widgetController.added(),this.widgetController.getPublicEvents&&this.widgetController.getPublicEvents().forEach(function(e){t.widgetController.on(e,function(t){return p.notify(e,t)})}),p.load()}},{key:"_showBranding",value:function(){(!this.user.premium||window.location.search.indexOf("branding")>=0)&&window.initBranding()}},{key:"_onSkinSet",value:function(t){this._skin=t,this.widgetController&&this.widgetController.setSkin(this._skin)}},{key:"_onContentCleared",value:function(){this.widgetController&&this.widgetController.clearContent()}},{key:"_onContentAdded",value:function(t){this.widgetController&&this.widgetController.addContent(t)}},{key:"_onPublicApiCalled",value:function(t){if(!this.widgetController)throw new Error("The widget is not ready yet.");if(!this.widgetController.getPublicMethods)throw new Error("The widget does not support public api calls.");var e=this.widgetController.getPublicMethods(),i=this.widgetController.widget;if(-1===e.indexOf(t.method)||!(t.method in i))throw new Error("The widget does not support method `"+t.method+"`.");try{var n=i[t.method].apply(i,t.args);p.replyPublicApiCall(t.id,null,n)}catch(e){p.replyPublicApiCall(t.id,{message:e.message,stack:e.stack})}}}]),t}();e.a=w},177:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=i(56),r=i.n(o),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),d=void 0,a=void 0,c=void 0,l=function(){function t(){n(this,t),d=window.require("core/models/skin"),c=window.require("core/models/content"),a=window.require("core/models/composition"),this.eventMap={cx:"clearContent",sc:"setContent",ac:"addContent",cc:"changeContent",rc:"removeContent",ss:"setSkin",cs:"changeSkin",asht:"addSheet",acss:"addCss",pa:"publicApi"},this.receiver=this.receiver.bind(this),this.skin=d.first(),this.composition=a.first(),this.skinSet=new r.a,this.contentCleared=new r.a,this.contentAdded=new r.a,this.publicApiCalled=new r.a}return s(t,[{key:"receiver",value:function(t){var e=void 0;try{e=JSON.parse(t.data)}catch(t){return console.warn(t)}var i=this.eventMap[e.t];if(i&&this[i])try{this[i](e.d)}catch(t){console.error(t)}}},{key:"setSkin",value:function(t){this.skin.unbind(),this.skin=new d(t),this.composition.updateAttribute("skin_id",this.skin.id,{ajax:!1}),this.skinSet.broadcast(this.skin)}},{key:"changeSkin",value:function(t){this.skin.updateAttributes(t,{ajax:!1})}},{key:"clearDemoContent",value:function(){return c.select(function(t){return t._isDemoContent}).forEach(function(t){try{t.destroy()}catch(t){}})}},{key:"clearContent",value:function(){c.destroyAll(),this.composition.updateAttribute("content",[],{ajax:!1}),this.contentCleared.broadcast()}},{key:"getContent",value:function(){return this.composition.getContent()}},{key:"setContent",value:function(t){this.clearContent(),t.map(this.addContent.bind(this))}},{key:"addContent",value:function(t){this.clearDemoContent();try{return c.find(t.id),console.warn("Content with id "+t.id+" already exists, use changeContent if you want to update it!")}catch(t){}null==t.id&&(t.id=Widgetic.GUID()),t.composition_id||(t.composition_id=this.composition.id);var e=new c(t);e.save(),this.contentAdded.broadcast(e)}},{key:"changeContent",value:function(t){var e=void 0;if(null==t.id)return console.error("Content must have an id:",t);try{e=c.find(t.id)}catch(e){return console.warn("Content with id "+t.id+" doesn't exists, use addContent if you want to add it!")}e.updateAttributes(t)}},{key:"removeContent",value:function(t){try{return c.find(t.id).destroy()}catch(e){return console.error("Content "+t.id+" couldn't be removed!",e.stack)}}},{key:"addSheet",value:function(t){var e=document.createElement("link");e.rel="stylesheet",e.href=t,document.head.appendChild(e)}},{key:"addCss",value:function(t){this._customCssNode||(this._customCssNode=document.createElement("style"),document.head.appendChild(this._customCssNode)),this._customCssNode.textContent+=t}},{key:"publicApi",value:function(t){this.publicApiCalled.broadcast(t)}}]),t}();e.a=l},178:function(t,e,i){var n,o;!function(i,r){n=[],void 0!==(o=function(){return i.toast=r()}.apply(e,n))&&(t.exports=o)}(this,function(){function t(){var t=document.getElementsByTagName("head")[0],i=function(e){if(t){if(e.length){for(var r,s,d=-1;r=e[++d];)if("string"==typeof r)n(r);else if("function"==typeof r){s=r;break}o(s,Array.prototype.slice.call(e,d+1))}}else setTimeout(function(){i(e)},50)},n=function(i){var n,o,s=/\.(\w+)$/.exec(i),d=/^\[(\w+)\](.+)/.exec(i);if(null!==d)n=d[1],i=d[2];else{if(null===s)return;n=s[1]}if(!(i in e))switch(e[i]=!1,n){case"js":o=document.createElement("script"),o.src=i,o.async=!1,t.appendChild(o);var a=navigator.appVersion.match(/MSIE (\d)/);null!==a&&parseInt(a[1],10)<9?o.onreadystatechange=function(){/ded|co/.test(this.readyState)&&(e[i]=!0,o.onreadystatechange=null)}:o.onload=function(){e[i]=!0,o.onload=null};break;case"css":o=document.createElement("link"),o.rel="styleSheet",o.href=i,t.appendChild(o),r(o,i);break;default:return void delete e[i]}},o=function(t,n){for(var r in e)if(!e[r])return void setTimeout(function(){o(t,n)},50);"function"==typeof t&&t(),i(n)},r=function(t,i){t.sheet||t.styleSheet?e[i]=!0:setTimeout(function(){r(t,i)},50)};i(arguments)}var e={};return t})},56:function(t,e){function i(){function t(t){for(var e=i.slice(),n=0;n<e.length;n++)e[n].deleted||e[n].fn(t)}function e(t){function e(){for(var e=0;e<i.length;e++)if(i[e].fn===t){i[e].deleted=!0,i.splice(e,1);break}}return i.push(new n(t)),e}var i=[];return{broadcast:t,listen:e}}function n(t){this.fn=t,this.deleted=!1}t.exports=i}});

}
/*
     FILE ARCHIVED ON 03:24:03 Feb 13, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:20:55 Jan 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.894
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.072
  cdx.remote: 0.079
  esindex: 0.013
  LoadShardBlock: 70.37 (3)
  PetaboxLoader3.datanode: 53.439 (4)
  CDXLines.iter: 16.161 (3)
  load_resource: 65.354
  PetaboxLoader3.resolve: 32.705
*/