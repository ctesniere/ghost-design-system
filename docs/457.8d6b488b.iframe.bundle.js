(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{"./node_modules/date-fns/locale/ca/_lib/formatRelative/index.js":function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function formatRelative(token,date,_baseDate,_options){if(1!==date.getUTCHours())return formatRelativeLocalePlural[token];return formatRelativeLocale[token]};var formatRelativeLocale={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'demà a la' p",nextWeek:"eeee 'a la' p",other:"P"},formatRelativeLocalePlural={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'demà a les' p",nextWeek:"eeee 'a les' p",other:"P"};module.exports=exports.default}}]);