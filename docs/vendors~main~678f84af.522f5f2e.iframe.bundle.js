/*! For license information please see vendors~main~678f84af.522f5f2e.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./node_modules/react/index.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react.production.min.js")},"./node_modules/react/jsx-runtime.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/regenerator-runtime/runtime.js":function(module,exports,__webpack_require__){var runtime=function(exports){"use strict";var Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function invoke(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;this._invoke=function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(undefined===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,define(Gp,"constructor",GeneratorFunctionPrototype),define(GeneratorFunctionPrototype,"constructor",GeneratorFunction),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}},exports}(module.exports);try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./node_modules/regexp.prototype.flags/implementation.js":function(module,exports,__webpack_require__){"use strict";var $Object=Object,$TypeError=TypeError;module.exports=function flags(){if(null!=this&&this!==$Object(this))throw new $TypeError("RegExp.prototype.flags getter called on non-object");var result="";return this.hasIndices&&(result+="d"),this.global&&(result+="g"),this.ignoreCase&&(result+="i"),this.multiline&&(result+="m"),this.dotAll&&(result+="s"),this.unicode&&(result+="u"),this.sticky&&(result+="y"),result}},"./node_modules/regexp.prototype.flags/index.js":function(module,exports,__webpack_require__){"use strict";var define=__webpack_require__("./node_modules/define-properties/index.js"),callBind=__webpack_require__("./node_modules/call-bind/index.js"),implementation=__webpack_require__("./node_modules/regexp.prototype.flags/implementation.js"),getPolyfill=__webpack_require__("./node_modules/regexp.prototype.flags/polyfill.js"),shim=__webpack_require__("./node_modules/regexp.prototype.flags/shim.js"),flagsBound=callBind(getPolyfill());define(flagsBound,{getPolyfill:getPolyfill,implementation:implementation,shim:shim}),module.exports=flagsBound},"./node_modules/regexp.prototype.flags/polyfill.js":function(module,exports,__webpack_require__){"use strict";var implementation=__webpack_require__("./node_modules/regexp.prototype.flags/implementation.js"),supportsDescriptors=__webpack_require__("./node_modules/define-properties/index.js").supportsDescriptors,$gOPD=Object.getOwnPropertyDescriptor;module.exports=function getPolyfill(){if(supportsDescriptors&&"gim"===/a/gim.flags){var descriptor=$gOPD(RegExp.prototype,"flags");if(descriptor&&"function"==typeof descriptor.get&&"boolean"==typeof/a/.dotAll)return descriptor.get}return implementation}},"./node_modules/regexp.prototype.flags/shim.js":function(module,exports,__webpack_require__){"use strict";var supportsDescriptors=__webpack_require__("./node_modules/define-properties/index.js").supportsDescriptors,getPolyfill=__webpack_require__("./node_modules/regexp.prototype.flags/polyfill.js"),gOPD=Object.getOwnPropertyDescriptor,defineProperty=Object.defineProperty,TypeErr=TypeError,getProto=Object.getPrototypeOf,regex=/a/;module.exports=function shimFlags(){if(!supportsDescriptors||!getProto)throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var polyfill=getPolyfill(),proto=getProto(regex),descriptor=gOPD(proto,"flags");return descriptor&&descriptor.get===polyfill||defineProperty(proto,"flags",{configurable:!0,enumerable:!1,get:polyfill}),polyfill}},"./node_modules/scheduler/cjs/scheduler.production.min.js":function(module,exports,__webpack_require__){"use strict";var f,g,h,k,l;if("undefined"==typeof window||"function"!=typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a),p=null}catch(b){throw setTimeout(t,0),b}},u=Date.now();exports.unstable_now=function(){return Date.now()-u},f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))},g=function(a,b){q=setTimeout(a,b)},h=function(){clearTimeout(q)},k=function(){return!1},l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,y=window.setTimeout,z=window.clearTimeout;if("undefined"!=typeof console){var A=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof w&&"function"==typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G},l=function(){},exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1e3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b}}else C=!1},f=function(a){D=a,C||(C=!0,I.postMessage(null))},g=function(a,b){E=y((function(){a(exports.unstable_now())}),b)},h=function(){z(E),E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(!(void 0!==e&&0<K(e,b)))break a;a[d]=b,a[c]=e,c=d}}function L(a){return void 0===(a=a[0])?null:a}function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else{if(!(void 0!==r&&0>K(r,c)))break a;a[d]=r,a[v]=c,d=v}}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else{if(!(b.startTime<=a))break;M(O),b.sortIndex=b.expirationTime,J(N,b)}b=L(O)}}function W(a){if(U=!1,V(a),!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}function X(a,b){T=!1,U&&(U=!1,h()),S=!0;var c=R;try{for(V(b),Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null,R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now(),"function"==typeof e?Q.callback=e:Q===L(N)&&M(N),V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b),m=!1}return m}finally{Q=null,R=c,S=!1}}function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var Z=l;exports.unstable_IdlePriority=5,exports.unstable_ImmediatePriority=1,exports.unstable_LowPriority=4,exports.unstable_NormalPriority=3,exports.unstable_Profiling=null,exports.unstable_UserBlockingPriority=2,exports.unstable_cancelCallback=function(a){a.callback=null},exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))},exports.unstable_getCurrentPriorityLevel=function(){return R},exports.unstable_getFirstCallbackNode=function(){return L(N)},exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}},exports.unstable_pauseExecution=function(){},exports.unstable_requestPaint=Z,exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}},exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"==typeof c&&null!==c){var e=c.delay;e="number"==typeof e&&0<e?d+e:d,c="number"==typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;return a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c=e+c,sortIndex:-1},e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X))),a},exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()},exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}}},"./node_modules/scheduler/index.js":function(module,exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/scheduler/cjs/scheduler.production.min.js")},"./node_modules/setimmediate/setImmediate.js":function(module,exports,__webpack_require__){(function(global,process){!function(global,undefined){"use strict";if(!global.setImmediate){var registerImmediate,nextHandle=1,tasksByHandle={},currentlyRunningATask=!1,doc=global.document,attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global,"[object process]"==={}.toString.call(global.process)?function installNextTickImplementation(){registerImmediate=function(handle){process.nextTick((function(){runIfPresent(handle)}))}}():!function canUsePostMessage(){if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=!0,oldOnMessage=global.onmessage;return global.onmessage=function(){postMessageIsAsynchronous=!1},global.postMessage("","*"),global.onmessage=oldOnMessage,postMessageIsAsynchronous}}()?global.MessageChannel?function installMessageChannelImplementation(){var channel=new MessageChannel;channel.port1.onmessage=function(event){runIfPresent(event.data)},registerImmediate=function(handle){channel.port2.postMessage(handle)}}():doc&&"onreadystatechange"in doc.createElement("script")?function installReadyStateChangeImplementation(){var html=doc.documentElement;registerImmediate=function(handle){var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle),script.onreadystatechange=null,html.removeChild(script),script=null},html.appendChild(script)}}():function installSetTimeoutImplementation(){registerImmediate=function(handle){setTimeout(runIfPresent,0,handle)}}():function installPostMessageImplementation(){var messagePrefix="setImmediate$"+Math.random()+"$",onGlobalMessage=function(event){event.source===global&&"string"==typeof event.data&&0===event.data.indexOf(messagePrefix)&&runIfPresent(+event.data.slice(messagePrefix.length))};global.addEventListener?global.addEventListener("message",onGlobalMessage,!1):global.attachEvent("onmessage",onGlobalMessage),registerImmediate=function(handle){global.postMessage(messagePrefix+handle,"*")}}(),attachTo.setImmediate=function setImmediate(callback){"function"!=typeof callback&&(callback=new Function(""+callback));for(var args=new Array(arguments.length-1),i=0;i<args.length;i++)args[i]=arguments[i+1];var task={callback:callback,args:args};return tasksByHandle[nextHandle]=task,registerImmediate(nextHandle),nextHandle++},attachTo.clearImmediate=clearImmediate}function clearImmediate(handle){delete tasksByHandle[handle]}function runIfPresent(handle){if(currentlyRunningATask)setTimeout(runIfPresent,0,handle);else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=!0;try{!function run(task){var callback=task.callback,args=task.args;switch(args.length){case 0:callback();break;case 1:callback(args[0]);break;case 2:callback(args[0],args[1]);break;case 3:callback(args[0],args[1],args[2]);break;default:callback.apply(void 0,args)}}(task)}finally{clearImmediate(handle),currentlyRunningATask=!1}}}}}("undefined"==typeof self?void 0===global?this:global:self)}).call(this,__webpack_require__("./node_modules/webpack/buildin/global.js"),__webpack_require__("./node_modules/process/browser.js"))},"./node_modules/side-channel/index.js":function(module,exports,__webpack_require__){"use strict";var GetIntrinsic=__webpack_require__("./node_modules/get-intrinsic/index.js"),callBound=__webpack_require__("./node_modules/call-bind/callBound.js"),inspect=__webpack_require__("./node_modules/object-inspect/index.js"),$TypeError=GetIntrinsic("%TypeError%"),$WeakMap=GetIntrinsic("%WeakMap%",!0),$Map=GetIntrinsic("%Map%",!0),$weakMapGet=callBound("WeakMap.prototype.get",!0),$weakMapSet=callBound("WeakMap.prototype.set",!0),$weakMapHas=callBound("WeakMap.prototype.has",!0),$mapGet=callBound("Map.prototype.get",!0),$mapSet=callBound("Map.prototype.set",!0),$mapHas=callBound("Map.prototype.has",!0),listGetNode=function(list,key){for(var curr,prev=list;null!==(curr=prev.next);prev=curr)if(curr.key===key)return prev.next=curr.next,curr.next=list.next,list.next=curr,curr};module.exports=function getSideChannel(){var $wm,$m,$o,channel={assert:function(key){if(!channel.has(key))throw new $TypeError("Side channel does not contain "+inspect(key))},get:function(key){if($WeakMap&&key&&("object"==typeof key||"function"==typeof key)){if($wm)return $weakMapGet($wm,key)}else if($Map){if($m)return $mapGet($m,key)}else if($o)return function(objects,key){var node=listGetNode(objects,key);return node&&node.value}($o,key)},has:function(key){if($WeakMap&&key&&("object"==typeof key||"function"==typeof key)){if($wm)return $weakMapHas($wm,key)}else if($Map){if($m)return $mapHas($m,key)}else if($o)return function(objects,key){return!!listGetNode(objects,key)}($o,key);return!1},set:function(key,value){$WeakMap&&key&&("object"==typeof key||"function"==typeof key)?($wm||($wm=new $WeakMap),$weakMapSet($wm,key,value)):$Map?($m||($m=new $Map),$mapSet($m,key,value)):($o||($o={key:{},next:null}),function(objects,key,value){var node=listGetNode(objects,key);node?node.value=value:objects.next={key:key,next:objects.next,value:value}}($o,key,value))}};return channel}}}]);
//# sourceMappingURL=vendors~main~678f84af.522f5f2e.iframe.bundle.js.map