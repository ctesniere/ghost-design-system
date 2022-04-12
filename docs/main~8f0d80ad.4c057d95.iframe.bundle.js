(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./src/Components/Molecules/CheckboxField/CheckboxField.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ReadOnly",(function(){return ReadOnly})),__webpack_require__.d(__webpack_exports__,"Error",(function(){return Error})),__webpack_require__.d(__webpack_exports__,"Helper",(function(){return Helper})),__webpack_require__.d(__webpack_exports__,"Highlighted",(function(){return Highlighted})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled})),__webpack_require__.d(__webpack_exports__,"Inline",(function(){return Inline}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.repeat.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/react/index.js"),_CheckboxField__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./src/Components/Molecules/CheckboxField/CheckboxField.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["inputValue"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var options=[{label:"checkbox label 0",value:"KEY_0"},{label:"checkbox label 1",value:"KEY_1",checked:!0},{label:"checkbox label 2 - which can sometimes be "+"very ".repeat(10)+" long",value:"KEY_2",checked:!1},{label:"checkbox label 3 - which can sometimes be "+"extremely ".repeat(50)+" long",value:"KEY_3",checked:void 0},{label:"checkbox label 4 highlighted",value:"KEY_4",highlighted:!0},{label:"checkbox label 5 highlighted and checked",value:"KEY_5",highlighted:!0,checked:!0}];__webpack_exports__.default={title:"Molecule/CheckboxField",component:_CheckboxField__WEBPACK_IMPORTED_MODULE_17__.a,parameters:{storySource:{source:"import React, { useState } from 'react';\nimport { ComponentStory, ComponentMeta } from '@storybook/react';\n\nimport CheckboxField, { ICheckboxFieldProps } from './CheckboxField';\nimport { IToggleEntry } from '../..';\n\nconst options: Array<IToggleEntry> = [\n  { label: 'checkbox label 0', value: 'KEY_0' },\n  { label: 'checkbox label 1', value: 'KEY_1', checked: true },\n  {\n    label: 'checkbox label 2 - which can sometimes be ' + 'very '.repeat(10) + ' long',\n    value: 'KEY_2',\n    checked: false,\n  },\n  {\n    label: 'checkbox label 3 - which can sometimes be ' + 'extremely '.repeat(50) + ' long',\n    value: 'KEY_3',\n    checked: undefined,\n  },\n  { label: 'checkbox label 4 highlighted', value: 'KEY_4', highlighted: true },\n  { label: 'checkbox label 5 highlighted and checked', value: 'KEY_5', highlighted: true, checked: true },\n];\n\nexport default {\n  title: 'Molecule/CheckboxField',\n  component: CheckboxField,\n  parameters: { actions: { argTypesRegex: '^on.*' }, controls: { sort: 'requiredFirst' } },\n} as ComponentMeta<typeof CheckboxField>;\n\nconst Template: ComponentStory<typeof CheckboxField> = ({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n};\n\nexport const Default = Template.bind({});\nDefault.args = {\n  label: 'Checkbox field',\n  inputValue: options,\n};\n\nexport const ReadOnly = Template.bind({});\nReadOnly.args = {\n  fieldSize: 6,\n  label: 'Checkbox field in read only with label size = 4 and field size = 6',\n  labelSize: 4,\n  readOnly: true,\n  inputValue: options,\n};\n\nexport const Error = Template.bind({});\nError.args = {\n  fieldSize: 6,\n  label: 'Checkbox field in error with label size = 4 and field size = 6',\n  labelSize: 4,\n  errorMessage: 'This text is on error',\n  inputValue: options,\n};\n\nexport const Helper = Template.bind({});\nHelper.args = {\n  helperText: 'Helper text',\n  label: 'Checkbox field with helper and counter',\n  mandatory: true,\n  inputValue: options,\n};\n\nexport const Highlighted = Template.bind({});\nHighlighted.args = {\n  helperText: 'Helper text',\n  highlighted: true,\n  readOnly: true,\n  label: 'Checkbox field highlighted',\n  inputValue: options,\n};\n\nexport const Disabled = Template.bind({});\nDisabled.args = {\n  disabled: true,\n  helperText: 'Helper text',\n  label: 'Checkbox field disabled',\n  inputValue: options,\n};\n\nexport const Inline = Template.bind({});\nInline.args = {\n  label: 'Checkbox field disabled',\n  inputValue: [options[0], options[1]],\n  inline: true,\n};\n",locationsMap:{default:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},"read-only":{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},error:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},helper:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},highlighted:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},disabled:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}},inline:{startLoc:{col:55,line:30},endLoc:{col:1,line:33},startBody:{col:55,line:30},endBody:{col:1,line:33}}}},actions:{argTypesRegex:"^on.*"},controls:{sort:"requiredFirst"}}};var Template=function Template(_ref){var inputValue=_ref.inputValue,args=_objectWithoutProperties(_ref,_excluded),_useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_16__.useState)(inputValue),2),localValue=_useState2[0],setLocalValue=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_CheckboxField__WEBPACK_IMPORTED_MODULE_17__.a,Object.assign({},args,{inputValue:localValue,onChange:setLocalValue}))};Template.displayName="Template";var Default=Template.bind({});Default.args={label:"Checkbox field",inputValue:options};var ReadOnly=Template.bind({});ReadOnly.args={fieldSize:6,label:"Checkbox field in read only with label size = 4 and field size = 6",labelSize:4,readOnly:!0,inputValue:options};var Error=Template.bind({});Error.args={fieldSize:6,label:"Checkbox field in error with label size = 4 and field size = 6",labelSize:4,errorMessage:"This text is on error",inputValue:options};var Helper=Template.bind({});Helper.args={helperText:"Helper text",label:"Checkbox field with helper and counter",mandatory:!0,inputValue:options};var Highlighted=Template.bind({});Highlighted.args={helperText:"Helper text",highlighted:!0,readOnly:!0,label:"Checkbox field highlighted",inputValue:options};var Disabled=Template.bind({});Disabled.args={disabled:!0,helperText:"Helper text",label:"Checkbox field disabled",inputValue:options};var Inline=Template.bind({});Inline.args={label:"Checkbox field disabled",inputValue:[options[0],options[1]],inline:!0},Default.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Default.parameters),ReadOnly.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},ReadOnly.parameters),Error.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Error.parameters),Helper.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Helper.parameters),Highlighted.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Highlighted.parameters),Disabled.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Disabled.parameters),Inline.parameters=Object.assign({storySource:{source:"({ inputValue, ...args }: ICheckboxFieldProps) => {\n  const [localValue, setLocalValue] = useState<Array<IToggleEntry>>(inputValue);\n  return <CheckboxField {...args} inputValue={localValue} onChange={setLocalValue} />;\n}"}},Inline.parameters)},"./src/Components/Molecules/CheckboxField/CheckboxField.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Atoms_GenericField__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/Components/Atoms/GenericField/index.ts"),_Atoms_CheckBoxInput__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/Components/Atoms/CheckBoxInput/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CheckboxField=function CheckboxField(props){var containerRef=props.containerRef,dataTestId=props.dataTestId,disabled=props.disabled,errorMessage=props.errorMessage,fieldClassName=props.fieldClassName,fieldSize=props.fieldSize,helperText=props.helperText,highlighted=props.highlighted,inline=props.inline,inputClassName=props.inputClassName,inputValue=props.inputValue,label=props.label,labelSize=props.labelSize,mandatory=props.mandatory,onChange=props.onChange,readOnly=props.readOnly;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms_GenericField__WEBPACK_IMPORTED_MODULE_2__.a,{containerRef:containerRef,errorMessage:errorMessage,fieldClassName:fieldClassName,fieldSize:fieldSize,helperText:helperText,highlighted:highlighted,inline:inline,invertInputDescription:!0,label:label,labelSize:labelSize,mandatory:mandatory,readOnly:readOnly,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Atoms_CheckBoxInput__WEBPACK_IMPORTED_MODULE_3__.a,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("input-checkbox-field",inputClassName),dataTestId:dataTestId,disabled:disabled,highlighted:highlighted,inline:inline,isInError:void 0!==errorMessage,options:inputValue,onChange:onChange,readOnly:readOnly})})};CheckboxField.displayName="CheckboxField",CheckboxField.defaultProps={disabled:!1,errorMessage:void 0,fieldClassName:void 0,fieldSize:void 0,helperText:void 0,highlighted:!1,inline:!1,inputClassName:void 0,inputValue:void 0,isClearable:!1,label:void 0,labelSize:void 0,mandatory:!1,onChange:void 0,placeholder:void 0,readOnly:!1},__webpack_exports__.a=CheckboxField;try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"Checkbox field component\n\nChecbox input wrapped in a generic field ( @see GenericField ).\n\nCalls @param onChange for every input change.",displayName:"CheckboxField",props:{containerRef:{defaultValue:null,description:"React Container ref (optional, default: undefined)",name:"containerRef",required:!1,type:{name:"Ref<HTMLDivElement>"}},dataTestId:{defaultValue:null,description:"For test purpose only",name:"dataTestId",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Disabled field (optional, default: false)",name:"disabled",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:{value:"undefined"},description:"Error message (optional, default: undefined)",name:"errorMessage",required:!1,type:{name:"string"}},fieldClassName:{defaultValue:{value:"undefined"},description:"Class for the field surrounding the input (optional, default: undefined)",name:"fieldClassName",required:!1,type:{name:"string"}},fieldSize:{defaultValue:{value:"undefined"},description:"Size of the field in a 12 column grid (optional, default: undefined)",name:"fieldSize",required:!1,type:{name:"number"}},helperText:{defaultValue:{value:"undefined"},description:"Helper text (optional, default: undefined)",name:"helperText",required:!1,type:{name:"string"}},highlighted:{defaultValue:{value:"false"},description:"Highlighted field and highlight the toggle entries marked as highlight (optional, default: false)",name:"highlighted",required:!1,type:{name:"boolean"}},inline:{defaultValue:{value:"false"},description:"Inline field (optional, default: false)",name:"inline",required:!1,type:{name:"boolean"}},inputClassName:{defaultValue:{value:"undefined"},description:"Class for the input (optional, default: undefined)",name:"inputClassName",required:!1,type:{name:"string"}},inputValue:{defaultValue:{value:"undefined"},description:"Input value",name:"inputValue",required:!1,type:{name:"IToggleEntry[]"}},label:{defaultValue:{value:"undefined"},description:"Label (optional, default: undefined)",name:"label",required:!1,type:{name:"string"}},labelSize:{defaultValue:{value:"undefined"},description:"Size of the field in a 12 column grid (optional, default: undefined)",name:"labelSize",required:!1,type:{name:"number"}},mandatory:{defaultValue:{value:"false"},description:"Mandatory field (optional, default: false)",name:"mandatory",required:!1,type:{name:"boolean"}},onChange:{defaultValue:{value:"undefined"},description:"Handler of value changes (optional, default: undefined)",name:"onChange",required:!1,type:{name:"((values: IToggleEntry[]) => void)"}},readOnly:{defaultValue:{value:"false"},description:"Read only field (optional, default: false)",name:"readOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Molecules/CheckboxField/CheckboxField.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/Components/Molecules/CheckboxField/CheckboxField.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}},"./src/Components/Molecules/CheckboxField/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";var _CheckboxField__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/Components/Molecules/CheckboxField/CheckboxField.tsx");__webpack_require__.d(__webpack_exports__,"a",(function(){return _CheckboxField__WEBPACK_IMPORTED_MODULE_0__.a}))}}]);