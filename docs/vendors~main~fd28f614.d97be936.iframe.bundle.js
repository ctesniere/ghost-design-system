(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"./node_modules/@popperjs/core/lib/enums.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"m",(function(){return top})),__webpack_require__.d(__webpack_exports__,"c",(function(){return bottom})),__webpack_require__.d(__webpack_exports__,"k",(function(){return right})),__webpack_require__.d(__webpack_exports__,"f",(function(){return left})),__webpack_require__.d(__webpack_exports__,"a",(function(){return auto})),__webpack_require__.d(__webpack_exports__,"b",(function(){return basePlacements})),__webpack_require__.d(__webpack_exports__,"l",(function(){return start})),__webpack_require__.d(__webpack_exports__,"e",(function(){return end})),__webpack_require__.d(__webpack_exports__,"d",(function(){return clippingParents})),__webpack_require__.d(__webpack_exports__,"o",(function(){return viewport})),__webpack_require__.d(__webpack_exports__,"i",(function(){return popper})),__webpack_require__.d(__webpack_exports__,"j",(function(){return reference})),__webpack_require__.d(__webpack_exports__,"n",(function(){return variationPlacements})),__webpack_require__.d(__webpack_exports__,"h",(function(){return placements})),__webpack_require__.d(__webpack_exports__,"g",(function(){return modifierPhases}));var top="top",bottom="bottom",right="right",left="left",auto="auto",basePlacements=[top,bottom,right,left],start="start",end="end",clippingParents="clippingParents",viewport="viewport",popper="popper",reference="reference",variationPlacements=basePlacements.reduce((function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end])}),[]),placements=[].concat(basePlacements,[auto]).reduce((function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end])}),[]),modifierPhases=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},"./node_modules/@popperjs/core/lib/popper.js":function(module,__webpack_exports__,__webpack_require__){"use strict";function getWindow(node){if(null==node)return window;if("[object Window]"!==node.toString()){var ownerDocument=node.ownerDocument;return ownerDocument&&ownerDocument.defaultView||window}return node}function isElement(node){return node instanceof getWindow(node).Element||node instanceof Element}function isHTMLElement(node){return node instanceof getWindow(node).HTMLElement||node instanceof HTMLElement}function isShadowRoot(node){return"undefined"!=typeof ShadowRoot&&(node instanceof getWindow(node).ShadowRoot||node instanceof ShadowRoot)}__webpack_require__.d(__webpack_exports__,"a",(function(){return popper_createPopper}));var math_max=Math.max,math_min=Math.min,round=Math.round;function getBoundingClientRect(element,includeScale){void 0===includeScale&&(includeScale=!1);var rect=element.getBoundingClientRect(),scaleX=1,scaleY=1;if(isHTMLElement(element)&&includeScale){var offsetHeight=element.offsetHeight,offsetWidth=element.offsetWidth;offsetWidth>0&&(scaleX=round(rect.width)/offsetWidth||1),offsetHeight>0&&(scaleY=round(rect.height)/offsetHeight||1)}return{width:rect.width/scaleX,height:rect.height/scaleY,top:rect.top/scaleY,right:rect.right/scaleX,bottom:rect.bottom/scaleY,left:rect.left/scaleX,x:rect.left/scaleX,y:rect.top/scaleY}}function getWindowScroll(node){var win=getWindow(node);return{scrollLeft:win.pageXOffset,scrollTop:win.pageYOffset}}function getNodeName(element){return element?(element.nodeName||"").toLowerCase():null}function getDocumentElement(element){return((isElement(element)?element.ownerDocument:element.document)||window.document).documentElement}function getWindowScrollBarX(element){return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft}function getComputedStyle(element){return getWindow(element).getComputedStyle(element)}function isScrollParent(element){var _getComputedStyle=getComputedStyle(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX)}function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){void 0===isFixed&&(isFixed=!1);var isOffsetParentAnElement=isHTMLElement(offsetParent),offsetParentIsScaled=isHTMLElement(offsetParent)&&function isElementScaled(element){var rect=element.getBoundingClientRect(),scaleX=round(rect.width)/element.offsetWidth||1,scaleY=round(rect.height)/element.offsetHeight||1;return 1!==scaleX||1!==scaleY}(offsetParent),documentElement=getDocumentElement(offsetParent),rect=getBoundingClientRect(elementOrVirtualElement,offsetParentIsScaled),scroll={scrollLeft:0,scrollTop:0},offsets={x:0,y:0};return(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed)&&(("body"!==getNodeName(offsetParent)||isScrollParent(documentElement))&&(scroll=function getNodeScroll(node){return node!==getWindow(node)&&isHTMLElement(node)?function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}}(node):getWindowScroll(node)}(offsetParent)),isHTMLElement(offsetParent)?((offsets=getBoundingClientRect(offsetParent,!0)).x+=offsetParent.clientLeft,offsets.y+=offsetParent.clientTop):documentElement&&(offsets.x=getWindowScrollBarX(documentElement))),{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function getLayoutRect(element){var clientRect=getBoundingClientRect(element),width=element.offsetWidth,height=element.offsetHeight;return Math.abs(clientRect.width-width)<=1&&(width=clientRect.width),Math.abs(clientRect.height-height)<=1&&(height=clientRect.height),{x:element.offsetLeft,y:element.offsetTop,width:width,height:height}}function getParentNode(element){return"html"===getNodeName(element)?element:element.assignedSlot||element.parentNode||(isShadowRoot(element)?element.host:null)||getDocumentElement(element)}function getScrollParent(node){return["html","body","#document"].indexOf(getNodeName(node))>=0?node.ownerDocument.body:isHTMLElement(node)&&isScrollParent(node)?node:getScrollParent(getParentNode(node))}function listScrollParents(element,list){var _element$ownerDocumen;void 0===list&&(list=[]);var scrollParent=getScrollParent(element),isBody=scrollParent===(null==(_element$ownerDocumen=element.ownerDocument)?void 0:_element$ownerDocumen.body),win=getWindow(scrollParent),target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent,updatedList=list.concat(target);return isBody?updatedList:updatedList.concat(listScrollParents(getParentNode(target)))}function isTableElement(element){return["table","td","th"].indexOf(getNodeName(element))>=0}function getTrueOffsetParent(element){return isHTMLElement(element)&&"fixed"!==getComputedStyle(element).position?element.offsetParent:null}function getOffsetParent(element){for(var window=getWindow(element),offsetParent=getTrueOffsetParent(element);offsetParent&&isTableElement(offsetParent)&&"static"===getComputedStyle(offsetParent).position;)offsetParent=getTrueOffsetParent(offsetParent);return offsetParent&&("html"===getNodeName(offsetParent)||"body"===getNodeName(offsetParent)&&"static"===getComputedStyle(offsetParent).position)?window:offsetParent||function getContainingBlock(element){var isFirefox=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&isHTMLElement(element)&&"fixed"===getComputedStyle(element).position)return null;var currentNode=getParentNode(element);for(isShadowRoot(currentNode)&&(currentNode=currentNode.host);isHTMLElement(currentNode)&&["html","body"].indexOf(getNodeName(currentNode))<0;){var css=getComputedStyle(currentNode);if("none"!==css.transform||"none"!==css.perspective||"paint"===css.contain||-1!==["transform","perspective"].indexOf(css.willChange)||isFirefox&&"filter"===css.willChange||isFirefox&&css.filter&&"none"!==css.filter)return currentNode;currentNode=currentNode.parentNode}return null}(element)||window}var enums=__webpack_require__("./node_modules/@popperjs/core/lib/enums.js");function order(modifiers){var map=new Map,visited=new Set,result=[];function sort(modifier){visited.add(modifier.name),[].concat(modifier.requires||[],modifier.requiresIfExists||[]).forEach((function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);depModifier&&sort(depModifier)}})),result.push(modifier)}return modifiers.forEach((function(modifier){map.set(modifier.name,modifier)})),modifiers.forEach((function(modifier){visited.has(modifier.name)||sort(modifier)})),result}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return!args.some((function(element){return!(element&&"function"==typeof element.getBoundingClientRect)}))}function popperGenerator(generatorOptions){void 0===generatorOptions&&(generatorOptions={});var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=void 0===_generatorOptions$def?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=void 0===_generatorOptions$def2?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){void 0===options&&(options=defaultOptions);var fn,pending,state={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}},effectCleanupFns=[],isDestroyed=!1,instance={state:state,setOptions:function setOptions(setOptionsAction){var options="function"==typeof setOptionsAction?setOptionsAction(state.options):setOptionsAction;cleanupModifierEffects(),state.options=Object.assign({},defaultOptions,state.options,options),state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};var orderedModifiers=function orderModifiers(modifiers){var orderedModifiers=order(modifiers);return enums.g.reduce((function(acc,phase){return acc.concat(orderedModifiers.filter((function(modifier){return modifier.phase===phase})))}),[])}(function mergeByName(modifiers){var merged=modifiers.reduce((function(merged,current){var existing=merged[current.name];return merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current,merged}),{});return Object.keys(merged).map((function(key){return merged[key]}))}([].concat(defaultModifiers,state.options.modifiers)));return state.orderedModifiers=orderedModifiers.filter((function(m){return m.enabled})),function runModifierEffects(){state.orderedModifiers.forEach((function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=void 0===_ref3$options?{}:_ref3$options,effect=_ref3.effect;if("function"==typeof effect){var cleanupFn=effect({state:state,name:name,instance:instance,options:options}),noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn)}}))}(),instance.update()},forceUpdate:function forceUpdate(){if(!isDestroyed){var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;if(areValidElements(reference,popper)){state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),"fixed"===state.options.strategy),popper:getLayoutRect(popper)},state.reset=!1,state.placement=state.options.placement,state.orderedModifiers.forEach((function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data)}));for(var index=0;index<state.orderedModifiers.length;index++)if(!0!==state.reset){var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=void 0===_state$orderedModifie2?{}:_state$orderedModifie2,name=_state$orderedModifie.name;"function"==typeof fn&&(state=fn({state:state,options:_options,name:name,instance:instance})||state)}else state.reset=!1,index=-1}}},update:(fn=function(){return new Promise((function(resolve){instance.forceUpdate(),resolve(state)}))},function(){return pending||(pending=new Promise((function(resolve){Promise.resolve().then((function(){pending=void 0,resolve(fn())}))}))),pending}),destroy:function destroy(){cleanupModifierEffects(),isDestroyed=!0}};if(!areValidElements(reference,popper))return instance;function cleanupModifierEffects(){effectCleanupFns.forEach((function(fn){return fn()})),effectCleanupFns=[]}return instance.setOptions(options).then((function(state){!isDestroyed&&options.onFirstUpdate&&options.onFirstUpdate(state)})),instance}}var passive={passive:!0};function getBasePlacement(placement){return placement.split("-")[0]}function getVariation(placement){return placement.split("-")[1]}function getMainAxisFromPlacement(placement){return["top","bottom"].indexOf(placement)>=0?"x":"y"}function computeOffsets(_ref){var offsets,reference=_ref.reference,element=_ref.element,placement=_ref.placement,basePlacement=placement?getBasePlacement(placement):null,variation=placement?getVariation(placement):null,commonX=reference.x+reference.width/2-element.width/2,commonY=reference.y+reference.height/2-element.height/2;switch(basePlacement){case enums.m:offsets={x:commonX,y:reference.y-element.height};break;case enums.c:offsets={x:commonX,y:reference.y+reference.height};break;case enums.k:offsets={x:reference.x+reference.width,y:commonY};break;case enums.f:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y}}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(null!=mainAxis){var len="y"===mainAxis?"height":"width";switch(variation){case enums.l:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case enums.e:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2)}}return offsets}var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mapToStyles(_ref2){var _Object$assign2,popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,variation=_ref2.variation,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets,isFixed=_ref2.isFixed,_offsets$x=offsets.x,x=void 0===_offsets$x?0:_offsets$x,_offsets$y=offsets.y,y=void 0===_offsets$y?0:_offsets$y,_ref3="function"==typeof roundOffsets?roundOffsets({x:x,y:y}):{x:x,y:y};x=_ref3.x,y=_ref3.y;var hasX=offsets.hasOwnProperty("x"),hasY=offsets.hasOwnProperty("y"),sideX=enums.f,sideY=enums.m,win=window;if(adaptive){var offsetParent=getOffsetParent(popper),heightProp="clientHeight",widthProp="clientWidth";if(offsetParent===getWindow(popper)&&"static"!==getComputedStyle(offsetParent=getDocumentElement(popper)).position&&"absolute"===position&&(heightProp="scrollHeight",widthProp="scrollWidth"),offsetParent=offsetParent,placement===enums.m||(placement===enums.f||placement===enums.k)&&variation===enums.e)sideY=enums.c,y-=(isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.height:offsetParent[heightProp])-popperRect.height,y*=gpuAcceleration?1:-1;if(placement===enums.f||(placement===enums.m||placement===enums.c)&&variation===enums.e)sideX=enums.k,x-=(isFixed&&offsetParent===win&&win.visualViewport?win.visualViewport.width:offsetParent[widthProp])-popperRect.width,x*=gpuAcceleration?1:-1}var _Object$assign,commonStyles=Object.assign({position:position},adaptive&&unsetSides),_ref4=!0===roundOffsets?function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y,dpr=window.devicePixelRatio||1;return{x:round(x*dpr)/dpr||0,y:round(y*dpr)/dpr||0}}({x:x,y:y}):{x:x,y:y};return x=_ref4.x,y=_ref4.y,gpuAcceleration?Object.assign({},commonStyles,((_Object$assign={})[sideY]=hasY?"0":"",_Object$assign[sideX]=hasX?"0":"",_Object$assign.transform=(win.devicePixelRatio||1)<=1?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign)):Object.assign({},commonStyles,((_Object$assign2={})[sideY]=hasY?y+"px":"",_Object$assign2[sideX]=hasX?x+"px":"",_Object$assign2.transform="",_Object$assign2))}var hash={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,(function(matched){return hash[matched]}))}var getOppositeVariationPlacement_hash={start:"end",end:"start"};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,(function(matched){return getOppositeVariationPlacement_hash[matched]}))}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child))return!0;if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next))return!0;next=next.parentNode||next.host}while(next)}return!1}function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height})}function getClientRectFromMixedType(element,clippingParent){return clippingParent===enums.o?rectToClientRect(function getViewportRect(element){var win=getWindow(element),html=getDocumentElement(element),visualViewport=win.visualViewport,width=html.clientWidth,height=html.clientHeight,x=0,y=0;return visualViewport&&(width=visualViewport.width,height=visualViewport.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(x=visualViewport.offsetLeft,y=visualViewport.offsetTop)),{width:width,height:height,x:x+getWindowScrollBarX(element),y:y}}(element)):isElement(clippingParent)?function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);return rect.top=rect.top+element.clientTop,rect.left=rect.left+element.clientLeft,rect.bottom=rect.top+element.clientHeight,rect.right=rect.left+element.clientWidth,rect.width=element.clientWidth,rect.height=element.clientHeight,rect.x=rect.left,rect.y=rect.top,rect}(clippingParent):rectToClientRect(function getDocumentRect(element){var _element$ownerDocumen,html=getDocumentElement(element),winScroll=getWindowScroll(element),body=null==(_element$ownerDocumen=element.ownerDocument)?void 0:_element$ownerDocumen.body,width=math_max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0),height=math_max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0),x=-winScroll.scrollLeft+getWindowScrollBarX(element),y=-winScroll.scrollTop;return"rtl"===getComputedStyle(body||html).direction&&(x+=math_max(html.clientWidth,body?body.clientWidth:0)-width),{width:width,height:height,x:x,y:y}}(getDocumentElement(element)))}function getClippingRect(element,boundary,rootBoundary){var mainClippingParents="clippingParents"===boundary?function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element)),clipperElement=["absolute","fixed"].indexOf(getComputedStyle(element).position)>=0&&isHTMLElement(element)?getOffsetParent(element):element;return isElement(clipperElement)?clippingParents.filter((function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&"body"!==getNodeName(clippingParent)})):[]}(element):[].concat(boundary),clippingParents=[].concat(mainClippingParents,[rootBoundary]),firstClippingParent=clippingParents[0],clippingRect=clippingParents.reduce((function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);return accRect.top=math_max(rect.top,accRect.top),accRect.right=math_min(rect.right,accRect.right),accRect.bottom=math_min(rect.bottom,accRect.bottom),accRect.left=math_max(rect.left,accRect.left),accRect}),getClientRectFromMixedType(element,firstClippingParent));return clippingRect.width=clippingRect.right-clippingRect.left,clippingRect.height=clippingRect.bottom-clippingRect.top,clippingRect.x=clippingRect.left,clippingRect.y=clippingRect.top,clippingRect}function mergePaddingObject(paddingObject){return Object.assign({},{top:0,right:0,bottom:0,left:0},paddingObject)}function expandToHashMap(value,keys){return keys.reduce((function(hashMap,key){return hashMap[key]=value,hashMap}),{})}function detectOverflow(state,options){void 0===options&&(options={});var _options=options,_options$placement=_options.placement,placement=void 0===_options$placement?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=void 0===_options$boundary?enums.d:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=void 0===_options$rootBoundary?enums.o:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=void 0===_options$elementConte?enums.i:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=void 0!==_options$altBoundary&&_options$altBoundary,_options$padding=_options.padding,padding=void 0===_options$padding?0:_options$padding,paddingObject=mergePaddingObject("number"!=typeof padding?padding:expandToHashMap(padding,enums.b)),altContext=elementContext===enums.i?enums.j:enums.i,popperRect=state.rects.popper,element=state.elements[altBoundary?altContext:elementContext],clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary),referenceClientRect=getBoundingClientRect(state.elements.reference),popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:"absolute",placement:placement}),popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets)),elementClientRect=elementContext===enums.i?popperClientRect:referenceClientRect,overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right},offsetData=state.modifiersData.offset;if(elementContext===enums.i&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach((function(key){var multiply=[enums.k,enums.c].indexOf(key)>=0?1:-1,axis=[enums.m,enums.c].indexOf(key)>=0?"y":"x";overflowOffsets[key]+=offset[axis]*multiply}))}return overflowOffsets}function within(min,value,max){return math_max(min,math_min(value,max))}function getSideOffsets(overflow,rect,preventedOffsets){return void 0===preventedOffsets&&(preventedOffsets={x:0,y:0}),{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x}}function isAnySideFullyClipped(overflow){return[enums.m,enums.k,enums.c,enums.f].some((function(side){return overflow[side]>=0}))}var popper_createPopper=popperGenerator({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function fn(){},effect:function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options,_options$scroll=options.scroll,scroll=void 0===_options$scroll||_options$scroll,_options$resize=options.resize,resize=void 0===_options$resize||_options$resize,window=getWindow(state.elements.popper),scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);return scroll&&scrollParents.forEach((function(scrollParent){scrollParent.addEventListener("scroll",instance.update,passive)})),resize&&window.addEventListener("resize",instance.update,passive),function(){scroll&&scrollParents.forEach((function(scrollParent){scrollParent.removeEventListener("scroll",instance.update,passive)})),resize&&window.removeEventListener("resize",instance.update,passive)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function popperOffsets_popperOffsets(_ref){var state=_ref.state,name=_ref.name;state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:"absolute",placement:state.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function computeStyles(_ref5){var state=_ref5.state,options=_ref5.options,_options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=void 0===_options$gpuAccelerat||_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=void 0===_options$adaptive||_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=void 0===_options$roundOffsets||_options$roundOffsets,commonStyles={placement:getBasePlacement(state.placement),variation:getVariation(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration,isFixed:"fixed"===state.options.strategy};null!=state.modifiersData.popperOffsets&&(state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})))),null!=state.modifiersData.arrow&&(state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:roundOffsets})))),state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-placement":state.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach((function(name){var style=state.styles[name]||{},attributes=state.attributes[name]||{},element=state.elements[name];isHTMLElement(element)&&getNodeName(element)&&(Object.assign(element.style,style),Object.keys(attributes).forEach((function(name){var value=attributes[name];!1===value?element.removeAttribute(name):element.setAttribute(name,!0===value?"":value)})))}))},effect:function applyStyles_effect(_ref2){var state=_ref2.state,initialStyles={popper:{position:state.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(state.elements.popper.style,initialStyles.popper),state.styles=initialStyles,state.elements.arrow&&Object.assign(state.elements.arrow.style,initialStyles.arrow),function(){Object.keys(state.elements).forEach((function(name){var element=state.elements[name],attributes=state.attributes[name]||{},style=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]).reduce((function(style,property){return style[property]="",style}),{});isHTMLElement(element)&&getNodeName(element)&&(Object.assign(element.style,style),Object.keys(attributes).forEach((function(attribute){element.removeAttribute(attribute)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function offset_offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name,_options$offset=options.offset,offset=void 0===_options$offset?[0,0]:_options$offset,data=enums.h.reduce((function(acc,placement){return acc[placement]=function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement),invertDistance=[enums.f,enums.m].indexOf(basePlacement)>=0?-1:1,_ref="function"==typeof offset?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];return skidding=skidding||0,distance=(distance||0)*invertDistance,[enums.f,enums.k].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance}}(placement,state.rects,offset),acc}),{}),_data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;null!=state.modifiersData.popperOffsets&&(state.modifiersData.popperOffsets.x+=x,state.modifiersData.popperOffsets.y+=y),state.modifiersData[name]=data}},{name:"flip",enabled:!0,phase:"main",fn:function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(!state.modifiersData[name]._skip){for(var _options$mainAxis=options.mainAxis,checkMainAxis=void 0===_options$mainAxis||_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=void 0===_options$altAxis||_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=void 0===_options$flipVariatio||_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements,preferredPlacement=state.options.placement,basePlacement=getBasePlacement(preferredPlacement),fallbackPlacements=specifiedFallbackPlacements||(basePlacement===preferredPlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===enums.a)return[];var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)]}(preferredPlacement)),placements=[preferredPlacement].concat(fallbackPlacements).reduce((function(acc,placement){return acc.concat(getBasePlacement(placement)===enums.a?function computeAutoPlacement(state,options){void 0===options&&(options={});var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=void 0===_options$allowedAutoP?enums.h:_options$allowedAutoP,variation=getVariation(placement),placements=variation?flipVariations?enums.n:enums.n.filter((function(placement){return getVariation(placement)===variation})):enums.b,allowedPlacements=placements.filter((function(placement){return allowedAutoPlacements.indexOf(placement)>=0}));0===allowedPlacements.length&&(allowedPlacements=placements);var overflows=allowedPlacements.reduce((function(acc,placement){return acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)],acc}),{});return Object.keys(overflows).sort((function(a,b){return overflows[a]-overflows[b]}))}(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement)}),[]),referenceRect=state.rects.reference,popperRect=state.rects.popper,checksMap=new Map,makeFallbackChecks=!0,firstFittingPlacement=placements[0],i=0;i<placements.length;i++){var placement=placements[i],_basePlacement=getBasePlacement(placement),isStartVariation=getVariation(placement)===enums.l,isVertical=[enums.m,enums.c].indexOf(_basePlacement)>=0,len=isVertical?"width":"height",overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding}),mainVariationSide=isVertical?isStartVariation?enums.k:enums.f:isStartVariation?enums.c:enums.m;referenceRect[len]>popperRect[len]&&(mainVariationSide=getOppositePlacement(mainVariationSide));var altVariationSide=getOppositePlacement(mainVariationSide),checks=[];if(checkMainAxis&&checks.push(overflow[_basePlacement]<=0),checkAltAxis&&checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0),checks.every((function(check){return check}))){firstFittingPlacement=placement,makeFallbackChecks=!1;break}checksMap.set(placement,checks)}if(makeFallbackChecks)for(var _loop=function _loop(_i){var fittingPlacement=placements.find((function(placement){var checks=checksMap.get(placement);if(checks)return checks.slice(0,_i).every((function(check){return check}))}));if(fittingPlacement)return firstFittingPlacement=fittingPlacement,"break"},_i=flipVariations?3:1;_i>0;_i--){if("break"===_loop(_i))break}state.placement!==firstFittingPlacement&&(state.modifiersData[name]._skip=!0,state.placement=firstFittingPlacement,state.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name,_options$mainAxis=options.mainAxis,checkMainAxis=void 0===_options$mainAxis||_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=void 0!==_options$altAxis&&_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=void 0===_options$tether||_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=void 0===_options$tetherOffset?0:_options$tetherOffset,overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary}),basePlacement=getBasePlacement(state.placement),variation=getVariation(state.placement),isBasePlacement=!variation,mainAxis=getMainAxisFromPlacement(basePlacement),altAxis=function getAltAxis(axis){return"x"===axis?"y":"x"}(mainAxis),popperOffsets=state.modifiersData.popperOffsets,referenceRect=state.rects.reference,popperRect=state.rects.popper,tetherOffsetValue="function"==typeof tetherOffset?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset,normalizedTetherOffsetValue="number"==typeof tetherOffsetValue?{mainAxis:tetherOffsetValue,altAxis:tetherOffsetValue}:Object.assign({mainAxis:0,altAxis:0},tetherOffsetValue),offsetModifierState=state.modifiersData.offset?state.modifiersData.offset[state.placement]:null,data={x:0,y:0};if(popperOffsets){if(checkMainAxis){var _offsetModifierState$,mainSide="y"===mainAxis?enums.m:enums.f,altSide="y"===mainAxis?enums.c:enums.k,len="y"===mainAxis?"height":"width",offset=popperOffsets[mainAxis],min=offset+overflow[mainSide],max=offset-overflow[altSide],additive=tether?-popperRect[len]/2:0,minLen=variation===enums.l?referenceRect[len]:popperRect[len],maxLen=variation===enums.l?-popperRect[len]:-referenceRect[len],arrowElement=state.elements.arrow,arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0},arrowPaddingObject=state.modifiersData["arrow#persistent"]?state.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},arrowPaddingMin=arrowPaddingObject[mainSide],arrowPaddingMax=arrowPaddingObject[altSide],arrowLen=within(0,referenceRect[len],arrowRect[len]),minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis:minLen-arrowLen-arrowPaddingMin-normalizedTetherOffsetValue.mainAxis,maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis:maxLen+arrowLen+arrowPaddingMax+normalizedTetherOffsetValue.mainAxis,arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow),clientOffset=arrowOffsetParent?"y"===mainAxis?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0,offsetModifierValue=null!=(_offsetModifierState$=null==offsetModifierState?void 0:offsetModifierState[mainAxis])?_offsetModifierState$:0,tetherMax=offset+maxOffset-offsetModifierValue,preventedOffset=within(tether?math_min(min,offset+minOffset-offsetModifierValue-clientOffset):min,offset,tether?math_max(max,tetherMax):max);popperOffsets[mainAxis]=preventedOffset,data[mainAxis]=preventedOffset-offset}if(checkAltAxis){var _offsetModifierState$2,_mainSide="x"===mainAxis?enums.m:enums.f,_altSide="x"===mainAxis?enums.c:enums.k,_offset=popperOffsets[altAxis],_len="y"===altAxis?"height":"width",_min=_offset+overflow[_mainSide],_max=_offset-overflow[_altSide],isOriginSide=-1!==[enums.m,enums.f].indexOf(basePlacement),_offsetModifierValue=null!=(_offsetModifierState$2=null==offsetModifierState?void 0:offsetModifierState[altAxis])?_offsetModifierState$2:0,_tetherMin=isOriginSide?_min:_offset-referenceRect[_len]-popperRect[_len]-_offsetModifierValue+normalizedTetherOffsetValue.altAxis,_tetherMax=isOriginSide?_offset+referenceRect[_len]+popperRect[_len]-_offsetModifierValue-normalizedTetherOffsetValue.altAxis:_max,_preventedOffset=tether&&isOriginSide?function withinMaxClamp(min,value,max){var v=within(min,value,max);return v>max?max:v}(_tetherMin,_offset,_tetherMax):within(tether?_tetherMin:_min,_offset,tether?_tetherMax:_max);popperOffsets[altAxis]=_preventedOffset,data[altAxis]=_preventedOffset-_offset}state.modifiersData[name]=data}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function arrow(_ref){var _state$modifiersData$,state=_ref.state,name=_ref.name,options=_ref.options,arrowElement=state.elements.arrow,popperOffsets=state.modifiersData.popperOffsets,basePlacement=getBasePlacement(state.placement),axis=getMainAxisFromPlacement(basePlacement),len=[enums.f,enums.k].indexOf(basePlacement)>=0?"height":"width";if(arrowElement&&popperOffsets){var paddingObject=function toPaddingObject(padding,state){return mergePaddingObject("number"!=typeof(padding="function"==typeof padding?padding(Object.assign({},state.rects,{placement:state.placement})):padding)?padding:expandToHashMap(padding,enums.b))}(options.padding,state),arrowRect=getLayoutRect(arrowElement),minProp="y"===axis?enums.m:enums.f,maxProp="y"===axis?enums.c:enums.k,endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len],startDiff=popperOffsets[axis]-state.rects.reference[axis],arrowOffsetParent=getOffsetParent(arrowElement),clientSize=arrowOffsetParent?"y"===axis?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0,centerToReference=endDiff/2-startDiff/2,min=paddingObject[minProp],max=clientSize-arrowRect[len]-paddingObject[maxProp],center=clientSize/2-arrowRect[len]/2+centerToReference,offset=within(min,center,max),axisProp=axis;state.modifiersData[name]=((_state$modifiersData$={})[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$)}},effect:function arrow_effect(_ref2){var state=_ref2.state,_options$element=_ref2.options.element,arrowElement=void 0===_options$element?"[data-popper-arrow]":_options$element;null!=arrowElement&&("string"!=typeof arrowElement||(arrowElement=state.elements.popper.querySelector(arrowElement)))&&contains(state.elements.popper,arrowElement)&&(state.elements.arrow=arrowElement)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function hide(_ref){var state=_ref.state,name=_ref.name,referenceRect=state.rects.reference,popperRect=state.rects.popper,preventedOffsets=state.modifiersData.preventOverflow,referenceOverflow=detectOverflow(state,{elementContext:"reference"}),popperAltOverflow=detectOverflow(state,{altBoundary:!0}),referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect),popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets),isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets),hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped},state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-reference-hidden":isReferenceHidden,"data-popper-escaped":hasPopperEscaped})}}]})}}]);