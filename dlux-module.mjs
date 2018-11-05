export var postKey,permlink,origin,hasMemoKey=false,iam="Init";
export function init(){if(window.addEventListener){window.addEventListener("message",onMessage,false);}else if(window.attachEvent){window.attachEvent("onmessage", onMessage, false);}}
export function onMessage(e){if(origin){if(event.origin!==origin){return;}}else{origin=event.origin}var d=e.data;if(typeof(window[d.func])=="function"){if(d.func=='iAm'||d.func=='memoKey'||d.func=='key'||d.func=='steemState'||d.func=='onSceneLoad'||d.func=='msg'){window[d.func].call(null, d.message);}}}
export function vote(a){var v=a||10000;window.parent.postMessage({'func':'vote','message':v},"*");}
export function sendLink(l){window.parent.postMessage({'func':'sendLink','message':l},"*");}
export function aVote(d) {window.parent.postMessage({'func':'aVote','message':{'permlink':d.split('/')[0],'author':d.split('/')[1],'weight':10000||d.split('/')[2],}},"*");}
export function memoKey(m){hasMemoKey=m;}
export function key(m){postKey=m;permlink=m.split('/');onSceneLoad(iam);}
export function steemState(m){stateObj=m}
export function iAm(m){iam=m}
export function msg(m){console.info(m)}
export function onpageloaded(){window.parent.postMessage({'func':'iloaded','message':''},"*");}
export function comment(m){window.parent.postMessage({'func':'comment','message':{'message':m.message,'customJSON':m.customJSON}},"*");}
