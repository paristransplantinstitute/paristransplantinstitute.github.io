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

!function(e,t){e.leadFormWidget=e.leadFormWidget?e.leadFormWidget:[];var o={assetUrl:"",dataUrl:"",leadformUrl:"/leadForm",closeOnClickOverlay:!0,name:"leadform",init:function(e){this.options=e,this.forms=[],this.preview=e.preview;var t=e.asset_domain||e.hostname,o=e.data_domain||t,i="https";this.dataUrl=i+"://"+o,this.assetUrl=t?"//"+t:"",this.leadformUrl=this.dataUrl+this.leadformUrl,this.isTouchDevice()&&(this.closeOnClickOverlay=!1),this.options.form_ids.length&&this.appendContainerStyle()},isMobile:function(){var e=navigator.userAgent.match(/Android/i),t=navigator.userAgent.match(/BlackBerry/i),o=navigator.userAgent.match(/iPhone|iPad|iPod/i),i=navigator.userAgent.match(/Opera Mini/i),r=navigator.userAgent.match(/IEMobile/i);return e||t||o||i||r},isTouchDevice:function(){return"ontouchstart"in window||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0},appendContainerStyle:function(){var e=this;t.getElementsByTagName("head")[0].appendChild(e.createStyle("lead-form-container")),e.options.form_ids.forEach(function(t){""!==t&&e.appendForm(t)})},hasSeenFormRecently:function(e,t){var o=this.getCookieName(e,"viewed"),i=this.readCookie(o);if(i&&t){var r=Math.round((new Date).getTime()/1e3)-parseInt(i);return r<t}return 0===t&&!!i},setViewedCookie:function(e){var t=this.getCookieName(e,"viewed"),o=this.getCurrentForm(e),i=o.formData.control&&0===o.formData.control.displayLimit;this.createCookie(t,Math.round((new Date).getTime()/1e3),null,i)},hasClosedForm:function(e){var t=this.getCookieName(e,"closed");return!!this.readCookie(t)},setClosedCookie:function(e){var t=this.getCookieName(e,"closed");this.createCookie(t,"1")},hasSubmittedForm:function(e){var t=this.getCookieName(e,"submitted");return!!this.readCookie(t)},setSubmittedCookie:function(e){var t=this.getCookieName(e,"submitted");this.createCookie(t,"1")},hasViewedExitIntent:function(e){var t=this.getCookieName(e,"viewed_exit");return!!this.readCookie(t)},setViewedExitCookie:function(e){var t=this.getCookieName(e,"viewed_exit");this.createCookie(t,"1")},getCookieName:function(e,t){return this.name+"_"+e+"_"+t},shouldDisplayForm:function(e){var t=this,o=new Date,i=t.getCurrentForm(e);if(window.location.href.indexOf("checkout.weebly.com")!==-1||window.location.href.indexOf("store/checkout")!==-1)return!1;if(window!=window.parent)try{if(window.location.hostname===window.parent.location.hostname)return!1}catch(r){}var n=i.control.duration,a=i.control.deviceTypes,s=i.control.displayLimit,l=i.control.stoppingConditions&&(!!i.control.stoppingConditions.untilClosed||!!i.control.stoppingConditions.untilClose),d=i.control.stoppingConditions&&!!i.control.stoppingConditions.untilActionBtnClicked,c=!n.enabled||n.enabled&&n.start&&!n.end&&o.getTime()>=new Date(n.start).getTime()||n.enabled&&n.start&&n.end&&o.getTime()>=new Date(n.start).getTime()&&o.getTime()<=new Date(n.end).getTime(),m="all"==a||"desktop-only"==a&&!t.isMobile()||"mobile-only"==a&&t.isMobile(),g=!t.hasSeenFormRecently(e,s),p=!(t.hasSubmittedForm(e)&&d||t.hasClosedForm(e)&&l);return c&&m&&p&&g},shouldDisplayExitIntent:function(e,t){return t&&this.hasViewedExitIntent(e)},appendForm:function(e){var t=this;t.jsonRequest(t.leadformUrl+"/"+e,function(o,i){if(o){var r=JSON.parse(i.response),n=r.type,a=r.subtype;r.deactivated&&!t.preview||(t.forms[e]={name:t.name,type:n,subtype:a,isModal:"popup"==n||"anchored"==n&&"tab"!=a&&"sidebar"!=a,isAnchor:"anchored"==n,control:r.control,formData:r},r.display.textDisplay.anchor&&r.display.textDisplay.anchor.font&&t.embedGoogleFonts(r.display.textDisplay.anchor.font),(t.preview||t.shouldDisplayForm.bind(t)(e)||t.shouldDisplayExitIntent(r.control.exitIntent))&&t.prepElements(t.forms[e].formData,e))}})},getCurrentForm:function(e){var t="";return this.forms&&(t=this.forms[e]),t},createStyle:function(e){var o=t.createElement("link");return o.rel="stylesheet",o.type="text/css",o.href=this.assetUrl+"/css/"+e+".css",o.media="all",o},embedGoogleFonts:function(e){var o=e.split(",")[0],i=t.createElement("link");i.rel="stylesheet",i.type="text/css",i.href="https://web.archive.org/web/20221028130519/https://fonts.googleapis.com/css?family="+o,t.getElementsByTagName("head")[0].appendChild(i)},createElements:function(e,t){var o=this,i={},r=e.type,n=o.getCurrentForm(t),a=n.isAnchor&&n.isModal;i.popupOverlay=o.createEl("div",{id:o.generateSelectorId(r,"popupOverlay",t),"class":o.generateSelectorClasses(e,"popupOverlay",t),styles:o.getCustomStyles("smart-bar"==r,"containerBackground",e)}),i.iframeContainer=o.createEl("div",{"class":o.generateSelectorClasses(e,"iframeContainer",t),styles:o.getCustomStyles("popup"==r,"containerBackground",e)});var s={};e.form_height&&(s={height:e.form_height+"px"}),i.iframe=o.createEl("iframe",o.extendObjs({src:o.leadformUrl+"?form_id="+t+(o.preview?"&preview="+o.preview:""),id:o.generateSelectorId(r,"iframe",t),frameborder:0,scrolling:"no"},s)),i.popup=o.createEl("div",{"class":o.generateSelectorClasses(e,"popup",t)});var l={};if(e.display.colors.close_icon&&(l.color=e.display.colors.close_icon),i.close=o.createEl("div",{id:o.generateSelectorId(r,"close",t),"class":o.generateSelectorClasses(e,"close",t),styles:l}),i.close.innerHTML="&times;",a){var d="";"undefined"!=e.anchor.text&&(d=e.anchor.text);var c=o.createEl("span",{"class":"trigger-text",text:d});i.trigger=o.createEl("div",{id:o.generateSelectorId(r,"trigger",t),"class":o.generateSelectorClasses(e,"trigger",t),styles:o.extendObjs(o.getCustomStyles("undefined"!=e.display.colors.anchor,"anchorBackground",e),o.getCustomStyles("undefined"!=e.display.textDisplay.anchor,"anchorColor",e))}),i.trigger.appendChild(c),i.trigger.classList.add("is-popup")}return i},generateSelectorId:function(e,t,o){var i=this.getCurrentForm(o),r=i?i.name:this.name,n="";return"popupOverlay"==t?n=r+"-"+e+"-widget-"+o:"iframe"==t?n="iframe-"+o:"close"==t?n=r+"-"+e+"-close-"+o:"trigger"==t&&(n=r+"-"+e+"-trigger-"+o),n},generateSelectorClasses:function(e,t,o){var i=this,r=i.getCurrentForm(o),n=r?r.name:i.name,a=e.type,s=e.goalType,l=e.subtype,d=r.isModal,c=r.isAnchor,m=[];switch(t){case"popupOverlay":m.push(n+"-"+a+"-widget"),m.push(n+"-"+a+"-widget--"+l),m.push("popup-type-"+s),d&&m.push(n+"-"+a+"-widget--modal"),d&&c&&(m.push(n+"-popup-widget"),m.push(n+"-popup-widget--"+l),m.push(n+"-popup-widget--modal")),(d||c)&&i.preview&&m.push("is-preview"),e.anchor&&e.anchor.align&&m.push("align-"+e.anchor.align);break;case"iframeContainer":m.push(n+"-"+a+"-container"),m.push(n+"-"+a+"-container--"+l),d&&c&&m.push(n+"-popup-container "+n+"-popup-container--"+l);break;case"popup":m.push(n+"-"+a+"-widget-overlay"),d&&c&&m.push(n+"-popup-widget-overlay");break;case"close":m.push(n+"-"+a+"-close"),m.push(n+"-"+a+"-close--"+l),d&&c&&m.push(n+"-popup-close");break;case"trigger":m.push(n+"-"+a+"-trigger"),m.push(n+"-"+a+"-trigger--"+l),e.anchor.align&&m.push("align-"+e.anchor.align),e.anchor.style&&m.push("style-"+e.anchor.style)}return m.join(" ")},getCustomStyles:function(e,t,o){var i=this,r="smart-bar"==o.type?"#000":"#fff",n={};if(e)switch(t){case"containerBackground":var a="undefined"!=typeof o.display.colors.background&&""!=o.display.colors.background?o.display.colors.background:r;a.indexOf("NaN")>-1&&(a=a.replace("NaN","1")),n.backgroundColor=a;break;case"anchorBackground":n["background-color"]=o.display.colors.anchor;break;case"anchorColor":var s=o.display.textDisplay.anchor;for(var l in s)if(s[l]){var d=i.camelCaseToDashed(l);"size"==d?d="font-size":"font"==d&&(d="font-family"),n[d]=s[l]}}return n},createEl:function(e,o){var i=t.createElement(e);if(o)for(var r in o)if("styles"==r){if(o[r])for(var n in o[r])o[r][n]&&(i.style[n]=o[r][n])}else"text"==r?i.innerHTML=o[r]?o[r]:"":o[r]&&i.setAttribute(r,o[r]);return i},extendObjs:function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e},prepElements:function(e,o){var i=this,r=i.getCurrentForm(o),n=i.getScrollingContainer(),a=Math.max(t.body.scrollHeight,t.body.offsetHeight,t.documentElement.clientHeight,t.documentElement.scrollHeight,t.documentElement.offsetHeight);"scrollHeight"in n&&(a=Math.max(a,n.scrollHeight));var s=document.documentElement.clientHeight;Math.max(0,a-s);r.elements=i.createElements(e,o);var l=r.elements,d=r.isAnchor&&r.isModal;l.iframe.onload=function(){i.iframeRelay(o,e),i.iframeListener(),!i.preview&&e.control.exitIntent&&window.addEventListener("mousemove",i.onMouseMove.bind(i,o))},l.iframeContainer.appendChild(l.iframe),e.display.optionalContent.closeIcon!==!1&&l.iframeContainer.appendChild(l.close),l.popup.appendChild(l.iframeContainer),l.popupOverlay.appendChild(l.popup),"smart-bar"===e.type?t.body.insertBefore(l.popupOverlay,t.body.childNodes[0]):t.body.appendChild(l.popupOverlay),d&&t.body.appendChild(l.trigger),i.preview||i.buttonClose(o),d&&i.buttonAnchor(o),"smart-bar"===e.type&&window.addEventListener("scroll",this.onScroll)},onScroll:function(e){const t=e.target.scrollingElement,o=document.querySelectorAll(".leadform-smart-bar-widget"),i=Array.prototype.slice.call(o);t.scrollTop>100?i.forEach(function(e){e.classList.add("smart-bar-fixed-position")}):i.forEach(function(e){e.classList.remove("smart-bar-fixed-position")})},onMouseMove:function(e,t){function o(e,t,o){return o>=e&&o<=t}var i=this,r=i.getCurrentForm(e),n=window.innerWidth,a=window.innerHeight;clearTimeout(r.checkExitTimer);var s=10;(o(0,s,t.clientX)||o(0,s,t.clientY)||o(n-s,n,t.clientX)||o(a-s,a,t.clientY))&&(r.checkExitTimer=setTimeout(function(){!r.opened&&r.ready&&(r.exitSignal=!0,i.setViewedExitCookie(e),i.open(e,r.formData,!0))},100))},prependTo:function(e,t){var o=t.children?t.children[0]:"";o?t.insertBefore(e,o):t.appendChild(e)},docReady:function(e,t){var o=this,i=e.form_id,r=e.metadata.control,n=r.timing.delay,a=r.timing.delay,s=r.exitIntent,l=o.getCurrentForm(i);if(l){l.ready=!0;var d=e.metadata.control.timing.type,c=!1,m=!1;if("object"==typeof d?(c=d.timer,m=d.scroll):"timer"===d?c=!0:"scroll"===d&&(m=!0),t||"anchored"==e.metadata.type&&!c&&!m&&!s)return o.open(i,e.metadata,!1,t||!o.shouldDisplayForm(i)),void(l.toggled=!!t||o.shouldDisplayForm(i));"object"==typeof r.timing.delay&&(n=r.timing.delay.timer,a=r.timing.delay.scroll),c&&o.showOnTimer(i,n,e.metadata,m,a),m&&o.showOnScroll(i,a,e.metadata,c,n)}},iframeRelay:function(e,o,i){var r=this,n=t.getElementById("iframe-"+e).contentWindow,a=o.subtype?r.name+" "+r.name+"--"+o.type+" "+r.name+"--"+o.subtype:"";i=i?i:{},n.postMessage(r.extendObjs({bodyClass:a,parentHostname:window.location.origin},i),r.dataUrl)},iframeListener:function(){var t=this,o=window.addEventListener?"addEventListener":"attachEvent",i=e[o],r="attachEvent"==o?"onmessage":"message";i(r,function(e){var o=e.data;switch(o.action){case"docReady":t.docReady(o.modelData,o.preview);break;case"destroy":t.destroy(o.modelData.form_id,o.modelData);break;case"toggleForm":t.toggleForm(o.modelData,o.toggle,o.height,o.width);break;case"toggleError":t.toggleError(o.modelData);break;case"toggleSuccess":t.toggleSuccess(o.modelData);break;case"toggleFocused":t.toggleFocused(o.modelData,o.className,o.show);break;case"updateWidgetHeight":t.updateWidgetHeight(o.modelData)}},!1)},showOnTimer:function(e,t,o,i,r){var n=this,a=n.getCurrentForm(e),t=1e3*t;n.shouldDisplayForm(e)&&setTimeout(function(){a.opened||(i?n.showOnScroll(e,r,o):n.open(e,o))},t)},showOnScroll:function(e,o,i,r,n){var a=this,s=a.getCurrentForm(e),l=this.getScrollingContainer(),o=Math.round(t.body.scrollHeight*(o/100));a.shouldDisplayForm(e)&&a.addEventHandler([l],"scroll",function(){var t="scrollTop"in l?l.scrollTop:l.scrollY;t>=o&&!s.opened&&(r?a.showOnTimer(e,n,i):a.open(e,i))})},getScrollingContainer:function(){var e=["content","panel-two"],t=window;return e.forEach(function(e){var o=document.getElementById(e);if(!o)return!1;var i=window.getComputedStyle(o);"auto"===i.overflowY&&(t=o)}),t},open:function(o,i,r,n){var a=this,s=a.getCurrentForm(o),l=i.goalType,d=s.elements||{};e.leadFormWidget[o]=a,r||"tab"!=i.subtype||t.getElementById("iframe-"+o).setAttribute("height",i.form_height+"px"),d.iframeContainer&&"smart-bar"===i.type&&i.form_height&&(d.iframeContainer.style.height=i.form_height+"px"),"anchored"==i.type&&(t.getElementById("iframe-"+o).style.display="block"),a.preview&&s.isAnchor&&!s.isModal||(s.opened=!r&&!s.isAnchor,r&&(a.iframeRelay(o,i,{exit:!0}),a.toggleWidgetClasses(o,"is-open",!1,!0),"tab"==i.subtype?a.toggleHeight(o,i,parseInt(t.getElementById("iframe-"+o).getAttribute("height"))):"sidebar"==i.subtype&&a.toggleWidth(o,i,300),s.opened=!0),n&&!a.preview||(s.toggled=a.preview||r,a.toggleWidgetClasses(o,"fade-in",!1,!0),"age_verification"!==l&&a.setViewedCookie(o)),a.toggleWidgetClasses(o,"is-popup",!1,!0),s.isModal&&!n&&(s.opened=!0,t.body.classList.add("has-popup")))},togglePopup:function(e,o){var i=this,r=i.getCurrentForm(e);r.toggled=o,o?(i.removeClass(e,"fade-out"),i.toggleWidgetClasses(e,"is-open",!1,!0),i.toggleWidgetClasses(e,"fade-in",!1,!0),t.body.classList.add("has-popup")):(i.removeClass(e,"is-open"),i.toggleWidgetClasses(e,"fade-out",!1,!0),t.body.classList.remove("has-popup"))},buttonClose:function(e){var o=this,i=o.getCurrentForm(e),r=i.type,n=[],a=t.getElementById(o.name+"-"+r+"-close-"+e);a&&n.push(a),o.closeOnClickOverlay&&i.isModal&&n.push(t.getElementById(o.name+"-"+r+"-widget-"+e)),n.length&&(o.addEventHandler(n,"click",function(){i&&i.formData&&"age_verification"===i.formData.goalType||o.destroy(e)}),o.addEventHandler(n,"touchend",function(){o.destroy(e)}))},buttonAnchor:function(e){var o=this,i=o.getCurrentForm(e),r=i.type,n=t.getElementById(o.name+"-"+r+"-trigger-"+e);if(n){t.getElementById("iframe-"+e).style.display="block";var a=[n];o.addEventHandler(a,"click",function(){i.opened=!0,o.togglePopup(e,!i.toggled)})}},toggleForm:function(e,t,o,i){var r=e.form_id,n=this.getCurrentForm(r);return this.toggleWidgetClasses(r,"is-open",e.metadata,t),n.opened=!0,i>0?void this.toggleWidth(r,e.metadata,i):void(o>0&&this.toggleHeight(r,e.metadata,o))},toggleHeight:function(e,o,i){var r=this.getCurrentForm(e),n=r.name,a=o.type,s=t.getElementById(n+"-"+a+"-widget-"+e);s&&(s.style.height=i+"px")},toggleWidth:function(e,o,i){var r=this.getCurrentForm(e),n=r.name,a=o.type,s=t.getElementById(n+"-"+a+"-widget-"+e);s&&(s.style.width=i+"px","sidebar"==o.subtype&&(50==i?setTimeout(function(){s.style.height="70px"},500):s.style.height="100%"))},toggleError:function(e){this.toggleWidgetClasses(e.form_id,"is-error",e.metadata,!0)},toggleSuccess:function(t){var o=this,i=t.metadata.confirmation;"link"!=i.type||""==i.value||i.newTab?(this.removeClass(t.form_id,"is-error",t.metadata),this.toggleWidgetClasses(t.form_id,"is-success",t.metadata,!0)):e.location.href=i.value,t.metadata&&"age_verification"===t.metadata.goalType&&o.removeWebsite(t.form_id),this.setSubmittedCookie(t.form_id)},toggleFocused:function(e,o,i){var r=this,n=e.form_id,a=r.getCurrentForm(n),s=a.isModal,l=a.isAnchor,d=a?a.name:r.name,c=a?a.type:e.type,m=t.getElementById(d+"-"+c+"-widget-"+n);if(!s&&"welcome-mat"!==c)return l&&(document.body.scrollTop=window.innerHeight),void("smart-bar"===c&&(document.body.scrollTop=0));if(r.toggleWidgetClasses(n,o,!1,i),i){var g=0===window.orientation||180===window.orientation?screen.height:screen.width,p=400;if("welcome-mat"===c)document.body.scrollTop=Math.round(g/2-p/2),m.style.height=g+"px";else{var u=Math.round((g-p)/2);document.body.scrollTop=u,m.getElementsByClassName(d+"-"+c+"-container")[0].style.marginTop=u+"px"}}else m.style.height="",m.getElementsByClassName(d+"-"+c+"-container")[0].style.marginTop=""},toggleWidgetClasses:function(e,o,i,r){var n=this,a=n.getCurrentForm(e),s=a?a.name:n.name,l=a?a.type:i.type,d=t.getElementById(s+"-"+l+"-widget-"+e);if(d){var c=d.className,m="";m=r?c.trim()+" "+o:c.trim().replace(o,"");var g=n.removeDuplicates(m.split(" "));d.className=g.join(" "),"fade-out"==o&&setTimeout(function(){n.removeClass(e,"fade-in")},500)}},updateWidgetHeight:function(e){var t=this,o=e.form_id;if(o){var i=t.getCurrentForm(o),r=i.elements||{},n=e.metadata||{};r.iframeContainer&&"smart-bar"===n.type&&n.form_height&&(r.iframeContainer.style.height=n.form_height+"px")}},removeClass:function(e,o,i){var r=this,n=r.getCurrentForm(e),a=n?n.name:r.name,s=n?n.type:i.type,l=t.getElementById(a+"-"+s+"-widget-"+e);if(l){var d=l.className,c=d.indexOf(o)>-1?d.trim().replace(o,""):d;l.className=c}},destroy:function(e,o){var i=this,r=i.getCurrentForm(e),n=r?r.type:o.type,a=!!r&&r.isAnchor,s=t.getElementById("leadform-"+n+"-widget-"+e);i.toggleWidgetClasses(e,"fade-out",!1,!0),t.body.classList.remove("has-popup"),a?(r.toggled=!1,i.shouldDisplayForm(e)&&i.setClosedCookie(e)):setTimeout(function(){s&&s.remove?s.remove():s&&s.parentNode&&s.parentNode.removeChild(s),i.setClosedCookie(e)},1500)},addEventHandler:function(e,t,o){e.length&&e.forEach(function(e){e.attachEvent?e.attachEvent("on"+t,o):e.addEventListener(t,o,!1)})},removeDuplicates:function(e){var t,o={},i=e.length,r=[];for(t=0;t<i;t+=1)o[e[t]]=e[t];for(t in o)r.push(o[t]);return r},camelCaseToDashed:function(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()},jsonRequest:function(e,t){var o=new XMLHttpRequest;o.open("GET",e,!0),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.onload=function(){t(this.status>=200&&this.status<400,this)},o.send()},createCookie:function(e,o,i,r){var n,a=new Date;i||(i=3600),a.setTime(a.getTime()+24*i*60*60*1e3),n=r?"; expires=":"; expires="+a.toGMTString(),t.cookie=e+"="+o+n+"; path=/"},readCookie:function(e){for(var o=e+"=",i=t.cookie.split(";"),r=0;r<i.length;r++){for(var n=i[r];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return null},deleteCookie:function(e){this.createCookie(e,"",-1)},removeWebsite:function(e){for(var t=document.body.childElementCount,o=document.body.children,i=[],r=0;r<t;r++){var n=o[r];n.id&&n.id.indexOf(e)!==-1||i.push(r)}i.reverse().forEach(function(e){o[e].remove()})}};o.init(e.leadForm)}(window,document);

}
/*
     FILE ARCHIVED ON 13:05:19 Oct 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:24:30 Jan 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 274.971
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.074
  cdx.remote: 0.068
  esindex: 0.01
  LoadShardBlock: 129.261 (3)
  PetaboxLoader3.datanode: 83.362 (5)
  CDXLines.iter: 39.95 (3)
  load_resource: 193.107 (2)
  PetaboxLoader3.resolve: 127.808 (2)
*/