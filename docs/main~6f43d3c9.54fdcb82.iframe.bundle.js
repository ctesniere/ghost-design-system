(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/Components/Atoms/Modal/Modal.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Scroll",(function(){return Scroll}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_Modal__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/Components/Atoms/Modal/Modal.tsx"),_ModalBody__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/Components/Atoms/Modal/ModalBody.tsx"),_ModalFooter__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/Components/Atoms/Modal/ModalFooter.tsx"),_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/Components/Molecules/Button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Atom/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_14__.a,parameters:{storySource:{source:"import React, { useState } from 'react';\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\n\nimport Modal, { IModalProps } from './Modal';\nimport ModalBody from './ModalBody';\nimport ModalFooter from './ModalFooter';\nimport { Button, ColorButtonEnum } from '../../Molecules/Button';\n\nexport default {\n  title: 'Atom/Modal',\n  component: Modal,\n  parameters: { actions: { argTypesRegex: '^on.*' }, controls: { sort: 'requiredFirst' }, layout: 'centered' },\n} as ComponentMeta<typeof Modal>;\n\nconst Template: ComponentStory<typeof Modal> = (args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <Button label='Click to open the modal' onClick={openModal} />\n      <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n        <ModalBody>\n          <p>Lorem ipsum dolor sit amet.</p>\n        </ModalBody>\n        <ModalFooter>\n          <Button color={ColorButtonEnum.PRIMARY} label='Ok' onClick={closeModal} />\n        </ModalFooter>\n      </Modal>\n    </>\n  );\n};\n\nconst TemplateScroll: ComponentStory<typeof Modal> = (args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <div style={{ display: 'flex', height: '150vh', width: '150vw' }}>\n        <div style={{ margin: 'auto' }}>\n          <Button label='Click to open the modal' onClick={openModal} />\n        </div>\n        <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n          <ModalBody>\n            <p>\n              Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam\n              rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate\n              sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto\n              atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim\n              veniam nam odio tempora.\n            </p>\n            <p>\n              Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel\n              consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure\n              velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa\n              illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button color={ColorButtonEnum.SECONDARY} label='cancel' onClick={closeModal} />\n            <Button color={ColorButtonEnum.PRIMARY} label='Submit' icon={['fal', 'paper-plane']} onClick={closeModal} />\n          </ModalFooter>\n        </Modal>\n      </div>\n    </>\n  );\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  size: 'sm',\n};\n\nexport const Scroll = TemplateScroll.bind({});\nScroll.args = {\n  size: 'lg',\n};\n",locationsMap:{default:{startLoc:{col:47,line:15},endLoc:{col:1,line:38},startBody:{col:47,line:15},endBody:{col:1,line:38}},scroll:{startLoc:{col:53,line:40},endLoc:{col:1,line:80},startBody:{col:53,line:40},endBody:{col:1,line:80}}}},actions:{argTypesRegex:"^on.*"},controls:{sort:"requiredFirst"},layout:"centered"}};var Default=function Template(args){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),show=_useState2[0],setShow=_useState2[1],closeModal=function closeModal(){setShow(!1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.a,{label:"Click to open the modal",onClick:function openModal(){setShow(!0)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_14__.a,Object.assign({title:"Lorem ipsum"},args,{show:show,onHide:closeModal,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ModalBody__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet."})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_ModalFooter__WEBPACK_IMPORTED_MODULE_16__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.a,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.b.PRIMARY,label:"Ok",onClick:closeModal})})]}))]})}.bind({});Default.args={size:"sm"};var Scroll=function TemplateScroll(args){var _useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),2),show=_useState4[0],setShow=_useState4[1],closeModal=function closeModal(){setShow(!1)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("div",{style:{display:"flex",height:"150vh",width:"150vw"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("div",{style:{margin:"auto"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.a,{label:"Click to open the modal",onClick:function openModal(){setShow(!0)}})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_Modal__WEBPACK_IMPORTED_MODULE_14__.a,Object.assign({title:"Lorem ipsum"},args,{show:show,onHide:closeModal,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_ModalBody__WEBPACK_IMPORTED_MODULE_15__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim veniam nam odio tempora."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:"Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_ModalFooter__WEBPACK_IMPORTED_MODULE_16__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.a,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.b.SECONDARY,label:"cancel",onClick:closeModal}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.a,{color:_Molecules_Button__WEBPACK_IMPORTED_MODULE_17__.b.PRIMARY,label:"Submit",icon:["fal","paper-plane"],onClick:closeModal})]})]}))]})})}.bind({});Scroll.args={size:"lg"},Default.parameters=Object.assign({storySource:{source:"(args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <Button label='Click to open the modal' onClick={openModal} />\n      <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n        <ModalBody>\n          <p>Lorem ipsum dolor sit amet.</p>\n        </ModalBody>\n        <ModalFooter>\n          <Button color={ColorButtonEnum.PRIMARY} label='Ok' onClick={closeModal} />\n        </ModalFooter>\n      </Modal>\n    </>\n  );\n}"}},Default.parameters),Scroll.parameters=Object.assign({storySource:{source:"(args: IModalProps) => {\n  const [show, setShow] = useState(false);\n\n  const closeModal = () => {\n    setShow(false);\n  };\n  const openModal = () => {\n    setShow(true);\n  };\n\n  return (\n    <>\n      <div style={{ display: 'flex', height: '150vh', width: '150vw' }}>\n        <div style={{ margin: 'auto' }}>\n          <Button label='Click to open the modal' onClick={openModal} />\n        </div>\n        <Modal title='Lorem ipsum' {...args} show={show} onHide={closeModal}>\n          <ModalBody>\n            <p>\n              Lorem ipsum dolor sit amet. Ut voluptas reiciendis vel praesentium laborum hic voluptas asperiores nam\n              rerum nihil obcaecati labore. Id praesentium porro ea placeat rerum aut tempore totam aut illum cupiditate\n              sed laborum explicabo. Hic explicabo voluptatibus qui repellat fugiat ex voluptatum fuga qui architecto\n              atque quo illum quas aut facilis nesciunt? Ut suscipit rerum ut perferendis nihil ea autem unde est enim\n              veniam nam odio tempora.\n            </p>\n            <p>\n              Quo numquam iste est repellendus numquam et galisum omnis ad praesentium dolores aut neque saepe vel\n              consectetur enim aut cumque neque. Et voluptate sapiente quisquam quasi eum beatae voluptas rem iure\n              velit. Sed impedit eaque 33 natus nihil est quaerat porro est quia nisi qui doloribus aperiam. Sit culpa\n              illum ea consectetur perspiciatis ex veritatis dolorem id velit sequi qui maiores asperiores!\n            </p>\n          </ModalBody>\n          <ModalFooter>\n            <Button color={ColorButtonEnum.SECONDARY} label='cancel' onClick={closeModal} />\n            <Button color={ColorButtonEnum.PRIMARY} label='Submit' icon={['fal', 'paper-plane']} onClick={closeModal} />\n          </ModalFooter>\n        </Modal>\n      </div>\n    </>\n  );\n}"}},Scroll.parameters)},"./src/Components/Atoms/Modal/Modal.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__),_hooks__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/hooks/index.ts"),_Portal__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./src/Components/Atoms/Portal/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./src/Components/Atoms/Icon/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Modal=function Modal(props){var children=props.children,closeIcon=props.closeIcon,closeOnPressEscape=props.closeOnPressEscape,closeOnClickOutside=props.closeOnClickOutside,dataTestId=props.dataTestId,onHide=props.onHide,show=props.show,size=props.size,title=props.title,_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(!1),2),isShaking=_useState2[0],setIsShaking=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_12__.useState)(),2),initialBodyStyle=_useState4[0],setInitialBodyStyle=_useState4[1],contentRef=Object(react__WEBPACK_IMPORTED_MODULE_12__.useRef)(null);Object(react__WEBPACK_IMPORTED_MODULE_12__.useEffect)((function(){return show?(setInitialBodyStyle({overflowX:document.body.style.overflowX,overflowY:document.body.style.overflowX}),document.body.style.overflowY="hidden",document.body.style.overflowX="hidden"):(document.body.style.overflowX=(null==initialBodyStyle?void 0:initialBodyStyle.overflowX)||"",document.body.style.overflowY=(null==initialBodyStyle?void 0:initialBodyStyle.overflowY)||""),function(){document.body.style.overflowX=(null==initialBodyStyle?void 0:initialBodyStyle.overflowX)||"",document.body.style.overflowY=(null==initialBodyStyle?void 0:initialBodyStyle.overflowY)||""}}),[show]);var shake=function shake(){setIsShaking(!0),setTimeout((function(){setIsShaking(!1)}),500)};return Object(_hooks__WEBPACK_IMPORTED_MODULE_14__.a)(contentRef,(function(){closeOnClickOutside&&onHide?onHide():shake()})),Object(_hooks__WEBPACK_IMPORTED_MODULE_14__.b)((function(){closeOnPressEscape&&onHide?onHide():shake()})),show?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Portal__WEBPACK_IMPORTED_MODULE_15__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"gds-modal-overlay",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_13___default()("modal-content",{"size-sm":"sm"===size,"size-lg":"lg"===size,shake:isShaking}),ref:contentRef,children:[(closeIcon||title)&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:"modal-header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"modal-title",children:title}),closeIcon&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:"modal-close-icon","data-testid":dataTestId,onClick:function onClick(event){event.stopPropagation(),onHide&&onHide()},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_16__.a,{icon:["fal","times"],size:"2x"})})]}),children]})})}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{})};Modal.defaultProps={closeIcon:!1,enableClickOutide:!1,onHide:void 0,size:"sm",title:void 0},__webpack_exports__.a=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{closeIcon:{defaultValue:{value:"false"},description:"Show the close icon (optional, default: false)",name:"closeIcon",required:!1,type:{name:"boolean"}},closeOnPressEscape:{defaultValue:null,description:"Enable closing the dialog by pressing the escape key (optional, default: false)",name:"closeOnPressEscape",required:!1,type:{name:"boolean"}},closeOnClickOutside:{defaultValue:null,description:"Enable closing the dialog by clicking outside the dialog (optional, default: false)",name:"closeOnClickOutside",required:!1,type:{name:"boolean"}},dataTestId:{defaultValue:null,description:"For test purpose only",name:"dataTestId",required:!1,type:{name:"string"}},onHide:{defaultValue:{value:"undefined"},description:"Callback when a closing button has been triggered (close icon or click outiside for example) (optional, default: undefined)",name:"onHide",required:!1,type:{name:"(() => void)"}},show:{defaultValue:null,description:"Control of the modal",name:"show",required:!0,type:{name:"boolean"}},size:{defaultValue:{value:"sm"},description:"Dialog window size: sm: 300px, lg: 800px (optionsl, default: 'sm')",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}},title:{defaultValue:{value:"undefined"},description:"Title of the modal (optional, default undefined)",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/Components/Atoms/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/ModalBody.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalBody=function ModalBody(props){var children=props.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"modal-body",children:children})};ModalBody.displayName="ModalBody",__webpack_exports__.a=ModalBody;try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"",displayName:"ModalBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/ModalBody.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/Components/Atoms/Modal/ModalBody.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/ModalFooter.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ModalFooter=function ModalFooter(props){var children=props.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"modal-footer",children:children})};ModalFooter.displayName="ModalFooter",__webpack_exports__.a=ModalFooter;try{ModalFooter.displayName="ModalFooter",ModalFooter.__docgenInfo={description:"",displayName:"ModalFooter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Modal/ModalFooter.tsx#ModalFooter"]={docgenInfo:ModalFooter.__docgenInfo,name:"ModalFooter",path:"src/Components/Atoms/Modal/ModalFooter.tsx#ModalFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Modal/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Atoms/Modal/Modal.tsx");__webpack_require__.d(__webpack_exports__,"a",(function(){return _Modal__WEBPACK_IMPORTED_MODULE_0__.a}));var _ModalBody__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/Components/Atoms/Modal/ModalBody.tsx");__webpack_require__.d(__webpack_exports__,"b",(function(){return _ModalBody__WEBPACK_IMPORTED_MODULE_1__.a}));var _ModalFooter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Components/Atoms/Modal/ModalFooter.tsx");__webpack_require__.d(__webpack_exports__,"c",(function(){return _ModalFooter__WEBPACK_IMPORTED_MODULE_2__.a}))},"./src/Components/Atoms/Portal/Portal.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),Portal=function Portal(props){var children=props.children,rootId=props.rootId,target=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),finalRootId=rootId||"root-portal-id";return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var container=document.getElementById(finalRootId);return container||((container=document.createElement("div")).setAttribute("id",finalRootId),document.body.appendChild(container)),target.current&&container.appendChild(target.current),function(){target.current&&target.current.remove(),container&&0===container.childNodes.length&&container.remove()}}),[rootId]),target.current||(target.current=document.createElement("div")),Object(react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,target.current)};__webpack_exports__.a=Portal;try{Portal.displayName="Portal",Portal.__docgenInfo={description:"",displayName:"Portal",props:{rootId:{defaultValue:null,description:"",name:"rootId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Atoms/Portal/Portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/Components/Atoms/Portal/Portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Atoms/Portal/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _Portal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Atoms/Portal/Portal.tsx");__webpack_require__.d(__webpack_exports__,"a",(function(){return _Portal__WEBPACK_IMPORTED_MODULE_0__.a}))},"./src/Components/Atoms/Pulsar/Pulsar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _Pulsar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Components/Atoms/Pulsar/Pulsar.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Atom/Pulsar",component:_Pulsar__WEBPACK_IMPORTED_MODULE_3__.a,parameters:{storySource:{source:"import React from 'react';\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\n\nimport Pulsar from './Pulsar';\n\nexport default {\n  title: 'Atom/Pulsar',\n  component: Pulsar,\n  parameters: { actions: { argTypesRegex: '^on.*' }, controls: { sort: 'requiredFirst' }, layout: 'centered' },\n} as ComponentMeta<typeof Pulsar>;\n\nconst Template: ComponentStory<typeof Pulsar> = () => {\n  return <Pulsar />;\n};\n\nexport const Default = Template.bind({});\n",locationsMap:{default:{startLoc:{col:48,line:12},endLoc:{col:1,line:14},startBody:{col:48,line:12},endBody:{col:1,line:14}}}},actions:{argTypesRegex:"^on.*"},controls:{sort:"requiredFirst"},layout:"centered"}};var Template=function Template(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Pulsar__WEBPACK_IMPORTED_MODULE_3__.a,{})};Template.displayName="Template";var Default=Template.bind({});Default.parameters=Object.assign({storySource:{source:"() => {\n  return <Pulsar />;\n}"}},Default.parameters)},"./src/Components/Atoms/Pulsar/Pulsar.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Pulsar=function Pulsar(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"gds-pulsar"})};Pulsar.displayName="Pulsar",__webpack_exports__.a=Pulsar},"./src/Components/Atoms/Pulsar/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./src/Components/Atoms/Pulsar/Pulsar.tsx")}}]);