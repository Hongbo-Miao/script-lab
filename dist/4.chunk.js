/*! v.Add-in Playground 1.0.0.1483473309153 © Microsoft */
webpackJsonp([4],{38:function(n,o,e){function addStylesToDom(n,o){for(var e=0;e<n.length;e++){var a=n[e],i=t[a.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](a.parts[r]);for(;r<a.parts.length;r++)i.parts.push(addStyle(a.parts[r],o))}else{for(var c=[],r=0;r<a.parts.length;r++)c.push(addStyle(a.parts[r],o));t[a.id]={id:a.id,refs:1,parts:c}}}}function listToStyles(n){for(var o=[],e={},t=0;t<n.length;t++){var a=n[t],i=a[0],r=a[1],c=a[2],l=a[3],d={css:r,media:c,sourceMap:l};e[i]?e[i].parts.push(d):o.push(e[i]={id:i,parts:[d]})}return o}function insertStyleElement(n,o){var e=r(),t=d[d.length-1];if("top"===n.insertAt)t?t.nextSibling?e.insertBefore(o,t.nextSibling):e.appendChild(o):e.insertBefore(o,e.firstChild),d.push(o);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(o)}}function removeStyleElement(n){n.parentNode.removeChild(n);var o=d.indexOf(n);o>=0&&d.splice(o,1)}function createStyleElement(n){var o=document.createElement("style");return o.type="text/css",insertStyleElement(n,o),o}function createLinkElement(n){var o=document.createElement("link");return o.rel="stylesheet",insertStyleElement(n,o),o}function addStyle(n,o){var e,t,a;if(o.singleton){var i=l++;e=c||(c=createStyleElement(o)),t=applyToSingletonTag.bind(null,e,i,!1),a=applyToSingletonTag.bind(null,e,i,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=createLinkElement(o),t=updateLink.bind(null,e),a=function(){removeStyleElement(e),e.href&&URL.revokeObjectURL(e.href)}):(e=createStyleElement(o),t=applyToTag.bind(null,e),a=function(){removeStyleElement(e)});return t(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;t(n=o)}else a()}}function applyToSingletonTag(n,o,e,t){var a=e?"":t.css;if(n.styleSheet)n.styleSheet.cssText=m(o,a);else{var i=document.createTextNode(a),r=n.childNodes;r[o]&&n.removeChild(r[o]),r.length?n.insertBefore(i,r[o]):n.appendChild(i)}}function applyToTag(n,o){var e=o.css,t=o.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function updateLink(n,o){var e=o.css,t=o.sourceMap;t&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var a=new Blob([e],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var t={},a=function(n){var o;return function(){return"undefined"==typeof o&&(o=n.apply(this,arguments)),o}},i=a(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),r=a(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,l=0,d=[];n.exports=function(n,o){o=o||{},"undefined"==typeof o.singleton&&(o.singleton=i()),"undefined"==typeof o.insertAt&&(o.insertAt="bottom");var e=listToStyles(n);return addStylesToDom(e,o),function(n){for(var a=[],i=0;i<e.length;i++){var r=e[i],c=t[r.id];c.refs--,a.push(c)}if(n){var l=listToStyles(n);addStylesToDom(l,o)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete t[c.id]}}}};var m=function(){var n=[];return function(o,e){return n[o]=e,n.filter(Boolean).join("\n")}}()},43:function(n,o,e){var t=e(44);"string"==typeof t&&(t=[[n.id,t,""]]);e(38)(t,{});t.locals&&(n.exports=t.locals)},44:function(n,o){n.exports="main.Light {\n    background-color: #fffffe;\n}\n\nmain.Light .viewport__placeholder {\n    background-color: #fffffe;\n}\n\nmain.Dark {\n    background-color: #1e1e1e;\n}\n\nmain.Dark .viewport__placeholder {\n    background-color: #1e1e1e;\n}\n\n.profile__primary-text {\n    color: #80397b;\n}\n\n.import__field .ms-Label {\n    color: #80397b;\n}\n\n.command__bar {\n    background: #80397b;\n}\n\n.command__title {\n    color: #f9f2f9;\n}\n\n.command__dropdown {\n    background: #dedede;\n}\n\n.command__dropdown .command__icon {\n    color: #666;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command__dropdown .command__icon:active,\n.command__dropdown .command__icon:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command__dropdown .command__icon:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command__dropdown .command__icon--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command__dropdown .command__icon--disabled:active,\n.command__dropdown .command__icon--disabled:hover {\n    background: transparent;\n}\n\n.command__dropdown .command__icon--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command__dropdown .command__icon:hover {\n    background: #5d2959;\n    color: #f9f2f9;\n}\n\n.command__dropdown .command__icon:active,\n.command__dropdown .command__icon:focus {\n    background: #4b2148;\n    color: #f9f2f9;\n}\n\n.command__text, .command__icon {\n    color: #f9f2f9;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command__text:active, .command__text:hover, .command__icon:active,\n.command__icon:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command__text:active, .command__icon:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command__text--disabled, .command__icon--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command__text--disabled:active, .command__text--disabled:hover,\n.command__icon--disabled:active, .command__icon--disabled:hover {\n    background: transparent;\n}\n\n.command__text--disabled:active, .command__icon--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command__text:hover, .command__icon:hover {\n    background: #5d2959;\n    color: #f9f2f9;\n}\n\n.command__text:active, .command__text:focus, .command__icon:active,\n.command__icon:focus {\n    background: #4b2148;\n    color: #f9f2f9;\n}\n\n.command--light.command__bar {\n    background: #dedede;\n}\n\n.command--light .command__icon, .command--light .command__text,\n.command--light .command__title {\n    color: #666;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.command--light .command__icon:active, .command--light .command__icon:hover,\n.command--light .command__text:active, .command--light .command__text:hover,\n.command--light .command__title:active, .command--light .command__title:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.command--light .command__icon:active, .command--light .command__text:active,\n.command--light .command__title:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.command--light .command__icon--disabled,\n.command--light .command__text--disabled,\n.command--light .command__title--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.command--light .command__icon--disabled:active,\n.command--light .command__icon--disabled:hover,\n.command--light .command__text--disabled:active,\n.command--light .command__text--disabled:hover,\n.command--light .command__title--disabled:active,\n.command--light .command__title--disabled:hover {\n    background: transparent;\n}\n\n.command--light .command__icon--disabled:active,\n.command--light .command__text--disabled:active,\n.command--light .command__title--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.command--light .command__icon:hover, .command--light .command__text:hover,\n.command--light .command__title:hover {\n    background: #5d2959;\n    color: #f9f2f9;\n}\n\n.command--light .command__icon:active, .command--light .command__icon:focus,\n.command--light .command__text:active, .command--light .command__text:focus,\n.command--light .command__title:active, .command--light .command__title:focus {\n    background: #4b2148;\n    color: #f9f2f9;\n}\n\n.editor__footer .command__text .ms-Icon--Emoji2 {\n    color: #80397b;\n}\n\n.hamburger-menu {\n    background: #f4f4f4;\n}\n\n.ms-progress-component__title {\n    color: #f9f2f9;\n}\n\n.ms-Pivot-link.is-selected:before {\n    background-color: #f9f2f9;\n}\n\n.ms-Dialog-main .ms-Dialog-header .ms-Dialog-title {\n    background-color: #80397b;\n    color: #f9f2f9;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child {\n    background-color: #80397b;\n    border: #80397b;\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child i {\n    color: #f9f2f9;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child .ms-Button-label {\n    color: #f9f2f9;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:active,\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:hover {\n    background: #5d2959;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child:active {\n    background: #5d2959;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:active,\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:hover {\n    background: transparent;\n}\n\n.ms-Dialog-main .ms-Button.ms-Dialog-action:first-child--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.panel {\n    background: #fff;\n    color: #333;\n}\n\n.panel__title {\n    color: #80397b;\n}\n\n.panel::before {\n    color: #fff;\n}\n\n.editor__header {\n    background: #80397b;\n}\n\n.editor__footer {\n    background-color: #80397b;\n    color: #f9f2f9;\n}\n\n.import__header {\n    background-color: #80397b;\n}\n\n.import__main a {\n    color: #80397b;\n}\n\n.gallery__action {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery__action h1.ms-Button-label {\n    color: #80397b;\n}\n\n.gallery__action:active, .gallery__action:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery__action:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery__action--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery__action--disabled:active, .gallery__action--disabled:hover {\n    background: transparent;\n}\n\n.gallery__action--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery__action:hover, .gallery__action:focus {\n    background-color: #80397b !important;\n}\n\n.gallery__action:hover .ms-Button-description,\n.gallery__action:hover .ms-Button-label,\n.gallery__action:focus .ms-Button-description,\n.gallery__action:focus .ms-Button-label {\n    color: #f9f2f9 !important;\n}\n\n.gallery__section-title {\n    color: #80397b;\n}\n\n.gallery-list__action {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery-list__action:active, .gallery-list__action:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery-list__action:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery-list__action--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery-list__action--disabled:active, .gallery-list__action--disabled:hover {\n    background: transparent;\n}\n\n.gallery-list__action--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery-list__item:active, .gallery-list__item:hover {\n    background: #80397b;\n}\n\n.gallery-list__item:active i, .gallery-list__item:hover i {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.gallery-list__item:active i:active, .gallery-list__item:active i:hover,\n.gallery-list__item:hover i:active, .gallery-list__item:hover i:hover {\n    background: #5d2959;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.gallery-list__item:active i:active, .gallery-list__item:hover i:active {\n    background: #5d2959;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.gallery-list__item:active i--disabled, .gallery-list__item:hover i--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.gallery-list__item:active i--disabled:active,\n.gallery-list__item:active i--disabled:hover,\n.gallery-list__item:hover i--disabled:active,\n.gallery-list__item:hover i--disabled:hover {\n    background: transparent;\n}\n\n.gallery-list__item:active i--disabled:active,\n.gallery-list__item:hover i--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.gallery-list__action:active, .gallery-list__action:hover {\n    background: #4b2148;\n    color: #f9f2f9;\n}\n\n.ms-Pivot.ms-Pivot--tabs {\n    background-color: #4b2148;\n}\n\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link {\n    background: #4b2148;\n    color: white !important;\n}\n\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:active,\n.ms-Pivot.ms-Pivot--tabs .ms-Pivot-link:hover {\n    background: #391a37;\n    color: white !important;\n}\n\n.share__header {\n    background-color: #80397b;\n}\n\n.share__main a {\n    color: #80397b;\n}\n\n.share__main .pre-share .ms-Button {\n    background: #80397b;\n}\n\n.share__main .post-share .info-panel .link-or-id {\n    color: #80397b;\n}\n\nli.gallery__tab.ms-Pivot-link.is-selected.gallery__tab--active,\nli.tabs__tab.ms-Pivot-link.is-selected.tabs__tab--active {\n    background-color: #4b2148;\n    color: #f9f2f9;\n}\n\n.view__header {\n    background-color: #80397b;\n}\n\n.view-bar__command {\n    transition: background ease-in-out .2s, color ease-in-out .2s;\n}\n\n.view-bar__command:active, .view-bar__command:hover {\n    background: #80397b;\n    color: #f9f2f9;\n    cursor: pointer;\n    cursor: hand;\n}\n\n.view-bar__command:active {\n    background: #80397b;\n    -webkit-transform: scale3d(.98, .98, 1);\n            transform: scale3d(.98, .98, 1);\n}\n\n.view-bar__command--disabled {\n    opacity: .6;\n    pointer-events: none;\n    cursor: not-allowed;\n}\n\n.view-bar__command--disabled:active, .view-bar__command--disabled:hover {\n    background: transparent;\n}\n\n.view-bar__command--disabled:active {\n    -webkit-transform: none;\n            transform: none;\n}\n\n.view-bar__command:active, .view-bar__command:hover, .view-bar__command i:active,\n.view-bar__command i:hover {\n    background: #4b2148;\n    color: #f9f2f9;\n}\n"}});
//# sourceMappingURL=4.chunk.js.map