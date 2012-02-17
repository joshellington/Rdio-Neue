//     keymaster.js
//     (c) 2011 Thomas Fuchs
//     keymaster.js may be freely distributed under the MIT license.
(function(a){function h(a,b){var c=a.length;while(c--)if(a[c]===b)return c;return-1}function i(a){var b,g,i,j,k,m;g=(a.target||a.srcElement).tagName,b=a.keyCode;if(b==93||b==224)b=91;if(b in d){d[b]=!0;for(j in f)f[j]==b&&(l[j]=!0);return}if(g=="INPUT"||g=="SELECT"||g=="TEXTAREA")return;if(!(b in c))return;for(k=0;k<c[b].length;k++){i=c[b][k];if(i.scope==e||i.scope=="all"){m=i.mods.length>0;for(j in d)if(!d[j]&&h(i.mods,+j)>-1||d[j]&&h(i.mods,+j)==-1)m=!1;(i.mods.length==0&&!d[16]&&!d[18]&&!d[17]&&!d[91]||m)&&i.method(a,i)===!1&&(a.preventDefault?a.preventDefault():a.returnValue=!1,a.stopPropagation&&a.stopPropagation(),a.cancelBubble&&(a.cancelBubble=!0))}}}function j(a){var b=a.keyCode,c;if(b==93||b==224)b=91;if(b in d){d[b]=!1;for(c in f)f[c]==b&&(l[c]=!1)}}function k(){for(b in d)d[b]=!1;for(b in f)l[b]=!1}function l(a,b,d){var e,h,i,j;d===undefined&&(d=b,b="all"),a=a.replace(/\s/g,""),e=a.split(","),e[e.length-1]==""&&(e[e.length-2]+=",");for(i=0;i<e.length;i++){h=[],a=e[i].split("+");if(a.length>1){h=a.slice(0,a.length-1);for(j=0;j<h.length;j++)h[j]=f[h[j]];a=[a[a.length-1]]}a=a[0],a=g[a]||a.toUpperCase().charCodeAt(0),a in c||(c[a]=[]),c[a].push({shortcut:e[i],scope:b,method:d,key:e[i],mods:h})}}function m(a){e=a||"all"}function n(){return e||"all"}function o(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,function(){c(window.event)})}var b,c={},d={16:!1,18:!1,17:!1,91:!1},e="all",f={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},g={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220};for(b=1;b<20;b++)f["f"+b]=111+b;for(b in f)l[b]=!1;o(document,"keydown",i),o(document,"keyup",j),o(window,"focus",k),a.key=l,a.key.setScope=m,a.key.getScope=n,typeof module!="undefined"&&(module.exports=key)})(this)


// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);


(function(){
/*! SWFObject v2.2 <http://code.google.com/p/swfobject/> 
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var a=function(){var E="undefined",s="object",T="Shockwave Flash",X="ShockwaveFlash.ShockwaveFlash",r="application/x-shockwave-flash",S="SWFObjectExprInst",y="onreadystatechange",P=window,k=document,u=navigator,U=false,V=[i],p=[],O=[],J=[],m,R,F,C,K=false,b=false,o,H,n=true,N=function(){var ab=typeof k.getElementById!=E&&typeof k.getElementsByTagName!=E&&typeof k.createElement!=E,ai=u.userAgent.toLowerCase(),Z=u.platform.toLowerCase(),af=Z?/win/.test(Z):/win/.test(ai),ad=Z?/mac/.test(Z):/mac/.test(ai),ag=/webkit/.test(ai)?parseFloat(ai.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,Y=!+"\v1",ah=[0,0,0],ac=null;if(typeof u.plugins!=E&&typeof u.plugins[T]==s){ac=u.plugins[T].description;if(ac&&!(typeof u.mimeTypes!=E&&u.mimeTypes[r]&&!u.mimeTypes[r].enabledPlugin)){U=true;Y=false;ac=ac.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ah[0]=parseInt(ac.replace(/^(.*)\..*$/,"$1"),10);ah[1]=parseInt(ac.replace(/^.*\.(.*)\s.*$/,"$1"),10);ah[2]=/[a-zA-Z]/.test(ac)?parseInt(ac.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof P.ActiveXObject!=E){try{var ae=new ActiveXObject(X);if(ae){ac=ae.GetVariable("$version");if(ac){Y=true;ac=ac.split(" ")[1].split(",");ah=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}}catch(aa){}}}return{w3:ab,pv:ah,wk:ag,ie:Y,win:af,mac:ad}}(),l=function(){if(!N.w3){return}if((typeof k.readyState!=E&&k.readyState=="complete")||(typeof k.readyState==E&&(k.getElementsByTagName("body")[0]||k.body))){g()}if(!K){if(typeof k.addEventListener!=E){k.addEventListener("DOMContentLoaded",g,false)}if(N.ie&&N.win){k.attachEvent(y,function(){if(k.readyState=="complete"){k.detachEvent(y,arguments.callee);g()}});if(P==top){(function(){if(K){return}try{k.documentElement.doScroll("left")}catch(Y){setTimeout(arguments.callee,0);return}g()})()}}if(N.wk){(function(){if(K){return}if(!/loaded|complete/.test(k.readyState)){setTimeout(arguments.callee,0);return}g()})()}t(g)}}();function g(){if(K){return}try{var aa=k.getElementsByTagName("body")[0].appendChild(D("span"));aa.parentNode.removeChild(aa)}catch(ab){return}K=true;var Y=V.length;for(var Z=0;Z<Y;Z++){V[Z]()}}function L(Y){if(K){Y()}else{V[V.length]=Y}}function t(Z){if(typeof P.addEventListener!=E){P.addEventListener("load",Z,false)}else{if(typeof k.addEventListener!=E){k.addEventListener("load",Z,false)}else{if(typeof P.attachEvent!=E){j(P,"onload",Z)}else{if(typeof P.onload=="function"){var Y=P.onload;P.onload=function(){Y();Z()}}else{P.onload=Z}}}}}function i(){if(U){W()}else{I()}}function W(){var Y=k.getElementsByTagName("body")[0];var ab=D(s);ab.setAttribute("type",r);var aa=Y.appendChild(ab);if(aa){var Z=0;(function(){if(typeof aa.GetVariable!=E){var ac=aa.GetVariable("$version");if(ac){ac=ac.split(" ")[1].split(",");N.pv=[parseInt(ac[0],10),parseInt(ac[1],10),parseInt(ac[2],10)]}}else{if(Z<10){Z++;setTimeout(arguments.callee,10);return}}Y.removeChild(ab);aa=null;I()})()}else{I()}}function I(){var ah=p.length;if(ah>0){for(var ag=0;ag<ah;ag++){var Z=p[ag].id;var ac=p[ag].callbackFn;var ab={success:false,id:Z};if(N.pv[0]>0){var af=d(Z);if(af){if(G(p[ag].swfVersion)&&!(N.wk&&N.wk<312)){x(Z,true);if(ac){ab.success=true;ab.ref=A(Z);ac(ab)}}else{if(p[ag].expressInstall&&B()){var aj={};aj.data=p[ag].expressInstall;aj.width=af.getAttribute("width")||"0";aj.height=af.getAttribute("height")||"0";if(af.getAttribute("class")){aj.styleclass=af.getAttribute("class")}if(af.getAttribute("align")){aj.align=af.getAttribute("align")}var ai={};var Y=af.getElementsByTagName("param");var ad=Y.length;for(var ae=0;ae<ad;ae++){if(Y[ae].getAttribute("name").toLowerCase()!="movie"){ai[Y[ae].getAttribute("name")]=Y[ae].getAttribute("value")}}Q(aj,ai,Z,ac)}else{q(af);if(ac){ac(ab)}}}}}else{x(Z,true);if(ac){var aa=A(Z);if(aa&&typeof aa.SetVariable!=E){ab.success=true;ab.ref=aa}ac(ab)}}}}}function A(ab){var Y=null;var Z=d(ab);if(Z&&Z.nodeName=="OBJECT"){if(typeof Z.SetVariable!=E){Y=Z}else{var aa=Z.getElementsByTagName(s)[0];if(aa){Y=aa}}}return Y}function B(){return !b&&G("6.0.65")&&(N.win||N.mac)&&!(N.wk&&N.wk<312)}function Q(ab,ac,Y,aa){b=true;F=aa||null;C={success:false,id:Y};var af=d(Y);if(af){if(af.nodeName=="OBJECT"){m=h(af);R=null}else{m=af;R=Y}ab.id=S;if(typeof ab.width==E||(!/%$/.test(ab.width)&&parseInt(ab.width,10)<310)){ab.width="310"}if(typeof ab.height==E||(!/%$/.test(ab.height)&&parseInt(ab.height,10)<137)){ab.height="137"}k.title=k.title.slice(0,47)+" - Flash Player Installation";var ae=N.ie&&N.win?"ActiveX":"PlugIn",ad="MMredirectURL="+P.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ae+"&MMdoctitle="+k.title;if(typeof ac.flashvars!=E){ac.flashvars+="&"+ad}else{ac.flashvars=ad}if(N.ie&&N.win&&af.readyState!=4){var Z=D("div");Y+="SWFObjectNew";Z.setAttribute("id",Y);af.parentNode.insertBefore(Z,af);af.style.display="none";(function(){if(af.readyState==4){af.parentNode.removeChild(af)}else{setTimeout(arguments.callee,10)}})()}v(ab,ac,Y)}}function q(Z){if(N.ie&&N.win&&Z.readyState!=4){var Y=D("div");Z.parentNode.insertBefore(Y,Z);Y.parentNode.replaceChild(h(Z),Y);Z.style.display="none";(function(){if(Z.readyState==4){Z.parentNode.removeChild(Z)}else{setTimeout(arguments.callee,10)}})()}else{Z.parentNode.replaceChild(h(Z),Z)}}function h(ad){var ab=D("div");if(N.win&&N.ie){ab.innerHTML=ad.innerHTML}else{var Z=ad.getElementsByTagName(s)[0];if(Z){var ae=Z.childNodes;if(ae){var Y=ae.length;for(var aa=0;aa<Y;aa++){if(!(ae[aa].nodeType==1&&ae[aa].nodeName=="PARAM")&&!(ae[aa].nodeType==8)){ab.appendChild(ae[aa].cloneNode(true))}}}}}return ab}function v(aj,ah,Z){var Y,ab=d(Z);if(N.wk&&N.wk<312){return Y}if(ab){if(typeof aj.id==E){aj.id=Z}if(N.ie&&N.win){var ai="";for(var af in aj){if(aj[af]!=Object.prototype[af]){if(af.toLowerCase()=="data"){ah.movie=aj[af]}else{if(af.toLowerCase()=="styleclass"){ai+=' class="'+aj[af]+'"'}else{if(af.toLowerCase()!="classid"){ai+=" "+af+'="'+aj[af]+'"'}}}}}var ag="";for(var ae in ah){if(ah[ae]!=Object.prototype[ae]){ag+='<param name="'+ae+'" value="'+ah[ae]+'" />'}}ab.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ai+">"+ag+"</object>";O[O.length]=aj.id;Y=d(aj.id)}else{var aa=D(s);aa.setAttribute("type",r);for(var ad in aj){if(aj[ad]!=Object.prototype[ad]){if(ad.toLowerCase()=="styleclass"){aa.setAttribute("class",aj[ad])}else{if(ad.toLowerCase()!="classid"){aa.setAttribute(ad,aj[ad])}}}}for(var ac in ah){if(ah[ac]!=Object.prototype[ac]&&ac.toLowerCase()!="movie"){f(aa,ac,ah[ac])}}ab.parentNode.replaceChild(aa,ab);Y=aa}}return Y}function f(aa,Y,Z){var ab=D("param");ab.setAttribute("name",Y);ab.setAttribute("value",Z);aa.appendChild(ab)}function z(Z){var Y=d(Z);if(Y&&Y.nodeName=="OBJECT"){if(N.ie&&N.win){Y.style.display="none";(function(){if(Y.readyState==4){c(Z)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.removeChild(Y)}}}function c(aa){var Z=d(aa);if(Z){for(var Y in Z){if(typeof Z[Y]=="function"){Z[Y]=null}}Z.parentNode.removeChild(Z)}}function d(aa){var Y=null;try{Y=k.getElementById(aa)}catch(Z){}return Y}function D(Y){return k.createElement(Y)}function j(aa,Y,Z){aa.attachEvent(Y,Z);J[J.length]=[aa,Y,Z]}function G(aa){var Z=N.pv,Y=aa.split(".");Y[0]=parseInt(Y[0],10);Y[1]=parseInt(Y[1],10)||0;Y[2]=parseInt(Y[2],10)||0;return(Z[0]>Y[0]||(Z[0]==Y[0]&&Z[1]>Y[1])||(Z[0]==Y[0]&&Z[1]==Y[1]&&Z[2]>=Y[2]))?true:false}function w(ad,Z,ae,ac){if(N.ie&&N.mac){return}var ab=k.getElementsByTagName("head")[0];if(!ab){return}var Y=(ae&&typeof ae=="string")?ae:"screen";if(ac){o=null;H=null}if(!o||H!=Y){var aa=D("style");aa.setAttribute("type","text/css");aa.setAttribute("media",Y);o=ab.appendChild(aa);if(N.ie&&N.win&&typeof k.styleSheets!=E&&k.styleSheets.length>0){o=k.styleSheets[k.styleSheets.length-1]}H=Y}if(N.ie&&N.win){if(o&&typeof o.addRule==s){o.addRule(ad,Z)}}else{if(o&&typeof k.createTextNode!=E){o.appendChild(k.createTextNode(ad+" {"+Z+"}"))}}}function x(aa,Y){if(!n){return}var Z=Y?"visible":"hidden";if(K&&d(aa)){d(aa).style.visibility=Z}else{w("#"+aa,"visibility:"+Z)}}function M(Z){var aa=/[\\\"<>\.;]/;var Y=aa.exec(Z)!=null;return Y&&typeof encodeURIComponent!=E?encodeURIComponent(Z):Z}var e=function(){if(N.ie&&N.win){window.attachEvent("onunload",function(){var ad=J.length;for(var ac=0;ac<ad;ac++){J[ac][0].detachEvent(J[ac][1],J[ac][2])}var aa=O.length;for(var ab=0;ab<aa;ab++){z(O[ab])}for(var Z in N){N[Z]=null}N=null;for(var Y in a){a[Y]=null}a=null})}}();return{registerObject:function(ac,Y,ab,aa){if(N.w3&&ac&&Y){var Z={};Z.id=ac;Z.swfVersion=Y;Z.expressInstall=ab;Z.callbackFn=aa;p[p.length]=Z;x(ac,false)}else{if(aa){aa({success:false,id:ac})}}},getObjectById:function(Y){if(N.w3){return A(Y)}},embedSWF:function(ac,ai,af,ah,Z,ab,aa,ae,ag,ad){var Y={success:false,id:ai};if(N.w3&&!(N.wk&&N.wk<312)&&ac&&ai&&af&&ah&&Z){x(ai,false);L(function(){af+="";ah+="";var ak={};if(ag&&typeof ag===s){for(var am in ag){ak[am]=ag[am]}}ak.data=ac;ak.width=af;ak.height=ah;var an={};if(ae&&typeof ae===s){for(var al in ae){an[al]=ae[al]}}if(aa&&typeof aa===s){for(var aj in aa){if(typeof an.flashvars!=E){an.flashvars+="&"+aj+"="+aa[aj]}else{an.flashvars=aj+"="+aa[aj]}}}if(G(Z)){var ao=v(ak,an,ai);if(ak.id==ai){x(ai,true)}Y.success=true;Y.ref=ao}else{if(ab&&B()){ak.data=ab;Q(ak,an,ai,ad);return}else{x(ai,true)}}if(ad){ad(Y)}})}else{if(ad){ad(Y)}}},switchOffAutoHideShow:function(){n=false},ua:N,getFlashPlayerVersion:function(){return{major:N.pv[0],minor:N.pv[1],release:N.pv[2]}},hasFlashPlayerVersion:G,createSWF:function(aa,Z,Y){if(N.w3){return v(aa,Z,Y)}else{return undefined}},showExpressInstall:function(aa,ab,Y,Z){if(N.w3&&B()){Q(aa,ab,Y,Z)}},removeSWF:function(Y){if(N.w3){z(Y)}},createCSS:function(ab,aa,Z,Y){if(N.w3){w(ab,aa,Z,Y)}},addDomLoadEvent:L,addLoadEvent:t,getQueryParamValue:function(ab){var aa=k.location.search||k.location.hash;if(aa){if(/\?/.test(aa)){aa=aa.split("?")[1]}if(ab==null){return M(aa)}var Z=aa.split("&");for(var Y=0;Y<Z.length;Y++){if(Z[Y].substring(0,Z[Y].indexOf("="))==ab){return M(Z[Y].substring((Z[Y].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(b){var Y=d(S);if(Y&&m){Y.parentNode.replaceChild(m,Y);if(R){x(R,true);if(N.ie&&N.win){m.style.display="block"}}if(F){F(C)}}b=false}}}}();
/*! rdio.jquery v0.1 <http://developer.rdio.com/>
  is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
  Copyright 2011 Rdio Inc.
*/
(function(c){c.fn.rdio=function b(d){var e=c(this);var l=e.data("rdio");if(l!=undefined){return l}var f="rdio_swf_"+Math.floor(Math.random()*10000);c("<div></div>").attr("id",f).prependTo(e);var m=f+"_cb";var h={};h.ready=function(n){e.trigger("ready.rdio",[n])};h.playStateChanged=function(n){e.trigger("playStateChanged.rdio",[n])};h.playingTrackChanged=function(o,n){e.trigger("playingTrackChanged.rdio",[o,n])};h.playingSourceChanged=function(n){e.trigger("playingSourceChanged.rdio",[n])};h.volumeChanged=function(n){e.trigger("volumeChanged.rdio",[n])};h.muteChanged=function(n){e.trigger("muteChanged.rdio",[n])};h.positionChanged=function(n){e.trigger("positionChanged.rdio",[n])};h.queueChanged=function(n){e.trigger("queueChanged.rdio",[n])};h.shuffleChanged=function(n){e.trigger("shuffleChanged.rdio",[n])};h.repeatChanged=function(n){e.trigger("repeatChanged.rdio",[n])};h.updateFrequencyData=function(n){e.trigger("updateFrequencyData.rdio",[n])};h.playingSomewhereElse=function(){e.trigger("playingSomewhereElse.rdio")};h.freeRemainingChanged=function(n){e.trigger("freeRemainingChanged.rdio",[frequencyData])};window[m]=h;var i={playbackToken:d,domain:document.domain,listener:m};var j={allowScriptAccess:"always"};var k={};a.embedSWF("http://www.rdio.com/api/swf/",f,1,1,"9.0.0","",i,j,k);var g={embed:null};g.play=function(o,n){this.embed.rdio_play(o,n)};g.pause=function(){this.embed.rdio_pause()};g.stop=function(){this.embed.rdio_stop()};g.next=function(n){this.embed.rdio_next(n)};g.previous=function(){this.embed.rdio_previous()};g.seek=function(n){this.embed.rdio_seek(n)};g.setShuffle=function(n){this.embed.rdio_setShuffle(n)};g.setRepeat=function(n){this.embed.rdio_setRepeat(n)};g.queue=function(o,n){this.embed.queue(o,n)};g.setVolume=function(n){this.embed.rdio_setVolume(n)};g.setMute=function(n){this.embed.rdio_setMute(n)};g.playQueuedTrack=function(n,o){this.embed.rdio_playQueuedTrack(n,o)};g.moveQueuedSource=function(o,n){this.embed.rdio_moveQueuedSource(o,n)};g.clearQueue=function(){this.embed.rdio_clearQueue()};g.setCurrentPosition=function(n){this.embed.rdio_setCurrentPosition(n)};g.removeFromQueue=function(n){this.embed.rdio_removeFromQueue(n)};g.sendState=function(){this.embed.rdio_sendState()};g.startFrequencyAnalyzer=function(n){this.embed.rdio_startFrequencyAnalyzer(n)};g.stopFrequencyAnalyzer=function(){this.embed.rdio_stopFrequencyAnalyzer()};e.data("rdio",g);setTimeout(function(){g.embed=c("#"+f).get(0)},1);return g}})(jQuery)})();






/* Colors JS Library v1.0 * http://matthewbjordan.me/colors * Copyright 2012 Matthew B. Jordan */
var Colors={rgb2hex:function(a){if("object"==typeof a){var b="#";for(x in a){var c=a[x].toString(16);1==c.length&&(c="0"+c);b+=c}return b}c=a.toString(16);1==c.length&&(c="0"+c);return c},hex2rgb:function(a){a=a.replace("#","");return 6===a.length?{R:parseInt(a.substr(0,2),16),G:parseInt(a.substr(2,2),16),B:parseInt(a.substr(4,2),16),RGB:parseInt(a.substr(0,2),16)+" "+parseInt(a.substr(2,2),16)+" "+parseInt(a.substr(4,2),16),a:[parseInt(a.substr(0,2),16),parseInt(a.substr(2,2),16),parseInt(a.substr(4,
2),16)]}:parseInt(a,16)},hex2hsv:function(a){var a="#"==a.charAt(0)?a.substring(1,7):a,b=parseInt(a.substring(0,2),16)/255,c=parseInt(a.substring(2,4),16)/255,d=parseInt(a.substring(4,6),16)/255,f=0,g=0,a=0,a=Math.min(b,c,d),e=Math.max(b,c,d),h=e-a,a=e;if(0==h)g=f=0;else{var g=h/e,i=((e-b)/6+h/2)/h,j=((e-c)/6+h/2)/h,h=((e-d)/6+h/2)/h;b==e?f=h-j:c==e?f=1/3+i-h:d==e&&(f=2/3+j-i);0>f&&(f+=1);1<f&&(f-=1)}b=Math.round(360*f);c=Math.round(100*g);a=Math.round(100*a);return{H:b,S:c,V:a,HSV:b+" "+c+" "+a,
a:[b,c,a]}},hsv2rgb:function(a,b,c){if("object"==typeof a)var d=a[0],b=a[1],a=a[2];else d=a,a=c;var b=b/100,a=a/100,c=Math.floor(d/60%6),f=d/60-c,d=a*(1-b),g=a*(1-f*b),f=a*(1-(1-f)*b),b=[];switch(c){case 0:b=[a,f,d];break;case 1:b=[g,a,d];break;case 2:b=[d,a,f];break;case 3:b=[d,g,a];break;case 4:b=[f,d,a];break;case 5:b=[a,d,g]}a=Math.min(255,Math.floor(256*b[0]));c=Math.min(255,Math.floor(256*b[1]));b=Math.min(255,Math.floor(256*b[2]));return{R:a,G:c,B:b,RGB:a+" "+c+" "+b,a:[a,c,b]}},rgb2hsl:function(a,
b,c){if("object"==typeof a)var d=a[0],b=a[1],c=a[2];else d=a;d/=255;b/=255;c/=255;var f=Math.max(d,b,c),g=Math.min(d,b,c),e,a=(f+g)/2;if(f==g)e=g=0;else{var h=f-g,g=0.5<a?h/(2-f-g):h/(f+g);switch(f){case d:e=(b-c)/h+(b<c?6:0);break;case b:e=(c-d)/h+2;break;case c:e=(d-b)/h+4}e/=6}d=Math.floor(360*e);e=Math.floor(100*g);b=Math.floor(100*a);return{H:d,S:e,L:b,HSL:d+" "+e+" "+b,a:[d,e,b]}},hsv2hsl:function(a,b,c){if("object"==typeof a)var d=a[0],b=a[1],a=a[2];else d=a,a=c;var b=this.hsv2rgb(d,b,a),d=
b.R/255,a=b.G/255,f=b.B/255,g=Math.max(d,a,f),e=Math.min(d,a,f),h=(g+e)/2,i=b=0;g!=e&&(b=0.5>h?(g-e)/(g+e):(g-e)/(2-g-e),i=d==g?(a-f)/(g-e):a==g?2+(f-d)/(g-e):4+(d-a)/(g-e));h*=100;b*=100;i*=60;0>i&&(i+=360);return{H:Math.floor(i),S:Math.floor(b),L:Math.floor(h),HSL:Math.floor(i)+" "+Math.floor(b)+" "+Math.floor(h),a:[Math.floor(i),Math.floor(b),Math.floor(c)]}},name2hex:function(a){a=a.toLowerCase();a={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",
beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",
darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",
greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",
slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}[a];return void 0==a?"Invalid Color Name":a},name2rgb:function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2rgb(a):{R:"Invalid Color Name",G:"Invalid Color Name",B:"Invalid Color Name",RGB:"Invalid Color Name",
a:"Invalid Color Name"}},name2hsv:function(a){a=this.name2hex(a);return/^[a-fA-F0-9#]{7}$/.test(a)?this.hex2hsv(a):{H:"Invalid Color Name",S:"Invalid Color Name",V:"Invalid Color Name",HSV:"Invalid Color Name",a:"Invalid Color Name"}},complement:function(a,b,c){if("string"==typeof a&&/(#([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)/.test(a))return a=a.replace("#",""),b="#",6===a.length&&(b+=this.rgb2hex(255-this.hex2rgb(a.substr(0,2))),b+=this.rgb2hex(255-this.hex2rgb(a.substr(2,2))),b+=this.rgb2hex(255-this.hex2rgb(a.substr(4,
2)))),3===a.length&&(b+=this.rgb2hex(255-this.hex2rgb(a.substr(0,1)+a.substr(0,1))),b+=this.rgb2hex(255-this.hex2rgb(a.substr(1,1)+a.substr(1,1))),b+=this.rgb2hex(255-this.hex2rgb(a.substr(2,1)+a.substr(2,1)))),b;if(void 0!=a&&void 0!=b&&void 0!=c)return{R:255-a,G:255-b,B:255-c,RGB:255-a+" "+(255-b)+" "+(255-c),a:[255-a,255-b,255-c]};if("object"==typeof a)return{R:255-a[0],G:255-a[1],B:255-a[2],RGB:255-a[0]+" "+(255-a[1])+" "+(255-a[2]),a:[255-a[0],255-a[1],255-a[2]]}},rand:function(a){if("hex"==
a||void 0==a){for(var a="",b=0;6>b;b++)var c=Math.floor(16*Math.random()),a=a+"0123456789abcdef".substring(c,c+1);return"#"+a}if("rgb"==a)return R=Math.floor(-254*Math.random()+255),G=Math.floor(-254*Math.random()+255),B=Math.floor(-254*Math.random()+255),{R:R,G:G,B:B,RGB:R+" "+G+" "+B,a:[R,G,B]}}};



/*! Copyright (c) 2010 Burin Asavesna (http://helloburin.com)
 * Licensed under the MIT License (LICENSE.txt).
 */
(function($) {
    // boxShadow get hooks
    var div = document.createElement('div'),
        divStyle = div.style,
        support = $.support,
        rWhitespace = /\s/,
        rParenWhitespace = /\)\s/;

    support.boxShadow =
        divStyle.MozBoxShadow     === ''? 'MozBoxShadow'    :
        (divStyle.MsBoxShadow     === ''? 'MsBoxShadow'     :
        (divStyle.WebkitBoxShadow === ''? 'WebkitBoxShadow' :
        (divStyle.OBoxShadow      === ''? 'OBoxShadow'      :
        (divStyle.boxShadow       === ''? 'BoxShadow'       :
        false))));

    div = null;

    // helper function to inject a value into an existing string
    // is there a better way to do this? it seems like a common pattern
    function insert_into(string, value, index) {
        var parts  = string.split(rWhitespace);
        parts[index] = value;
        return parts.join(" ");
    }

    if ( support.boxShadow && support.boxShadow !== "BoxShadow" ) {
        $.cssHooks.boxShadow = {
            get: function( elem, computed, extra ) {
                return $.css(elem, support.boxShadow);
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = value;
            }
        };

        $.cssHooks.boxShadowColor = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(rParenWhitespace)[0] + ')';
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = value + " " + $.css(elem, support.boxShadow).split(rParenWhitespace)[1];
            }
        };

        $.cssHooks.boxShadowBlur = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(rWhitespace)[5];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 5);
            }
        };

        $.cssHooks.boxShadowSpread = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(rWhitespace)[6];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 6);
            }
        };

        $.cssHooks.boxShadowX = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(rWhitespace)[3];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 3);
            }
        };

        $.cssHooks.boxShadowY = {
            get: function ( elem, computed, extra ) {
                return $.css(elem, support.boxShadow).split(rWhitespace)[4];
            },
            set: function( elem, value ) {
                elem.style[ support.boxShadow ] = insert_into($.css(elem, support.boxShadow), value, 4);
            }
        };

        // setup fx hooks
        var fxHooks = "Blur Spread X Y".split(" ");
        $.each(fxHooks, function( i, suffix ) {
            var hook = "boxShadow" + suffix;
            $.fx.step[ hook ] = function( fx ) {
                $.cssHooks[ hook ].set( fx.elem, fx.now + fx.unit );
            };
        });
    }

})(jQuery);