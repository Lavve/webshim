(function(b,m,l,u){l.createElement("datalist");var o=b.event.special,p=Modernizr.input,z=Modernizr.inputtypes,v=parseFloat(b.browser.version,10);(function(){var a=Modernizr.addTest,c=b('<form action="#"><input name="a" required /><select><option>y</option></select><input required id="date-input-test" type="date" /></form>');a("formvalidation",function(){return!!("checkValidity"in c[0])});a("datalist",function(){return!!(p.list&&m.HTMLDataListElement)});a("validationmessage",function(){if(!Modernizr.formvalidation)return false;
c.appendTo("head");return!!b("input",c).attr("validationMessage")});a("output",function(){if(!Modernizr.formvalidation)return false;return"value"in l.createElement("output")});Modernizr.genericDOM=!!b("<video><div></div></video>")[0].innerHTML;Modernizr.requiredSelect=!!(Modernizr.formvalidation&&"required"in b("select",c)[0]);Modernizr.bugfreeformvalidation=Modernizr.formvalidation&&Modernizr.requiredSelect&&Modernizr.validationmessage&&(!b.browser.webkit||v>534.16);p.valueAsNumber=false;p.valueAsDate=
false;if(Modernizr.formvalidation){a=b("#date-input-test",c)[0];p.valueAsNumber="valueAsNumber"in a;p.valueAsDate="valueAsDate"in a;a=null}Modernizr.formvalidation&&c.remove();c=null;Modernizr.ES5base=!!(String.prototype.trim&&Date.now&&Date.prototype.toISOString);Modernizr.ES5extras=!!(Array.isArray&&Object.keys&&Object.create&&Function.prototype.bind&&Object.defineProperties&&!isNaN(Date.parse("T00:00")));Modernizr.ES5base&&b.each(["filter","map","every","reduce","reduceRight","lastIndexOf"],function(d,
h){if(!Array.prototype[h])return Modernizr.ES5base=false});Modernizr.advancedObjectProperties=!!(Object.create&&Object.defineProperties&&Object.getOwnPropertyDescriptor);!b.browser.msie&&Object.defineProperty&&Object.prototype.__defineGetter__&&function(){try{var d=l.createElement("foo");Object.defineProperty(d,"bar",{get:function(){return true}});Modernizr.advancedObjectProperties=!!d.bar}catch(h){Modernizr.advancedObjectProperties=false}d=null}();Modernizr.ES5=Modernizr.ES5base&&Modernizr.ES5extras&&
Modernizr.advancedObjectProperties;Modernizr.objectAccessor=!!(Modernizr.advancedObjectProperties||Object.prototype.__defineGetter__&&Object.prototype.__lookupSetter__);Modernizr.domAccessor=!!(Modernizr.objectAccessor||Object.defineProperty&&Object.getOwnPropertyDescriptor)})();b.webshims=b.sub();b.extend(b.webshims,{version:"pre1.5.0",cfg:{useImportantStyles:true,removeFOUC:true,waitReady:true},modules:{},features:{},featureList:[],setOptions:function(a,c){if(typeof a=="string"&&c!==u&&f.cfg[a])if(typeof c!=
"object")f.cfg[a]=c;else b.extend(true,f.cfg[a],c);else typeof a=="object"&&b.extend(true,f.cfg,a)},addPolyfill:function(a,c){c=c||{};var d=c.feature||a;if(!f.features[d]){f.features[d]=[];f.featureList.push(d);f.cfg[d]={}}f.features[d].push(a);c.options=b.extend(f.cfg[d],c.options);w(a,c);b.each(c.combination||[],function(h,g){if(y[g])y[g].push(a);else y[g]=[a]});if(c.methodNames){if(!b.isArray(c.methodNames))c.methodNames=[c.methodNames];b.each(c.methodNames,function(h,g){f.addMethodName(g)})}},
polyfill:function(){var a=function(c){var d,h=[],g=c,e=function(){b("html").removeClass("loading-polyfills long-loading-polyfills polyfill-remove-fouc");b(m).unbind(".loadingPolyfills");clearTimeout(d)};if(b.isReady)f.info("You should call $.webshims.polyfill before DOM-Ready");else{if(f.cfg.removeFOUC){if(f.cfg.waitReady)g=g.concat(["DOM"]);h.push("polyfill-remove-fouc")}h.push("loading-polyfills");b(m).bind("load.loadingPolyfills polyfillloaderror.loadingPolyfills  error.loadingPolyfills",e);d=
setTimeout(function(){b("html").addClass("long-loading-polyfills")},600)}t(c,e);f.cfg.useImportantStyles&&h.push("polyfill-important");h[0]&&b("html").addClass(h.join(" "));b(function(){j.loadList(["html5a11y"])});j.loadCSS("shim.css");a=b.noop};return function(c,d){var h=[];c=c||f.featureList;if(c=="lightweight")c=f.light;if(typeof c=="string")c=c.split(" ");if(d||f.cfg.waitReady){f.cfg.waitReady&&b.readyWait++;t(c,function(){f.cfg.waitReady&&b.ready(true);d&&d(b,f,m,l)})}b.each(c,function(g,e){e!==
f.features[e][0]&&t(f.features[e],function(){q(e,true)});h=h.concat(f.features[e])});a(c);j.loadList(h)}}(),isReady:function(a,c){if(c&&f.waitReadys[a]){f.waitReadys[a+"ReadyCall"]=true;return false}a+="Ready";if(c){if(o[a]&&o[a].add)return true;o[a]=b.extend(o[a]||{},{add:function(d){d.handler.call(this,b.Event(a))}});b.event.trigger(a)}return!!(o[a]&&o[a].add)||false},waitReadys:{},ready:function(a,c,d){if(typeof a=="string")a=a.split(" ");d||(a=b.map(b.grep(a,function(h){return!q(h)}),function(h){return h+
"Ready"}));if(a.length){d=a.shift();b(l).one(d,function(){t(a,c,true)})}else c(b,f,m,l)},addMethodName:function(a){b.fn[a]&&"shim"in b.fn[a]||(b.fn[a]=function(){var c=arguments,d;this.each(function(){var h=b.attr(this,a);if(h&&h.apply){d=h.apply(this,c);if(d!==u)return false}});return d!==u?d:this})},fixHTML5:function(a){return a},capturingEvents:function(a){if(l.addEventListener){if(typeof a=="string")a=[a];b.each(a,function(c,d){var h=function(g){return b.event.handle.call(this,b.event.fix(g))};
o[d]=o[d]||{};o[d].setup||o[d].teardown||b.extend(o[d],{setup:function(){this.addEventListener(d,h,true)},teardown:function(){this.removeEventListener(d,h,true)}})})}},loader:{basePath:function(){var a=b('meta[name="polyfill-path"]').attr("content");if(a)return a;a=b("script");a=a[a.length-1];a=(!b.browser.msie||l.documentMode>=8?a.src:a.getAttribute("src",4)).split("?")[0];return a.slice(0,a.lastIndexOf("/")+1)+"shims/"}(),combinations:{},addModule:function(a,c){r[a]=c},loadList:function(){var a=
[],c=function(d,h,g){if(q(d))return true;var e=r[d];if(e){if("test"in e&&e.test(h)){q(d,true);return true}else if(g&&!q(d)&&b.inArray(d,g)==-1&&b.inArray(d,h)==-1){g.push(d);return false}return q(d)}else if(f.features[d]&&g&&d!==f.features[d][0]){t(f.features[d],function(){q(d,true)});b.each(f.features[d],function(i,n){!c(n,h)&&b.inArray(n,g)==-1&&b.inArray(n,h)==-1&&g.push(n)})}return true};return function(d){var h=[];b.each(d,function(g,e){var i=r[e];if(!c(e,d)){i.css&&j.loadCSS(i.css);h.push(e);
i.dependencies&&b.each(i.dependencies,function(n,s){c(s,d,h)});i.loadInit&&i.loadInit()}});f.debug||b.each(j.combinations||[],function(g,e){var i=true;b.each(e,function(n,s){if(b.inArray(s,h)===-1||b.inArray(s,a)!==-1)return i=false});if(i){a=a.concat(e);j.loadScript(g,false,e);return false}});b.each(h,function(g,e){if(b.inArray(e,a)==-1)j.loadScript(r[e].src||e,false,e)})}}(),makePath:function(a){if(a.indexOf("//")!=-1||a.indexOf("/")===0)return a;if(a.indexOf(".")==-1)a+=".js";return j.basePath+
a},loadCSS:function(){var a,c=[];return function(d){d=this.makePath(d);if(b.inArray(d,c)==-1){a=a||l.getElementsByTagName("head")[0]||l.body;c.push(d);b('<link rel="stylesheet" />').prependTo(a).attr({href:d})}}}(),loadScript:function(){var a,c=[];return function(d,h,g){d=j.makePath(d);if(b.inArray(d,c)==-1){a=a||l.getElementsByTagName("head")[0]||l.body;if(!a||!a.appendChild)setTimeout(function(){j.loadScript(d,h,g)},9);else{var e=l.createElement("script"),i,n=function(s){if(s&&s.type==="error"){b(m).triggerHandler("polyfillloaderror");
f.warn("Error: could not find script @"+d+'| configure polyfill-path: $.webshims.loader.basePath = "path/to/shims-folder" or by using markup: <meta name="polyfill-path" content="path/to/shims-folder/" />')}if(!this.readyState||this.readyState=="loaded"||this.readyState=="complete"){e.onload=null;e.onreadystatechange=null;h&&h(s,this);if(g){if(typeof g=="string")g=g.split(" ");b.each(g,function(B,x){if(r[x]){r[x].afterLoad&&r[x].afterLoad();r[x].noAutoCallback||q(x,true)}})}b(e).unbind("error.polyfillerror",
n);e=null;clearTimeout(i)}};e.setAttribute("async","async");e.src=d;i=setTimeout(function(){n({type:"error"})},2E4);e.onload=n;b(e).one("error.polyfillerror",n);e.onreadystatechange=n;a.appendChild(e);e.async=true;c.push(d)}}}}()}});var f=b.webshims,q=f.isReady,t=f.ready,k=f.addPolyfill,r=f.modules,j=f.loader,w=j.addModule,y=j.combinations,A={cache:true,dataType:"text",error:function(){f.warn("could not find: "+this.url)}};b.each(["log","error","warn","info"],function(a,c){f[c]=function(d){if(f.debug&&
m.console&&console.log)return console[console[c]?c:"log"](d)}});(function(){b.each(["after","before","append","prepend","replaceWith"],function(c,d){b.fn[d+"Webshim"]=b.fn[d]});b.isDOMReady=b.isReady;if(b.isDOMReady)q("DOM",true);else{var a=b.ready;b.ready=function(c){if(c!==true&&!b.isDOMReady&&l.body){b.isDOMReady=true;q("DOM",true);b.ready=a}return a.apply(this,arguments)}}})();(function(){var a=Object.prototype.hasOwnProperty,c=["configurable","enumerable","writable"],d=function(g){for(var e=
0;e<3;e++)if(g[c[e]]===u&&(c[e]!=="writable"||g.value!==u))g[c[e]]=true},h=function(g){if(g)for(var e in g)a.call(g,e)&&d(g[e])};if(Object.create)f.objectCreate=function(g,e,i){h(e);g=Object.create(g,e);if(i){g.options=b.extend(true,{},g.options||{},i);i=g.options}g._create&&b.isFunction(g._create)&&g._create(i);return g};if(Object.defineProperty)f.defineProperty=function(g,e,i){d(i);return Object.defineProperty(g,e,i)};if(Object.defineProperties)f.defineProperties=function(g,e){h(e);return Object.defineProperties(g,
e)};f.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor;f.getPrototypeOf=Object.getPrototypeOf})();w("html5a11y",{src:"html5a11y",test:function(){return!(b.browser.msie&&v<9&&v>7||b.browser.mozilla&&v<2||b.browser.webkit&&v<535||!m.HTMLArticleElement)}});w("jquery-ui",{src:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/jquery-ui.min.js",test:function(){return!!(b.widget&&b.Widget)}});w("input-widgets",{src:"",test:function(){var a=!(b.widget&&!(b.fn.datepicker||b.fn.slider));if(!this.src){a||
f.warn('jQuery UI Widget factory is already included, but not datepicker or slider. configure src of $.webshims.modules["input-widgets"].src');return true}return a}});w("swfobject",{src:"//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js",test:function(){return"swfobject"in m}});k("es5-1",{feature:"es5",test:function(){return Modernizr.ES5},combination:["combined-ie7","combined-ie8","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ff3-light","combined-webkit"]});k("es5-2",
{feature:"es5",test:function(){return Modernizr.ES5base},combination:["combined-ie7","combined-ie8","combined-ie7-light","combined-ie8-light"]});k("dom-extend",{feature:"dom-support",noAutoCallback:true,dependencies:["es5"],combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light","combined-webkit"]});k("html5shiv",{feature:"dom-support",test:function(){return Modernizr.genericDOM},combination:["combined-ie7",
"combined-ie8","combined-ie7-light","combined-ie8-light"]});k("geolocation",{test:function(){return Modernizr.geolocation},options:{destroyWrite:true,confirmText:""},dependencies:["json-storage"],combination:["combined-ie7","combined-ie8","combined-ie9","combined-ie7-light","combined-ie8-light","combined-ie9-light"]});(function(){var a;k("canvas",{src:"excanvas",test:function(){return Modernizr.canvas},options:{type:"excanvas"},noAutoCallback:true,loadInit:function(){var c=this.options.type;if(c&&
c.indexOf("flash")!==-1){m.FlashCanvasOptions=m.FlashCanvasOptions||{};a=m.FlashCanvasOptions;if(c=="flash"){b.extend(a,{swfPath:j.basePath+"FlashCanvas/"});this.src="FlashCanvas/flashcanvas";c=a.swfPath+"flashcanvas.swf"}else{b.extend(a,{swfPath:j.basePath+"FlashCanvasPro/"});this.src="FlashCanvasPro/flashcanvas";c=a.swfPath+"flash10canvas.swf"}c&&b.ajax(c,A)}},afterLoad:function(){f.ready("dom-extend",function(c,d,h,g){d.defineNodeNameProperty("canvas","getContext",{value:function(e){this.getContext||
G_vmlCanvasManager.initElement(this);return this.getContext(e)}});d.addReady(function(e,i){c("canvas",e).add(i.filter("canvas")).each(function(){if(this.getContext){if(e===g)return false}else G_vmlCanvasManager.initElement(this)});g===e&&q("canvas",true)})})},methodNames:["getContext"],dependencies:["es5","dom-support"]})})();f.validityMessages=[];f.validationMessages=f.validityMessages;f.inputTypes={};k("form-core",{feature:"forms",noAutoCallback:true,dependencies:["es5"],combination:["combined-ie7",
"combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light","combined-webkit"]});k("form-message",{feature:"forms",test:function(a){return Modernizr.validationMessage&&!this.options.customMessages&&r["form-extend"].test(a)},options:{customMessages:false,overrideMessages:false},dependencies:["dom-support"],noAutoCallback:true,combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4","combined-ie7-light",
"combined-ie8-light","combined-ie9-light","combined-ff3-light","combined-webkit"]});if(Modernizr.formvalidation){f.capturingEvents(["input"]);f.capturingEvents(["invalid"],true);k("form-extend",{feature:"forms",src:"form-native-extend",noAutoCallback:true,test:function(a){return Modernizr.requiredSelect&&Modernizr.validationMessage&&(p.valueAsNumber&&p.valueAsDate||b.inArray("form-number-date",a)==-1)&&!this.options.overrideMessages},dependencies:["dom-support"],methodNames:["setCustomValidity","checkValidity"],
combination:["combined-ff4","combined-webkit"]});k("form-native-fix",{feature:"forms",test:function(){return Modernizr.bugfreeformvalidation},dependencies:["dom-support"],combination:["combined-webkit"]})}else k("form-extend",{feature:"forms",src:"form-shim-extend",noAutoCallback:true,methodNames:["setCustomValidity","checkValidity"],dependencies:["dom-support"],combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light",
"combined-ff3-light"]});k("form-output-datalist",{feature:"forms",noAutoCallback:true,test:function(){return Modernizr.output&&Modernizr.datalist},dependencies:["dom-support","json-storage"],combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});k("form-number-date",{feature:"forms-ext",noAutoCallback:true,dependencies:["es5","forms","json-storage","dom-support"],test:function(){return p.valueAsNumber&&
p.valueAsDate},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],options:{stepArrows:{number:1,time:1},calculateWidth:true}});k("inputUI",{feature:"forms-ext",src:"form-date-range-ui",test:function(){return z.range&&z.date&&!this.options.replaceUI},combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ff4"],noAutoCallback:true,dependencies:["es5","forms","dom-support"],loadInit:function(){j.loadList(["jquery-ui"]);r["input-widgets"].src&&
j.loadList(["input-widgets"])},options:{slider:{},datepicker:{},langSrc:"//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/i18n/jquery.ui.datepicker-",availabeLangs:"af ar ar-DZ az bg bs ca cs da de el en-AU en-GB en-NZ eo es et eu fa fi fo fr fr-CH gl he hr hu hy id is it ja ko kz lt lv ml ms nl no pl pt-BR rm ro ru sk sl sq sr sr-SR sv ta th tr uk vi zh-CN zh-HK zh-TW".split(" "),recalcWidth:true,replaceUI:false}});p.list&&t("dom-extend",function(){b.webshims.defineNodeNameProperty("input","list",
{set:function(a){if(a&&a.getAttribute)a=b.webshims.getID(a);this.setAttribute("list",a)}})});k("form-placeholder",{feature:"forms",test:function(){return p.placeholder},options:{placeholderType:"value"},noAutoCallback:true,combination:["combined-ie7","combined-ie8","combined-ie9","combined-ff3","combined-ie7-light","combined-ie8-light","combined-ie9-light","combined-ff3-light"]});k("json-storage",{test:function(){return Modernizr.localstorage&&Modernizr.sessionstorage&&"JSON"in m},loadInit:function(){j.loadList(["swfobject"]);
b.ajax(j.basePath+"localStorage.swf",A)},noAutoCallback:true,combination:["combined-ie7","combined-ie7-light"]});f.light=["es5","canvas","geolocation","forms","json-storage"]})(jQuery,this,this.document);
